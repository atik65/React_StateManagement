import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import historyReducer from "../slices/historySlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    history: historyReducer,
  },
});

export default store;

// this store is used in App3
