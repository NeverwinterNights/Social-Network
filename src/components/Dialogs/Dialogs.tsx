import React from 'react';
import styles from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                <div className={styles.dialog}>Ivan</div>
                <div className={styles.dialog + " " + styles.active}>Oleg</div>
                <div className={styles.dialog}>Misha</div>
                <div className={styles.dialog}>Petr</div>
                <div className={styles.dialog}>Alex</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Privet</div>
                <div className={styles.message}>How are you</div>
                <div className={styles.message}>Lets we meet</div>
                <div className={styles.message}>No</div>
            </div>
        </div>
    );
};

