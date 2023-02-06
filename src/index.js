import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import vi_VN from "antd/es/locale/vi_VN";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={vi_VN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
