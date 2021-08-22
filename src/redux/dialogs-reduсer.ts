import {DialogsPageType, SendMessageActionType, UpdateNewPostBodyActionType} from "./store";


export const updateNewPostBodyActionCreator = (body: string): UpdateNewPostBodyActionType => {
    return {
        type: "UPDATE-NEW-POST-BODY",
        body: body
    }
}

export const SendMessageActionCreator = (): SendMessageActionType => {
    return {
        type: "SEND-MESSAGE",
    }
}

let initialState = {
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Misha"},
        {id: 4, name: "Petr"},
        {id: 5, name: "Alex"},
    ],
    messages: [
        {id: 1, message: "Privet"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Lets we meet"},
        {id: 4, message: "No"},
    ],
    newMessageBody: ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case "UPDATE-NEW-POST-BODY": {
            state.newMessageBody = action.body /* была параметр ф, а теперь мы берем его из экшена*/
            return {...state}
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody/* была параметр ф, а теперь мы берем его из экшена*/
            state.newMessageBody = ""
            state.messages.push({id: 5, message: body})
            return {...state}
        }
        default:
            return state
    }
}

