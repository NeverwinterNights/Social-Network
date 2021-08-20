import React, {ChangeEvent} from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {
    ActionsType,
    DialogsPageType,
    SendMessageActionCreator,
    updateNewPostActionCreator,
    updateNewPostBodyActionCreator
} from "../../redux/state";


type  DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    const onClickSendHandler = () => {
        props.dispatch (SendMessageActionCreator ())

    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {/*получили диспатч из пропсов, указ апдейт
    и в параметры забрасываем полученное велью*/
        props.dispatch(updateNewPostBodyActionCreator (e.currentTarget.value))
    }

    return (
        <div className={styles.main}>
            <div className={styles.dialogs}>
                {props.state.dialogs.map ((t) => <DialogsItem name={t.name} id={t.id} key={t.id}/>)}
            </div>
            <div className={styles.messages}>
                <div> {props.state.messages.map ((t, index) => <Message message={t.message} key={index}/>)}</div>
                <div>
                    <div><textarea value={props.state.newMessageBody} onChange={onChangeValueHandler}
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

