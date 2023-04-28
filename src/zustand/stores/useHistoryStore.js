import { create } from "zustand";

const useHistoryStore = create((set) => ({
  history: [],
  addHistory: (history) =>
    set((state) => ({
      history: [
        ...state.history,
        {
          type: history.type,
          message: history.message,
          time: new Date().toLocaleTimeString(),
        },
      ],
    })),

  clearHistory: () => set(() => ({ history: [] })),
}));

export default useHistoryStore;
