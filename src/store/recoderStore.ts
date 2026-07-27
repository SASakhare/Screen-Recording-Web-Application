import { create } from "zustand"


interface Source {
    label: string,
    value: string,
}

interface RecoderState {
    status: "idle" | "selecting" | "recording" | "paused" | "stopped",
    elapsed: number,
    selectedSource: Source | null,
    videoUrl: string | null,
    error: string | null,

    setStatus: (status: "idle" | "selecting" | "recording" | "paused" | "stopped") => void,
    setElapsed: (elapsed: number) => void,
    setSource: (source: Source) => void,
    setVideoUrl: (videoUrl: string) => void,
    setError: (error: string) => void,
    reset: () => void;
}



export const useRecorderStore = create<RecoderState>((set) => ({
    status: 'idle',
    elapsed: 0,
    selectedSource: null,
    videoUrl: null,
    error: null,
    setStatus: (status) => set({ status }),
    setElapsed: (elapsed) => set({ elapsed }),
    setSource: (selectedSource) => set({ selectedSource }),
    setVideoUrl: (videoUrl) => set({ videoUrl }),
    setError: (error) => set({ error }),
    reset: () => set({ status: 'idle', elapsed: 0, videoUrl: null, error: null }),
}))























