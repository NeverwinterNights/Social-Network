import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


type  MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    // // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsType) => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement> ()

    const onAddPost = () => {
        // if (props.newPostText) {
        props.addPost ()
        // props.dispatch (addPostActionCreator(props.newPostText))/*указываем тип какой и в стейте этому дейсвтию указали*/

        // }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText (text)

            console.log(newPostElement.current.value);
            //  props.dispatch (updateNewPostActionCreator(text)) /*тут тип экшена и  свойство экшена для ф.*/
        }
    }

    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <h2>My Posts</h2>
                <div>
                    <div>
                        <textarea placeholder={"Type new post"} ref={newPostElement} onChange={onPostChange}
                                  value={props.newPostText}  /*было value={props.newPostText}*/
                        />
                    </div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {props.posts.map ((t, index) => <Post key={index} message={t.message} likes={t.likesCount}/>)}
        </div>


    );
};

