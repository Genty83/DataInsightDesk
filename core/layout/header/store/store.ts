import { create } from "zustand";

interface HeaderStore {
  isMaximized: boolean;
  toggleMaximize: () => void;
  setMaximized: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  isMaximized: false,

  toggleMaximize: () =>
    set((state) => ({ isMaximized: !state.isMaximized })),

  setMaximized: (value: boolean) =>
    set({ isMaximized: value }),
}));
