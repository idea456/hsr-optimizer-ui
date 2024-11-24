import { create } from "zustand";

interface OptimizerState {
    optimizationTarget: string;
    setOptimizationTarget: (target: string) => void;
}

export const useStore = create<OptimizerState>()((set) => ({
    optimizationTarget: "",
    setOptimizationTarget: (optimizationTarget) =>
        set((state) => ({ ...state, optimizationTarget })),
}));
