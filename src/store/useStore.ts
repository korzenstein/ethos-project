import { create } from "zustand";
interface ScrollState {
  scrollY: number;
  viewportHeight: number;
  isNavOpen: boolean;
  setScrollY: (y: number) => void;
  setViewportHeight: (height: number) => void;
  setIsNavOpen: (open: boolean) => void;
}

const useStore = create<ScrollState>((set) => ({
  scrollY: 0,
  viewportHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  isNavOpen: false,
  setScrollY: (y) => set({ scrollY: y }),
  setViewportHeight: (height) => set({ viewportHeight: height }),
  setIsNavOpen: (open) => set({ isNavOpen: open }),
}));

export default useStore;
