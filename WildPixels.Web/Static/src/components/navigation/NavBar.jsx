import React from "react";
import NavBarButton from "@components/buttons/NavBarButton";
import LoginButton from "@components/buttons/LoginButton";
import "./NavBar_style";

const links = [
  {
    title: "Hub",
    url: "/",
  },
  {
    title: "Games",
    url: "/games",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Store",
    url: "/store",
  },
];

const NavBar = (props) => {
  const setLoginModalActive = props.setLoginModalActive;
  const setRegisterModalActive = props.setRegisterModalActive;
  console.log(links);

  return (
    <nav>
      <div className="blur-block"></div>
      <div className="logo-container"></div>
      <div className="links-container">
        {links.map((link) => {
          return (
            <NavBarButton key={link.title} title={link.title} path={link.url} />
          );
        })}
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
      <div className="burger-container"></div>
    </nav>
  );
};

export default NavBar;
