import MessagesEs from "@i18n/translation.json";
import App from "@pages";
import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
enum ELanguage {
  es = "es",
  es_ES = "es_ES",
}

const language = {
  language: ELanguage.es,
  languageCode: ELanguage.es_ES,
};

ReactDOM.render(
  <IntlProvider
    locale={language.language}
    messages={MessagesEs[language.languageCode]}
  >
    <App />
  </IntlProvider>,
  document.getElementById("root")
);
