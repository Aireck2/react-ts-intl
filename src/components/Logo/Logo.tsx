import ReactLogo from "@assets/logo.svg";
import React from "react";

export const LogoHeader: React.FC = () => {
  return (
    <header className="Header">
      <div className="LogoHeader">
        <div className="LogoHeader__container">
          <ReactLogo />
        </div>
        <h1 className="LogoHeader__title">React</h1>
      </div>
    </header>
  );
};
