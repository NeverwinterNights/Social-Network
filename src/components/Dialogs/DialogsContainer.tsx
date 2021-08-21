import React, {ChangeEvent} from 'react';
import styles from "./Dialogs.module.css";
import {Message} from './Message/Message';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {
    ActionsType,
    DialogsPageType,
} from "../../redux/store";
import {SendMessageActionCreator, updateNewPostBodyActionCreator} from "../../redux/dialogs-reduсer";
import {Dialogs} from "./Dialogs";
import {storeReduxType} from "../../redux/redux-store";


type  DialogsContainerPropsType = {
    store: storeReduxType


}


export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const onClickSendHandler = () => {
        props.store.dispatch (SendMessageActionCreator ())

    }

    const onChangeValueHandler = (body: string) => {/*получили диспатч из пропсов, указ апдейт
    и в параметры забрасываем полученное велью*/
        props.store.dispatch (updateNewPostBodyActionCreator (body))
    }

    return (
        <Dialogs updateNewPostBody={onChangeValueHandler} SendMessage={onClickSendHandler}
                 dialogsPage={props.store.getState ().dialogsPage}/>
    );
};

