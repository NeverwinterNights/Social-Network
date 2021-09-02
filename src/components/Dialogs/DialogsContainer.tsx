import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {RootStateType} from "../../redux/store";
import {SendMessageActionCreator, updateNewPostBodyActionCreator} from "../../redux/dialogs-reduсer";
import {Dispatch} from "redux";


// type  DialogsContainerPropsType = {
//     store: storeReduxType
//
//
// }

//
// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//     const onClickSendHandler = () => {
//         props.store.dispatch (SendMessageActionCreator ())
//
//     }
//
//     const onChangeValueHandler = (body: string) => {/*получили диспатч из пропсов, указ апдейт
//     и в параметры забрасываем полученное велью*/
//         props.store.dispatch (updateNewPostBodyActionCreator (body))
//     }
//
//     return (
//         <Dialogs updateNewPostBody={onChangeValueHandler} sendMessage={onClickSendHandler}
//                  dialogsPage={props.store.getState ().dialogsPage}/>
//     );
// };
export const mapStateToProps = (state: RootStateType) => {
    return {dialogsPage: state.dialogsPage}
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