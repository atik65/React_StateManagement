import { action } from "easy-peasy";

const counterModel = {
  value: 0,
  increment: action((state, payload) => (state.value += payload)),
  decrement: action((state, payload) => {
    if (state.value > 0) state.value -= payload;
  }),
};

export default counterModel;
