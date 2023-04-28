import { count_constants } from "../constants/count_constants";

export const count_reducer = (
  state = {
    value: 0,
  },
  action
) => {
  switch (action.type) {
    case count_constants.INCREMENT: {
      return {
        ...state,
        value: state.value + action.payload,
      };
    }

    case count_constants.DECREMENT: {
      return {
        ...state,
        value:
          state.value - action.payload >= 0
            ? state.value - action.payload
            : state.value,
      };
    }

    default:
      return state;
  }
};
