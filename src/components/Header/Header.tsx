import React from 'react';
import dragon from "../../img/dragon.png";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={dragon} alt=""/>
        </header>
    );
}

