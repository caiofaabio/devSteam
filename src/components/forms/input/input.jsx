import React from "react";
import style from "./input.module.css";

const Input = ({ fullWidth, ...props }) => {
  return (
    <input
      className={`${style.input} ${fullWidth && style.fullWidth}`}
      type="text"
      {...props}
    />
  );
};

export default Input;
