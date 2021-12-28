import React from 'react';
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type  ProfilePropsType = {
   // profilePage: ProfilePageType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    //dispatch: (action: ActionsType) => void
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}




export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={styles.profile}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

