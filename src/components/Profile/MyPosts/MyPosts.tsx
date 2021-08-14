import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <h2>My Posts</h2>
                <div>
                    <div><textarea> </textarea>
                    </div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={"Hello"}/>
            <Post message={"How are you?"}/>
            <Post message={"Where are you?"}/>
            <Post message={"Fuck You"}/>
        </div>


    );
};

