import React from "react";
import "./NavBar.css";
import NavBarButton from "../buttons/NavBarButton";
import LoginButton from "../buttons/LoginButton";

function NavBar(props) {
  const setLoginModalActive = props.setLoginModalActive;
  const setRegisterModalActive = props.setRegisterModalActive;

  return (
    <nav>
      <div className="blur-block"></div>
      <div className="logo-container"></div>
      <div className="links-container">
        <NavBarButton text="Home" path="/" />
        <NavBarButton text="About" path="about" />
        <NavBarButton text="Something" path="something" />
        <NavBarButton text="Same" path="same" />
      </div>
      <div className="authorization-container">
        <LoginButton
          text="Sign in"
          clickHandler={() => setLoginModalActive(true)}
        />
        <LoginButton
          text="Sign up"
          clickHandler={() => setRegisterModalActive(true)}
        />
      </div>
    </nav>
  );
}

export default NavBar;
