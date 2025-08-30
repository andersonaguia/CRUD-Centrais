import { create } from "zustand";

interface CentralState {
  totalCentrals: number;
  setTotalCentrals: (count: number) => void;
}

export const useCentralStore = create<CentralState>((set) => ({
  totalCentrals: 0,
  setTotalCentrals: (count) => set({ totalCentrals: count }),
}));
