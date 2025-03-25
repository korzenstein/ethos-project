import { create } from "zustand";
interface ScrollState {
  scrollY: number;
  viewportHeight: number;
  isNavOpen: boolean;
  setScrollY: (y: number) => void;
  setViewportHeight: (height: number) => void;
  setIsNavOpen: (open: boolean) => void;

  videosLoaded: number;
  totalVideos: number;
  allVideosReady: boolean;
  setTotalVideos: (count: number) => void;
  incrementLoaded: () => void;
}

const useStore = create<ScrollState>((set, get) => ({
  scrollY: 0,
  viewportHeight: typeof window !== "undefined" ? window.innerHeight : 0,
  isNavOpen: false,
  setScrollY: (y) => set({ scrollY: y }),
  setViewportHeight: (height) => set({ viewportHeight: height }),
  setIsNavOpen: (open) => set({ isNavOpen: open }),

  videosLoaded: 0,
  totalVideos: 0,
  allVideosReady: false,
  setTotalVideos: (count) => set({ totalVideos: count }),
  incrementLoaded: () => {
    const { videosLoaded, totalVideos } = get();
    const newCount = videosLoaded + 1;
    set({
      videosLoaded: newCount,
      allVideosReady: newCount >= totalVideos,
    });
  },
}));

export default useStore;
