import React from "react";
import logo from "../../assets/logo.svg";
// import "./styles.css";

export const LogoHeader: React.FC = () => {
  return (
    <header className="Header">
      <div className="LogoHeader">
        <div className="LogoHeader__container">
          <img src={logo} className="LogoHeader__img" alt="logo" />
        </div>
        <h1 className="LogoHeader__title">React</h1>
      </div>
    </header>
  );
};
