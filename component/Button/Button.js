import React from "react";
import buttonStyles from "../../styles/Button.module.css";
const Button = (props) => {
  return (
    <button className={`${buttonStyles.button}`} type="submit">
      {props.title}
    </button>
  );
};

export default Button;
