import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type  MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement> ()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost ()

        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <h2>My Posts</h2>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map ((t, index) => <Post key={index} message={t.message} likes={t.likesCount}/>)}
        </div>


    );
};

