import { action } from "easy-peasy";

const historyModel = {
  items: [],
  addHistory: action((state, payload) => {
    state.items.push({
      type: payload.type,
      message: payload.message,
      time: new Date().toLocaleTimeString(),
    });
  }),
  clearHistory: action((state) => (state.items = [])),
};

export default historyModel;
