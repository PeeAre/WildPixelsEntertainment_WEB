import React from "react";
import "./LoginButton_style";

function LoginButton(props) {
  const text = props.text;
  const clickHandler = props.clickHandler;

  return (
    <div onClick={() => clickHandler()} className="btn-5">
      {text}
    </div>
  );
}

export default LoginButton;
