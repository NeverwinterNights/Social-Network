import styles from "./Textarea.module.css";
import React from "react";
import {WrappedFieldProps} from "redux-form";

export const Input = ({input, meta, ...props}: WrappedFieldProps) => {

    return (
        <div className={`${styles.formControl} ${meta.touched && meta.error ? styles.error : ""}`}>
            <div><input {...input} {...props} /></div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};