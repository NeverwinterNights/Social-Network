import {AppThunk} from "./redux-store";
import {chatAPI, WebSocketResponseType} from "../Api/chat-api";
import {Dispatch} from "redux";

// export type  initializedActionType = {
//     type: "INITIALIZED-SUCCESSES"
// }
//


export type  AuthMainType = {  /*типизация стейта локального*/
    messages: WebSocketResponseType[],
}


export type  ActionType = MessagesReceivedActionType


let initialState: AuthMainType = {
    messages: [] as WebSocketResponseType[]
}


type MessagesReceivedActionType = ReturnType<typeof messagesReceived>


export const chatReducer = (state: AuthMainType = initialState, action: ActionType) => {
    switch (action.type) {
        case "MESSAGES-RECEIVED": {
            return {...state, messages: [...state.messages, ...action.payload.messages] }
        }
        default:
            return state
    }
}


export const messagesReceived = (messages:WebSocketResponseType[]) => {
    return {
        type: "MESSAGES-RECEIVED",
        payload: {messages}
    } as const
}




//
// export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateReduxType, unknown, ActionType | FormAction> => (dispatch) => {
//
//     authAPI.login(email, password, rememberMe)
//         .then((response) => {
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             }
//         })
//
// }

//
export const startMessageListening = () => (dispatch: Dispatch) => {

    chatAPI.subscribe((message)=> {
        dispatch(messagesReceived(message))
    })

}

