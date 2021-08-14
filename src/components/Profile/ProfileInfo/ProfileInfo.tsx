import styles from "./ProfileInfo.module.css";
import mountains from "../../../img/mountain.jpg";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <img className={styles.img} src={mountains} alt=""/>
        </div>
    )
}