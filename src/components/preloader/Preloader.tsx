import React from 'react';
import preloader from "../../img/3.svg";
import styles from"./Preloader.module.css"

export const Preloader =() => {
 return (
        <div className={styles.main}>
            <img  className={styles.img} alt={"preloader"} src={preloader}/>
        </div>
    );
};

