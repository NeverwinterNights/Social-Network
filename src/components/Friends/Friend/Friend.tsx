import React from 'react';
import styles from "./../Friends.module.css";


type  FriendPropsType = {
    name:string

}


export const Friend = (props:FriendPropsType) => {
    return (
        <div className={styles.item}>
            <div className={styles.images}>
                <img className={styles.image} src="https://www.film.ru/sites/default/files/news/44976246-1097247.jpg" alt=""/>
            </div>
            <div className={styles.name}>
                <span>{props.name}</span>
            </div>
        </div>
    );
};