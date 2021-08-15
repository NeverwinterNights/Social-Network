import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {


    let postData = [
        {id: 1, message: "Hello", likesCount:8},
        {id: 2, message: "How are you?", likesCount:15},
        {id: 3, message: "Where are you?", likesCount:50},
        {id: 4, message: "Fuck You", likesCount:5},

    ]


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
            {postData.map ((t) => <Post message={t.message} likes={t.likesCount} />)}
        </div>


    );
};

