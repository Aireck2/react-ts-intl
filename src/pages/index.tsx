import "@assets/App.css";
import { LanguageCard } from "@components/Cards";
import { LogoHeader } from "@components/Logo";
import React from "react";
import { FormattedMessage } from "react-intl";

const allLanguages = [
  {
    name: <FormattedMessage id="english" defaultMessage="English" />,
    language: "English",
  },
  {
    name: <FormattedMessage id="spanish" defaultMessage="Spanish" />,
    language: "Español",
  },
  {
    name: <FormattedMessage id="french" defaultMessage="French" />,
    language: "Français",
  },
  {
    name: <FormattedMessage id="german" defaultMessage="German" />,
    language: "Deutsche",
  },
];

const App = () => {
  return (
    <>
      <LogoHeader />
      <div className="Page">
        <div className="Page__container">
          <h2 className="Page__title">
            <FormattedMessage id="languages" defaultMessage="Languages" />:
          </h2>
          <p className="Page__subtitle">
            <FormattedMessage
              id="language.demo.description"
              defaultMessage="This repo has the following languages as demo"
            />
            :
          </p>
        </div>
        <div className="Page__container">
          <div className="Page__grid">
            {allLanguages.map((lang, key) => (
              <LanguageCard
                key={key}
                name={lang.name}
                language={lang.language}
              />
            ))}
          </div>
          <div className="Page__text">
            <p>
              <FormattedMessage
                id="purpose.demo.description"
                defaultMessage="The purpose of this demo is to give an example of an single page app with internationalization"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
