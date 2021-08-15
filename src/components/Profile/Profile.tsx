import React from 'react';
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../index";


type  ProfilePropsType = {
    posts: Array<postsType>
}

export const Profile = (props: ProfilePropsType) => {




    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>


        </div>
    );
};

