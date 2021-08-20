import React from 'react';
import {FriendsType} from "../../redux/store";
import {Friend} from "./Friend/Friend";
import styles from "./Friends.module.css";



type  FriendsPropsType = {
    names?: Array<FriendsType>

}

export const Friends =(props:FriendsPropsType) => {
 return (
     <div className={styles.main}>
            <h3>Best Friends</h3>
            <div className={styles.row}>
                {props.names && props.names.map ((t, index) =>  <Friend name={t.name} key={index}/>)}

            </div>
        </div>
    );
};

