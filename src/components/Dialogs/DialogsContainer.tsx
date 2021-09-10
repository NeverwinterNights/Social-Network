import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {SendMessageActionCreator, updateNewPostBodyActionCreator} from "../../redux/dialogs-reduсer";
import {Dispatch} from "redux";



export const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) /*получаем новую контейнерную компоненту*/