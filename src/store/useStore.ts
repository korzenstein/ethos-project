import { create } from "zustand";

interface ScrollState {
  scrollY: number;
  viewportHeight: number;
  setScrollY: (y: number) => void;
  setViewportHeight: (height: number) => void;
}

const useStore = create<ScrollState>((set) => ({
  scrollY: 0,
  viewportHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  setScrollY: (y) => set({ scrollY: y }),
  setViewportHeight: (height) => set({ viewportHeight: height }),
}));

export default useStore;
