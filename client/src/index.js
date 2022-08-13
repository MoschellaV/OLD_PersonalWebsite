import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <MantineProvider>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </MantineProvider>
  </StrictMode>
);
