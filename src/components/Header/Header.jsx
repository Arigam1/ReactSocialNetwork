import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import s from '../common/Paginator/Paginator.module.css'

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
      <div className={style.loginBlock}>
        {" "}
        {props.isAuth
          ? <div>{props.login} - <button className={s.justBtn} onClick={props.logout}>Log out</button></div>
          : <div><NavLink to={"/login"} className={style.login}><button className={s.justBtn}>Login</button></NavLink></div>}
      </div>
    </header>
  );
};

export default Header;
