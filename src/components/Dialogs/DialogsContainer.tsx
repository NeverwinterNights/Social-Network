import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {SendMessageActionCreator, updateNewPostBodyActionCreator} from "../../redux/dialogs-reduсer";
import {compose, Dispatch} from "redux";
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




export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) /*получаем новую контейнерную компоненту*/