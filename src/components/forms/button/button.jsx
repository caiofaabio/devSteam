import React from "react";
import style from "./button.module.css";

const Button = ({ children, fullWidth }) => {
  return (
    <div className={`${style.button} ${fullWidth && style.fullWidth}`}>
      {children}
    </div>
  );
};

export default Button;
