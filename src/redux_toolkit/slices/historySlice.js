import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    items: [],
  },
  reducers: {
    addHistory: (state, action) => {
      state.items.push({
        type: action.payload.type,
        message: action.payload.message,
        time: new Date().toLocaleTimeString(),
      });
    },

    clearHistory: (state) => {
      state.items = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
