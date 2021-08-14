import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Dialogs.module.css";


type  DialogsItemPropsType = {
    name: string
    id: number
}

const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <div className={styles.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

type  MessagePropsType = {
    message: string

}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>

    )
}


export const Dialogs = () => {
    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                <DialogsItem name={"Ivan"} id={1}/>
                <DialogsItem name={"Oleg"} id={2}/>
                <DialogsItem name={"Misha"} id={3}/>
                <DialogsItem name={"Petr"} id={4}/>
                <DialogsItem name={"Alex"} id={5}/>
            </div>
            <div className={styles.messages}>
                <Message message={"Privet"}/>
                <Message message={"How are you"}/>
                <Message message={"Lets we meet"}/>
                <Message message={"No"}/>
            </div>
        </div>
    );
};

