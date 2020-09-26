import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";

ReactDOM.render(
  // <IntlProvider locale={currentLocale} messages={messages}>
  <App />,
  // </IntlProvider>
  document.getElementById("root")
);
