import { history_constants } from "../constants/history_constants";

export const history_reducer = (state = [], action) => {
  switch (action.type) {
    case history_constants.ADD_HISTORY: {
      return [
        ...state,
        {
          type: action.payload.type,
          message: action.payload.message,
          time: new Date().toLocaleTimeString(),
        },
      ];
    }
    case history_constants.CLEAR_HISTORY: {
      return [];
    }

    default:
      return state;
  }
};
