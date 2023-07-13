import React from "react";
import style from "./navbar.module.css";

import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/logo";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Logo />
      <input type="text" />
      <BsCart4 size={40} />
    </nav>
  );
};

export default Navbar;
