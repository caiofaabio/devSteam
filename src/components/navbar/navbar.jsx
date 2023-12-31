import React from "react";
import style from "./navbar.module.css";

import Logo from "../logo/logo";
import Input from "../forms/input/input";
import CartButton from "../forms/cartButton/cartButton";

const Navbar = ({ cart, onRemove }) => {
  return (
    <nav className={style.navbar}>
      <Logo />
      <div className={style.search}>
        <Input fullWidth placeholder="Buscar" />
      </div>
      <CartButton cart={cart} onRemove={onRemove} />
    </nav>
  );
};

export default Navbar;
