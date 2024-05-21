import React from "react";
import { Link } from "react-router-dom";

import "./NavBarButton";

const params = {
  pagination: {
    page: 1,
    perPage: 10,
  },
  sort: {
    field: "default",
    order: "asc",
  },
};

function NavBarButton(props) {
  return (
    <Link className="nav-button" to={props.path}>
      <span>{props.text}</span>
    </Link>
  );
}

export default NavBarButton;
