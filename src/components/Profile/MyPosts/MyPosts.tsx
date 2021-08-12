import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <div>
                    <textarea> </textarea>
                    <button>Add post</button>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>


    );
};

