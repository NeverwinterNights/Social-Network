import React from 'react';
import styles from "./News.module.css"


export const News = React.memo(() => {
    return (
        <div>
            <h2 className={styles.title}>News</h2>
            <div className={styles.body}></div>
        </div>
    );
});

