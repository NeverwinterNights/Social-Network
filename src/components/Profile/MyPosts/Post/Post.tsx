import React from 'react';
import styles from "./Post.module.css"
import bird from "../../../../img/bird.jpg";


type  PostPropsType = {
    message: string
    likes: number
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={styles.post}>
            <img className={styles.img} src={bird} alt=""/>

            <div className={styles.wrap}>
                <div>{props.message} </div>
                <div>Likes {props.likes}</div>
            </div>

        </div>
    );
};

