import React from 'react';
import styles from "./Post.module.css"
import bird from "../../../../img/bird.jpg";


export const Post = () => {
    return (
        <div className={styles.post}>
            <img className={styles.img} src={bird} alt=""/>

            <div className={styles.wrap}>
                <div>Post 1</div>
                <span>Like</span>
            </div>

        </div>
    );
};

