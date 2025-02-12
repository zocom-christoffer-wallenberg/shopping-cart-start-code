import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

/**
 * Store - Vårat state, vad vi önskar spara
 * Reducers - Själva logiken för att uppdatera
 * Actions - Triggar igång en uppdatering och en reducer
 * Dispatch - Triggar igång en action
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
