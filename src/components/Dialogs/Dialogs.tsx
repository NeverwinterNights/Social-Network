import React from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {dialogsType, messagesType} from "../../index";


type  DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}


export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {props.dialogs.map ((t) => <DialogsItem name={t.name} id={t.id}/>)}
            </div>
            <div className={styles.messages}>
                {props.messages.map ((t) => <Message message={t.message}/>)}
            </div>
        </div>
    );
};

