import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type  MyPostsPropsType = {
    posts: Array<PostsType>
    addPost:(postMessage: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement> ()

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost (text)
            newPostElement.current.value = ""
        }
    }


    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <h2>My Posts</h2>
                <div>
                    <div><textarea ref={newPostElement}> </textarea>
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {props.posts.map ((t, index) => <Post key={index} message={t.message} likes={t.likesCount}/>)}
        </div>


    );
};

