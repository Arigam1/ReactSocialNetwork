import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs" + props.id;

    return (
        <div key={props.id} className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} className={s.userName}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;