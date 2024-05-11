import React from "react";
import "./NavBarButton.css";
import { Link } from "react-router-dom";
import { DataProvider } from "../data/DataProvider";

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
    <Link
      className="nav-button"
      to={props.path}
      onClick={() => {
        console.log("qwe");
        DataProvider.getList("order", params);
      }}
    >
      <span>{props.text}</span>
    </Link>
  );
  // return <input type="button" value={props.text} />;
}

export default NavBarButton;
