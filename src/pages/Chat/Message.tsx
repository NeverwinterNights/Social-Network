import React from "react";
import { WebSocketResponseType } from "./ChatPage";
import styles from "./Message.module.css";


type  MessagePropsType = {
    messageData:  WebSocketResponseType
}


export const Message = React.memo(( {messageData}:MessagePropsType ) => {


 const {message,  photo,   userId, userName} = messageData



    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <img className={styles.image} src={photo} alt={"ava"}/>
                <div className={styles.author}>{userName}</div>
            </div>
            <div className={styles.block}>
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
});