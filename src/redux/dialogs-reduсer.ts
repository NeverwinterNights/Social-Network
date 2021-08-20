import {DialogsPageType, SendMessageActionType, UpdateNewPostBodyActionType} from "./state";


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


export const dialogsReducer = (state: DialogsPageType, action: any) => {
    switch (action.type) {
        case "UPDATE-NEW-POST-BODY": {
            state.newMessageBody = action.body /* была параметр ф, а теперь мы берем его из экшена*/
            break;
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody/* была параметр ф, а теперь мы берем его из экшена*/
            state.newMessageBody = ""
            state.messages.push ({id: 5, message: body})
            break;
        }
        default:
            return state
    }
}

