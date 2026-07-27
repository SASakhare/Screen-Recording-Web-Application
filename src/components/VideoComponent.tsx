// VideoComponent.tsx
import { useEffect, useRef, useState } from "react";
import { useRecorderStore } from "@/store/recoderStore";
import {
    startRecording,
    pauseRecording,
    stopRecording,
    getScreenStream,
} from "@/engine/recorderEngine";
import { LuMonitorPlay } from "react-icons/lu";
import { FaVolumeMute } from "react-icons/fa";

const VideoComponent = () => {
    const status = useRecorderStore((s) => s.status);
    const elapsed = useRecorderStore((s) => s.elapsed);
    const videoUrl = useRecorderStore((s) => s.videoUrl);
    const error = useRecorderStore((s) => s.error);

    const liveVideoRef = useRef<HTMLVideoElement>(null);
    const previewVideoRef = useRef<HTMLVideoElement>(null);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    // Attach the live screen stream to the preview <video> once recording starts
    useEffect(() => {
        if ((status === "recording" || status === "paused") && liveVideoRef.current) {
            liveVideoRef.current.srcObject = getScreenStream();
        }
    }, [status]);

    // Try to autoplay the finished recording, unmuted, as soon as it's ready
    useEffect(() => {
        if (status === "stopped" && videoUrl && previewVideoRef.current) {
            setAutoplayBlocked(false);
            previewVideoRef.current
                .play()
                .catch(() => setAutoplayBlocked(true)); // browser blocked unmuted autoplay
        }
    }, [status, videoUrl]);

    const isRecording = status === "recording";
    const isPaused = status === "paused";
    const isStopped = status === "stopped";
    const canPauseOrStop = isRecording || isPaused;

    const handleSave = () => {
        if (!videoUrl) return;
        const a = document.createElement("a");
        a.href = videoUrl;
        a.download = `recording-${Date.now()}.webm`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const handleUnmutePlay = () => {
        if (previewVideoRef.current) {
            previewVideoRef.current.muted = false;
            previewVideoRef.current.play();
            setAutoplayBlocked(false);
        }
    };

    return (
        <div className="grid place-items-center mt-15">
            <div className="relative flex sm:w-full md:w-170 rounded-2xl h-110 items-center justify-center bg-[#111114] border border-white/10 overflow-hidden">
                {isStopped && videoUrl ? (
                    <>
                        <video
                            key={videoUrl}
                            ref={previewVideoRef}
                            src={videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-contain bg-black"
                        />
                        {autoplayBlocked && (
                            <button
                                onClick={handleUnmutePlay}
                                className="
                    absolute inset-0 flex flex-col items-center justify-center gap-3
                    bg-black/60 text-white backdrop-blur-sm
                    "
                            >
                                <FaVolumeMute className="text-4xl text-purple-300" />
                                <span className="font-medium">Tap to play with sound</span>
                            </button>
                        )}
                    </>
                ) : status === "idle" ? (
                    <div className="flex flex-col items-center gap-3 text-gray-500">
                        <LuMonitorPlay className="text-5xl text-purple-400/70" />
                        <p className="text-gray-300 font-medium">Nothing recorded yet</p>
                        <p className="text-sm text-gray-500">
                            Click <span className="text-purple-300 font-semibold">Start</span> to choose a
                            screen, window, or tab
                        </p>
                    </div>
                ) : (
                    <video ref={liveVideoRef} autoPlay muted className="w-full h-full object-contain bg-black" />
                )}
            </div>

            {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}

            <div className="mt-4">
                <div
                    className="
            flex items-center gap-4 bg-[#0d0d12] border border-white/10
                px-6 py-3 rounded-full shadow-2xl
            "
                >
                    <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                        <div
                            className={`w-3 h-3 rounded-full bg-red-500 ${isRecording ? "animate-pulse" : "opacity-30"
                                }`}
                        />
                        <span className="text-white font-semibold tracking-wider">
                            {formatTime(elapsed)}
                        </span>
                    </div>

                    {/* Start */}
                    <button
                        title="Start Recording"
                        onClick={startRecording}
                        disabled={isRecording || isPaused}
                        className="
                group relative w-12 h-12 rounded-full bg-purple-400 text-black
                flex items-center justify-center shadow-lg shadow-purple-500/30
                hover:scale-110 transition-all disabled:opacity-30 disabled:hover:scale-100
                "
                    >
                        <div className="w-4 h-4 rounded-full border-2 border-black" />
                        <span className="absolute top-14 hidden group-hover:block bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                            Start Recording
                        </span>
                    </button>

                    {/* Pause / Resume */}
                    <button
                        title={isPaused ? "Resume Recording" : "Pause Recording"}
                        onClick={pauseRecording}
                        disabled={!canPauseOrStop}
                        className="
                group relative w-12 h-12 rounded-full bg-[#1b1b22] text-white
                flex items-center justify-center border border-white/10
                hover:bg-[#292932] transition-all disabled:opacity-30
                "
                    >
                        {isPaused ? (
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-14 border-l-white ml-1" />
                        ) : (
                            <div className="flex gap-1">
                                <div className="w-1 h-4 bg-white rounded" />
                                <div className="w-1 h-4 bg-white rounded" />
                            </div>
                        )}
                        <span className="absolute top-14 hidden group-hover:block bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                            {isPaused ? "Resume Recording" : "Pause Recording"}
                        </span>
                    </button>

                    {/* Stop */}
                    <button
                        title="Stop Recording"
                        onClick={stopRecording}
                        disabled={!canPauseOrStop}
                        className="
                group relative w-12 h-12 rounded-full bg-[#4a1015] text-white
                flex items-center justify-center border border-red-500/30
                hover:bg-[#65151d] transition-all disabled:opacity-30
                "
                    >
                        <div className="w-4 h-4 bg-red-400 rounded-sm" />
                        <span className="absolute top-14 hidden group-hover:block bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                            Stop Recording
                        </span>
                    </button>

                    {/* Save */}
                    <button
                        title="Save Recording"
                        onClick={handleSave}
                        disabled={!isStopped}
                        className="
                group relative w-12 h-12 rounded-full bg-[#1b1b22] text-white
                flex items-center justify-center border border-white/10
                hover:bg-[#292932] transition-all disabled:opacity-30
                "
                    >
                        <span className="text-xl">☁</span>
                        <span className="absolute top-14 hidden group-hover:block bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap border border-white/10">
                            Save Recording
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

function formatTime(totalSeconds: number): string {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
}

export default VideoComponent;