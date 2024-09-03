import React from "react";

import "./SubmitButton_style";

function SubmitButton(props) {
  const text = props.text;
  const disabled = props.disabled;
  const onClick = props.onClick;

  console.log(disabled);

  return (
    <button
      type="submit"
      onClick={() => onClick()}
      className="btn-3"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
