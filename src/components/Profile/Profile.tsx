import React from 'react';
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";


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
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} /*пробрасываем диспатч вмеесто функцый*/
                     newPostText={props.profilePage.newPostText}
            />


        </div>
    );
};

