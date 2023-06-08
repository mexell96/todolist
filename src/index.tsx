import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "antd/dist/reset.css";
import { RootStoreContext } from "./rootStoreContext";
import RootStore from "./store/rootStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={new RootStore()}>
      <BrowserRouter basename="/todolist">
        <App />
      </BrowserRouter>
    </RootStoreContext.Provider>
  </React.StrictMode>
);
