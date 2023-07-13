import React from "react";
import style from "./button.module.css";

const Button = ({ children }) => {
  return <div className={style.button}>{children}</div>;
};

export default Button;
