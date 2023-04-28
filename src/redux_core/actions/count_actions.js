import { count_constants } from "../constants/count_constants";

const increment = (payload) => {
  return {
    type: count_constants.INCREMENT,
    payload: payload,
  };
};

const decrement = (payload) => {
  return {
    type: count_constants.DECREMENT,
    payload: payload,
  };
};

export { increment, decrement };
