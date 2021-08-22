import React from 'react';
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


// type  ProfilePropsType = {
//    // profilePage: ProfilePageType
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
//     //dispatch: (action: ActionsType) => void
// }

export const Profile = () => {


    return ( /*как оказался стор*/
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

