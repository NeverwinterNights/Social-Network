import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./DialogsItem.module.css";


type  DialogsItemPropsType = {
    name: string
    id: number
}

export const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={styles.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}







