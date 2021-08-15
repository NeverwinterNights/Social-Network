import React from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/state";



type  DialogsPropsType = {
    state: DialogsPageType

}


export const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {props.state.dialogs.map ((t) => <DialogsItem name={t.name} id={t.id}/>)}
            </div>
            <div className={styles.messages}>
                {props.state.messages.map ((t) => <Message message={t.message}/>)}
            </div>
        </div>
    );
};

