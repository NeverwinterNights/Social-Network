import React from 'react';
import styles from "./Textarea.module.css"
import {WrappedFieldProps} from "redux-form";

export const Textarea = ({input, meta, ...props}: WrappedFieldProps) => {

    return (
        <div className={`${styles.formControl} ${meta.touched && meta.error ? styles.error : ""}`}>
            <div><textarea {...input} {...props} /></div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};


