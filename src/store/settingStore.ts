// store/settingsStore.ts
import { create } from "zustand";

interface SettingsState {
    showCursor: boolean;
    highlightClicks: boolean;
    fps60: boolean;
    countdown: boolean;

    toggleShowCursor: () => void;
    toggleHighlightClicks: () => void;
    toggleFps60: () => void;
    toggleCountdown: () => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    showCursor: true,
    highlightClicks: false,
    fps60: false,
    countdown: true,

    toggleShowCursor: () => set((s) => ({ showCursor: !s.showCursor })),
    toggleHighlightClicks: () => set((s) => ({ highlightClicks: !s.highlightClicks })),
    toggleFps60: () => set((s) => ({ fps60: !s.fps60 })),
    toggleCountdown: () => set((s) => ({ countdown: !s.countdown })),
}));