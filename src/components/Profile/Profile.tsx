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
}




export const Profile = (props: ProfilePropsType) => {


    return ( /*как оказался стор*/
        <div className={styles.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

