import React from 'react';
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type  ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>


        </div>
    );
};

