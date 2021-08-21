import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, PostsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {storeReduxType} from "../../../redux/redux-store";


type  MyPostsContainerPropsType = {
    // posts: Array<PostsType>
    // // addPost: () => void
    // newPostText: string
    // // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsType) => void


    store: storeReduxType


}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    // let newPostElement = React.createRef<HTMLTextAreaElement> ()   /*нужна ли?*/ /*нет*/

    const addPost = () => {

        if (props.store.getState ().profilePage.newPostText) {  /*было if (props.newPostText) {*/
            // props.addPost()
            props.store.dispatch (addPostActionCreator (props.store.getState ().profilePage.newPostText))/*указываем тип какой и в стейте этому дейсвтию указали*/

        }
    }
    const onPostChange = (text: string) => {
        props.store.dispatch (updateNewPostActionCreator (text)) /*тут тип экшена и  свойство экшена для ф.*/
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={props.store.getState ().profilePage.posts}
                     newPostText={props.store.getState ().profilePage.newPostText}/>);
};

