import {DialogsType, MessagesType} from "./store";


export type  DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}


export type  SendMessageActionType = { /*необходимо для типизации диспатчка*/
    type: "SEND-MESSAGE"
    newMessageBody:string
}


// export const updateNewPostBodyActionCreator = (body: string): UpdateNewPostBodyActionType => {
//     return {
//         type: "UPDATE-NEW-POST-BODY",
//         body: body
//     }
// }

export const SendMessageActionCreator = (newMessageBody:string): SendMessageActionType => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
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
   }


export const dialogsReducer = (state: DialogsPageType = initialState, action: SendMessageActionType) => {
    switch (action.type) {
        // case "UPDATE-NEW-POST-BODY": {
        //     let stateCopy = {...state} /*делается копия для правильного изменения стейта*/
        //     action.newMessageBody = action.body /* была параметр ф, а теперь мы берем его из экшена*/
        //     return stateCopy
        // }
        case "SEND-MESSAGE": {
            let stateCopy = {...state, messages: [...state.messages]}/* делается глубокая копия стейта и мессаджес в стейте*/
            let body = action.newMessageBody/* была параметр ф, а теперь мы берем его из экшена*/


            stateCopy.messages.push({id: 5, message: body})
            return stateCopy
        }
        default:
            return state
    }
}

