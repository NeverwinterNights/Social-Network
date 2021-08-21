import React from 'react';
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";


type  ProfilePropsType = {
    profilePage: ProfilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={store}
            />


        </div>
    );
};

