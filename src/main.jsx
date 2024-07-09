import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router.jsx";
import {NextUIProvider} from "@nextui-org/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  </React.StrictMode>
);
