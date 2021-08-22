import React from 'react';

import styles from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';
import {Friends} from "../Friends/Friends";
import {store} from "../../redux/redux-store";


type  NavbarPropsType = {
    // state: SidebarType
}

export const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <div><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink></div>
                <div><NavLink activeClassName={styles.active} to="/dialogs">Dialogs</NavLink></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>News</a></div>
            </div>
            <div className={styles.friends}>
                <Friends names={store.getState().sidebar.friends}/>
            </div>
        </nav>
    );
}

