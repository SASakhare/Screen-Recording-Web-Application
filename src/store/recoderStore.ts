// store/recoderStore.ts
import { create } from "zustand";

type Status = "idle" | "selecting" | "recording" | "paused" | "stopped";
type AudioMode = "system" | "microphone" | "both" | "mute";

interface Source {
    label: string;
    value: string;
}

interface RecorderState {
    status: Status;
    elapsed: number;
    selectedSource: Source | null;
    audioMode: AudioMode;
    videoUrl: string | null;
    error: string | null;

    setStatus: (status: Status) => void;
    setElapsed: (elapsed: number) => void;
    setSource: (source: Source) => void;
    setAudioMode: (mode: AudioMode) => void;
    setVideoUrl: (videoUrl: string) => void;
    setError: (error: string) => void;
    reset: () => void;
}

export const useRecorderStore = create<RecorderState>((set) => ({
    status: "idle",
    elapsed: 0,
    selectedSource: null,
    audioMode: "system",
    videoUrl: null,
    error: null,

    setStatus: (status) => set({ status }),
    setElapsed: (elapsed) => set({ elapsed }),
    setSource: (selectedSource) => set({ selectedSource }),
    setAudioMode: (audioMode) => set({ audioMode }),
    setVideoUrl: (videoUrl) => set({ videoUrl }),
    setError: (error) => set({ error }),
    reset: () => set({ status: "idle", elapsed: 0, videoUrl: null, error: null }),
}));