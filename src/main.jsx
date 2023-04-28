import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import { store } from "./redux_core/store/store.js";
import App2 from "./App2.jsx";
import { StoreProvider } from "easy-peasy";
// import store from "./redux_easyPeasy/store/store.js";
import App3 from "./App3.jsx";
import store from "./redux_toolkit/store/store.js";
import App4 from "./App4.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Provider store={store}>
  //   <App />
  //   <App3 />

  //   <StoreProvider store={store}>
  //     <App2 />
  //   </StoreProvider>
  // </Provider>
  // </React.StrictMode>

  <App4 />
);
