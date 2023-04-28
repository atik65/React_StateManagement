import { createStore } from "redux";
import { reducers } from "../reducers";

export const store = createStore(reducers);

// this redux store is used in src/App.js
