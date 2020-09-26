import React from "react";

interface IProps {
  name: string;
  language: string;
}

export const LanguageCard: React.FC<IProps> = ({ name, language }) => {
  return (
    <button className="LanguageCard">
      <p>
        <span>{name}</span>
      </p>
      <span className="LanguageCard__language">
        <strong>{language}</strong>
      </span>
    </button>
  );
};
