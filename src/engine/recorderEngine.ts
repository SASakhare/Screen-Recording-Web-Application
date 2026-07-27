// engine/recorderEngine.ts
import { useRecorderStore } from "@/store/recoderStore";

let screenStream: MediaStream | null = null;
let camStream: MediaStream | null = null;
let recorder: MediaRecorder | null = null;
let chunks: BlobPart[] = [];
let timeInterval: ReturnType<typeof setInterval> | null = null;

const store = () => useRecorderStore.getState();

export async function startRecording(): Promise<void> {
    const { setStatus, setError, setSource } = store();

    try {
        setStatus("selecting");

        // Native browser popup: user picks entire screen / a window / a tab
        screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: { frameRate: 30 },
            audio: true,
        });

        const track = screenStream.getVideoTracks()[0];
        setSource({
            label: track.label || "Screen",
            value: track.label || "screen",
        });

        // Webcam — optional, wire in later
        // try {
        //   camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        // } catch {
        //   // webcam denied/unavailable — ignore, it's optional
        // }

        chunks = [];

        recorder = new MediaRecorder(screenStream, {
            mimeType: "video/webm; codecs=vp9",
        });

        recorder.ondataavailable = (e: BlobEvent) => {
            if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            store().setVideoUrl(URL.createObjectURL(blob));
            store().setStatus("stopped");
            if (timeInterval) clearInterval(timeInterval);
        };

        recorder.start();
        setStatus("recording");
        startTimer();

        // If the user clicks the browser's own "Stop sharing" bar
        track.onended = () => stopRecording();
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to start recording";
        setError(message);
        setStatus("idle");
    }
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

    screenStream?.getTracks().forEach((track) => track.stop());
    camStream?.getTracks().forEach((track) => track.stop());

    screenStream = null;
    camStream = null;
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