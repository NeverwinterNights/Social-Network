import React from 'react';
import styles from "./Profile.module.css"
import mountains from "../../img/mountain.jpg";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile =() => {
 return (
        <div className={styles.profile}>
            <img className={styles.img} src={mountains} alt=""/>
            <div className={styles.content__body}>
                <h3>Main content</h3>
                <div className={styles.description}>
                    avatar and text
                </div>
               <MyPosts/>
            </div>

        </div>
    );
};

