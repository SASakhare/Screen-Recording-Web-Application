// engine/recorderEngine.ts
import { useRecorderStore } from "@/store/recoderStore";
import { useSettingsStore } from "@/store/settingStore";

let screenStream: MediaStream | null = null;
let camStream: MediaStream | null = null;
let micStream: MediaStream | null = null;
let recorder: MediaRecorder | null = null;
let chunks: BlobPart[] = [];
let timeInterval: ReturnType<typeof setInterval> | null = null;
let audioContext: AudioContext | null = null;

const store = () => useRecorderStore.getState();
export async function startRecording(): Promise<void> {
    const { setStatus, setError, setSource, audioMode } = store();

    try {
        setStatus("selecting");

        const wantsSystemAudio = audioMode === "system" || audioMode === "both";
        const wantsMic = audioMode === "microphone" || audioMode === "both";

        const { fps60, showCursor } = useSettingsStore.getState();

        // Native picker — ask for system audio only if that mode needs it
        screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                frameRate: fps60 ? 60 : 30,
                cursor: showCursor ? "always" : "never", // non-standard, Chromium-only
            } as MediaTrackConstraints,
            audio: wantsSystemAudio,
        });

        const videoTrack = screenStream.getVideoTracks()[0];
        setSource({
            label: videoTrack.label?.startsWith("web-contents-media-stream")
                ? "Selected Window"
                : videoTrack.label || "Screen",
            value: videoTrack.label || "screen",
        });

        if (wantsMic) {
            try {
                micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            } catch {
                micStream = null; // mic denied — fall back to whatever system audio we have
            }
        }

        const outputStream = buildOutputStream(audioMode);

        chunks = [];
        recorder = new MediaRecorder(outputStream, { mimeType: "video/webm; codecs=vp9" });

        recorder.ondataavailable = (e: BlobEvent) => {
            if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            store().setVideoUrl(URL.createObjectURL(blob));
            store().setStatus("stopped");
            if (timeInterval) clearInterval(timeInterval);
            audioContext?.close();
            audioContext = null;
        };

        recorder.start();
        setStatus("recording");
        store().setElapsed(0);
        startTimer();

        videoTrack.onended = () => stopRecording();
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to start recording";
        setError(message);
        setStatus("idle");
    }
}

// Combines video + the correct audio track(s) into one MediaStream
// based on the selected audio mode.
function buildOutputStream(audioMode: string): MediaStream {
    if (!screenStream) throw new Error("No screen stream available");

    const videoTrack = screenStream.getVideoTracks()[0];

    if (audioMode === "mute") {
        return new MediaStream([videoTrack]);
    }

    const systemAudioTrack = screenStream.getAudioTracks()[0] || null;
    const micAudioTrack = micStream?.getAudioTracks()[0] || null;

    if (audioMode === "system" && systemAudioTrack) {
        return new MediaStream([videoTrack, systemAudioTrack]);
    }

    if (audioMode === "microphone" && micAudioTrack) {
        return new MediaStream([videoTrack, micAudioTrack]);
    }

    if (audioMode === "both" && (systemAudioTrack || micAudioTrack)) {
        // Mix both audio sources into one track via Web Audio API
        audioContext = new AudioContext();
        const destination = audioContext.createMediaStreamDestination();

        if (systemAudioTrack) {
            const sysSource = audioContext.createMediaStreamSource(new MediaStream([systemAudioTrack]));
            sysSource.connect(destination);
        }
        if (micAudioTrack) {
            const micSource = audioContext.createMediaStreamSource(new MediaStream([micAudioTrack]));
            micSource.connect(destination);
        }

        return new MediaStream([videoTrack, ...destination.stream.getAudioTracks()]);
    }

    // Fallback: video only, no usable audio track found
    return new MediaStream([videoTrack]);
}

export function pauseRecording(): void {
    if (!recorder) return;

    if (recorder.state === "recording") {
        recorder.pause();
        store().setStatus("paused");
        if (timeInterval) clearInterval(timeInterval);
    } else if (recorder.state === "paused") {
        recorder.resume();
        store().setStatus("recording");
        startTimer();
    }
}

export function stopRecording(): void {
    recorder?.stop();

    screenStream?.getTracks().forEach((t) => t.stop());
    camStream?.getTracks().forEach((t) => t.stop());
    micStream?.getTracks().forEach((t) => t.stop());

    screenStream = null;
    camStream = null;
    micStream = null;
}

export function getScreenStream(): MediaStream | null {
    return screenStream;
}

export function getCamStream(): MediaStream | null {
    return camStream;
}

function startTimer(): void {
    const startedAt = Date.now() - store().elapsed * 1000;
    timeInterval = setInterval(() => {
        store().setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
}