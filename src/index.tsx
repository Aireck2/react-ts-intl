import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./assets/index.css";
import { messages as allMessages } from "./messages";

const currentLocale = "de-DE";
const messages = allMessages[currentLocale];

ReactDOM.render(
  <IntlProvider locale={currentLocale} messages={messages}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>,
  document.getElementById("root")
);
