import {chatAPI, WebSocketResponseType} from "../Api/chat-api";
import {Dispatch} from "redux";

// export type  initializedActionType = {
//     type: "INITIALIZED-SUCCESSES"
// }
//


export type  AuthMainType = {
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
            return {...state, messages: [...state.messages, ...action.payload.messages]}
        }
        default:
            return state
    }
}


export const messagesReceived = (messages: WebSocketResponseType[]) => {
    return {
        type: "MESSAGES-RECEIVED",
        payload: {messages}
    } as const
}


const newMessageHandler = (dispatch: Dispatch) => (message: WebSocketResponseType[]) => {
    dispatch(messagesReceived(message))
}


export const startMessageListening = () => (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandler(dispatch))

}

export const stopMessageListening = () => (dispatch: Dispatch) => {
    chatAPI.unsubscribe(newMessageHandler(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}
