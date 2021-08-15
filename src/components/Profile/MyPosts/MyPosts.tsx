import React from 'react';
import { postsType } from '../../..';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";



type  MyPostsPropsType = {
    posts: Array<postsType>
}


export const MyPosts = (props:MyPostsPropsType) => {




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
            {props.posts.map ((t) => <Post message={t.message} likes={t.likesCount} />)}
        </div>


    );
};

