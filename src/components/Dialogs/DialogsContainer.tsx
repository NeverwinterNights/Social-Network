import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {SendMessageActionCreator} from "../../redux/dialogs-reduсer";
import {compose, Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {StateReduxType} from "../../redux/redux-store";


export const mapStateToProps = (state: StateReduxType) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // updateNewPostBody: (body: string) => {
        //     dispatch(updateNewPostBodyActionCreator(body))
        // },
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessageActionCreator(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)

