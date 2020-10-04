import "@assets/App.css";
import { LanguageCard } from "@components/Cards";
import { LogoHeader } from "@components/Logo";
import React from "react";

const allLanguages = [
  {
    name: "English",
    language: "English",
  },
  {
    name: "Spanish",
    language: "Español",
  },
];

const App = () => {
  return (
    <>
      <LogoHeader />
      <div className="Page">
        <div className="Page__container">
          <h2 className="Page__title">Languages</h2>
          {/* <FormattedMessage id="languages" defaultMessage="Languages" />: */}
          <p className="Page__subtitle">
            This repo has the following languages as demo:
          </p>
        </div>
        <div className="Page__grid">
          {allLanguages.map((lang) => (
            <LanguageCard
              key={lang.name}
              name={lang.name}
              language={lang.language}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
