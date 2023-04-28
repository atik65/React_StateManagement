import { history_constants } from "../constants/history_constants";

const add_history = (payload) => {
  return {
    type: history_constants.ADD_HISTORY,
    payload: payload,
  };
};

const clear_history = () => {
  {
    return {
      type: history_constants.CLEAR_HISTORY,
    };
  }
};

export { add_history, clear_history };
