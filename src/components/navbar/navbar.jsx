import React from "react";
import style from "./navbar.module.css";

import { BsCart4 } from "react-icons/bs";
import Logo from "../logo/logo";
import Input from "../forms/input/input";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Logo />
      <div className={style.search}>
        <Input fullWidth placeholder="Buscar" />
      </div>
      <BsCart4 size={40} />
    </nav>
  );
};

export default Navbar;
