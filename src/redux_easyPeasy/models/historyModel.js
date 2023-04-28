import { action } from "easy-peasy";

export const historyModel = {
  items: [],
  addToHistory: action((state, payload) => {
    state.items.push({
      type: payload.type,
      message: payload.message,
      time: new Date().toLocaleTimeString(),
    });
  }),

  clearHistory: action((state) => (state.items = [])),
};
