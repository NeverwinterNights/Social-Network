import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";


export const Dialogs = () => {


    let dialogs = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Misha"},
        {id: 4, name: "Petr"},
        {id: 5, name: "Alex"},
    ]

    let messages = [
        {id: 1, message: "Privet"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Lets we meet"},
        {id: 4, message: "No"},
    ]


    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {dialogs.map ((t) => <DialogsItem name={t.name} id={t.id}/>)}
            </div>
            <div className={styles.messages}>
                {messages.map ((t) => <Message message={t.message}/>)}
            </div>
        </div>
    );
};

