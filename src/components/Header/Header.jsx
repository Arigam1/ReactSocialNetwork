import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
      <div className={s.loginBlock}>
        {" "}
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
