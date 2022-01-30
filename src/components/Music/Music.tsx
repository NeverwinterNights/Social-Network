import React from 'react';
import styles from "./Music.module.css"


export const Music = React.memo(() => {
    return (
        <div>
            <h2 className={styles.title}>Music</h2>
            <div className={styles.body}></div>
        </div>
    );
});

