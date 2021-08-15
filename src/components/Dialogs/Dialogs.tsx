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


    let DialogsData = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Misha"},
        {id: 4, name: "Petr"},
        {id: 5, name: "Alex"},
    ]

    let MessagesData = [
        {id: 1, message: "Privet"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Lets we meet"},
        {id: 4, message: "No"},
    ]


    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {DialogsData.map ((t) => <DialogsItem name={t.name} id={t.id}/>)}


                {/*<DialogsItem name={"Ivan"} id={1}/>*/}
                {/*<DialogsItem name={"Oleg"} id={2}/>*/}
                {/*<DialogsItem name={"Misha"} id={3}/>*/}
                {/*<DialogsItem name={"Petr"} id={4}/>*/}
                {/*<DialogsItem name={"Alex"} id={5}/>*/}
            </div>
            <div className={styles.messages}>
                {MessagesData.map((t)=> <Message message={t.message}/>)}
            </div>
        </div>
    );
};

