import React, {ChangeEvent} from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";


type  DialogsPropsType = {
    // state: DialogsPageType
    // dispatch: (action: ActionsType) => void
    // store: storeReduxType
    updateNewPostBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}


export const Dialogs = (props: DialogsPropsType) => {



    const onClickSendHandler = () => {
        props.sendMessage()
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {/*получили диспатч из пропсов, указ апдейт
    и в параметры забрасываем полученное велью*/
        // props.store.dispatch (updateNewPostBodyActionCreator (e.currentTarget.value))
        props.updateNewPostBody(e.currentTarget.value)


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
                <div>
                    <div><textarea value={props.dialogsPage.newMessageBody}
                                   onChange={onChangeValueHandler}
                                   placeholder={"Enter message"}> </textarea></div>
                    {/*пропсы прищли из стейт диалог пейдж*/}
                    <div>
                        <button onClick={onClickSendHandler}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

