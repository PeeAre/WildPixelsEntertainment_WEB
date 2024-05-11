import React from "react";
import "./SubmitButton.css";

function SubmitButton(props) {
  const text = props.text;
  const onClick = props.onClick;

  return (
    <div onClick={() => onClick()} className="btn-3">
      {text}
    </div>
  );
}

export default SubmitButton;
