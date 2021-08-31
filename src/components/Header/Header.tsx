import React from 'react';
import {NavLink} from 'react-router-dom';
import dragon from "../../img/dragon.png";
import styles from "./Header.module.css"

type  HeaderPropsType = {
    setUserData: (id: number, email: null | string, login: null | string) => void
    isAuth: boolean
    login: null | string
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={dragon} alt=""/>
            <div className={styles.auth}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

