import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {SendMessageActionCreator, updateNewPostBodyActionCreator} from "../../redux/dialogs-reduсer";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";



export const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostBody: (body: string) => {
            dispatch(updateNewPostBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator())
        }
    }
}

const AuthRedirectComponent = WithAuthRedirect(Dialogs)



export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) /*получаем новую контейнерную компоненту*/