import React from 'react';
import styles from "./Profile.module.css"
import mountains from "../../img/mountain.jpg";


export const Profile =() => {
 return (
        <div className={styles.profile}>
            <img className={styles.img} src={mountains} alt=""/>
            <div className={styles.content__body}>
                <h3>Main content</h3>
                <div className={styles.description}>
                    avatar and text
                </div>
                <div>
                    <textarea> </textarea>
                </div>
                <button >Add post</button>
                <div className={styles.post}>
                   <div>Post 1</div>
                   <div>Post 2</div>
                   <div>Post 3</div>
                   <div>Post 4</div>
                   <div>Post 5</div>
                </div>
            </div>

        </div>
    );
};

