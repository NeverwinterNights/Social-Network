import styles from "./ProfileInfo.module.css";
import mountains from "../../../img/mountain.jpg";
import React, {ChangeEventHandler} from "react";
import {Preloader} from "../../preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "../../../img/img.png";

type  ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }


    const onInputFileChose: ChangeEventHandler<HTMLInputElement> = (e) => {

        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div>
            <img className={styles.img} src={mountains} alt=""/>
            <div className={styles.profile__wrapper}>
                <h2>Name and Description</h2>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <img alt={"some pic"} className={styles.image}
                     src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onInputFileChose}/>}
                <div><b>About me: {props.profile.aboutMe}</b> </div>
                <div><b>Looking for a job:</b> {!props.profile.lookingForAJob ? "Yes" : "No"}</div>
                <div><b> My real name is</b>  {props.profile.fullName[0].toUpperCase() + props.profile.fullName.slice(1)}</div>
            </div>
        </div>
    )
}