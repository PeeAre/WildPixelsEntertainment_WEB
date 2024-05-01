import React from "react";
import "./NavBarButton.scss";
import { Link } from "react-router-dom";

function NavBarButton(props) {
  return (
    <Link className="nav-button" to={props.path}>
      <span>{props.text}</span>
    </Link>
  );
  // return <input type="button" value={props.text} />;
}

export default NavBarButton;
