import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface RibbonStore {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const useRibbonStore = create<RibbonStore>((set) => ({
  themeMode: "light",
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === "light" ? "dark" : "light",
    })),
  setTheme: (mode) => set({ themeMode: mode }),
}));
