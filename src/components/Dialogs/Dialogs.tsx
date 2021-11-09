import React, {ChangeEvent} from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/dialogs-reduсer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/Textarea";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type  DialogsPropsType = {
    updateNewPostBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}


type  FormType = {
    newMessageBody: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const addNewMessage = (formData: FormType) => {
        props.sendMessage(formData.newMessageBody)
    }

    // if (!props.isAuth) {
    //   return <Redirect to={"/login"}/>
    // }


    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {props.dialogsPage.dialogs.map((t) => <DialogsItem name={t.name} id={t.id}
                                                                   key={t.id}/>)}
            </div>
            <div className={styles.messages}>
                <div> {props.dialogsPage.messages.map((t, index) => <Message message={t.message}
                                                                             key={index}/>)}</div>
                <AddMessageFormDialog onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

let maxLength50 = maxLengthCreator(50)

const FormDialog = (props: InjectedFormProps<FormType>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={"newMessageBody"} placeholder={"Enter message"}/>
            </div>

            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormDialog = reduxForm<FormType>({form: "dialogAddMessageFormDialog"})(FormDialog)
