import React from "react";
import style from "./button.module.css";

const Button = ({ children, fullWidth, ...props }) => {
  return (
    <div
      className={`${style.button} ${fullWidth && style.fullWidth}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
