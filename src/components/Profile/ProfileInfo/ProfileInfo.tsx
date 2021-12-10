import styles from "./ProfileInfo.module.css";
import mountains from "../../../img/mountain.jpg";
import React from "react";
import {Preloader} from "../../preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type  ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {   /*как это влияет на отрисовку профиля?????*/
        return <Preloader/>
    }
    return (

        <div>

            <img className={styles.img} src={mountains} alt=""/>
            <h2>Name and Description</h2>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <img alt={"some pic"} src={props.profile.photos.large}/>
            <div>About me: {props.profile.aboutMe}</div>
            <div>If I search work: {props.profile.lookingForAJobDescription}</div>
            <div>My real name is {props.profile.fullName}</div>
        </div>
    )
}