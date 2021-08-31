import { ProfilePageType } from "./profile-reducer";
import {UsersMainType} from "./users-reduсer";
import {AuthMainType} from "./auth-reduсer";

export type  DialogsType = {
    id: number
    name: string
}

export  type  MessagesType = {
    id: number
    message: string
}





export type  DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type  SidebarType = {
    friends: Array<FriendsType>
}
export  type  FriendsType = {
    name: string
}


export  type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersMainType
    auth: AuthMainType
}

// export  type  StoreType = {
//     _callSubscriber: () => void
//     _state: RootStateType
//     getState: () => RootStateType
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsType) => void
// }


// export type  AddPostActionType = { /*необходимо для типизации диспатчка*/
//     type: "ADD-POST"
// }
//
//
//
//
// export type  UpdateNewPostActionType = { /*необходимо для типизации диспатчка*/
//     type: "UPDATE-NEW-POST-TEXT"
//     newText: string
// }




export type  UpdateNewPostBodyActionType = { /*необходимо для типизации диспатчка*/
    type: "UPDATE-NEW-POST-BODY"
    body: string
}

export type  SendMessageActionType = { /*необходимо для типизации диспатчка*/
    type: "SEND-MESSAGE"
}


export type  ActionsType =
    | UpdateNewPostBodyActionType
    | SendMessageActionType /*необходимо для типизации диспатчка*/


// let storee:  = {
//     _callSubscriber() {
//         console.log("State is changed")
//     },
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hello", likesCount: 8},
//                 {id: 2, message: "How are you?", likesCount: 15},
//                 {id: 3, message: "Where are you?", likesCount: 50},
//                 {id: 4, message: "Fuck You", likesCount: 5},
//
//             ],
//             newPostText: "53452345",  /*_Значение тектареа*/
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Ivan"},
//                 {id: 2, name: "Oleg"},
//                 {id: 3, name: "Misha"},
//                 {id: 4, name: "Petr"},
//                 {id: 5, name: "Alex"},
//             ],
//             messages: [
//                 {id: 1, message: "Privet"},
//                 {id: 2, message: "How are you"},
//                 {id: 3, message: "Lets we meet"},
//                 {id: 4, message: "No"},
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {
//             friends: [
//                 {name: "Ivan"},
//                 {name: "Oleg"},
//                 {name: "Petr"},
//                 {name: "Vasil"},
//                 {name: "Sergei"},
//                 {name: "Margo"}
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) { /* патерн observer*/
//         this._callSubscriber = observer /*приравниванием полученный ререндер к созданный выше ререндер*/
//     },
//
//     // addPost () { /* по нажатию кнопки добавляем пост*/
//     //     let newPost: PostsType = {
//     //         id: 5,
//     //         message: this._state.profilePage.newPostText,
//     //         likesCount: 0
//     //     }
//     //     this._state.profilePage.posts.unshift (newPost)
//     //     this._state.profilePage.newPostText = ""
//     //     this._callSubscriber ()
//     // },
//
//     // updateNewPostText (newText: string) { /*Функция, которая сетает значение из тектареа*/
//     //     this._state.profilePage.newPostText = newText
//     //     this._callSubscriber ()
//     // },
//
//
//     dispatch(action) {     /*у экшена обязательно типа и действие*/
//         dialogsReducer(this._state.dialogsPage, action)
//         profileReducer(this._state.profilePage, action)
//         sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber()
//
//         // switch (action.type) {
//         //     case "ADD-POST": {
//         //         let newPost: PostsType = {
//         //             id: 5,
//         //             message: action.newPostText,
//         //             likesCount: 0
//         //         }
//         //         this._state.profilePage.posts.unshift (newPost)
//         //         this._state.profilePage.newPostText = ""
//         //         this._callSubscriber ()
//         //         break;
//         //     }
//         //     case "UPDATE-NEW-POST-TEXT": {
//         //         this._state.profilePage.newPostText = action.newText/* была параметр ф, а теперь мы берем его из экшена*/
//         //         this._callSubscriber ()
//         //         break;
//         //     }
//         //     case "UPDATE-NEW-POST-BODY": {
//         //         this._state.dialogsPage.newMessageBody = action.body /* была параметр ф, а теперь мы берем его из экшена*/
//         //         this._callSubscriber ()
//         //         break;
//         //     }
//         //     case "SEND-MESSAGE": {
//         //         let body = this._state.dialogsPage.newMessageBody/* была параметр ф, а теперь мы берем его из экшена*/
//         //         this._state.dialogsPage.newMessageBody = ""
//         //         this._state.dialogsPage.messages.push ({id: 5, message: body})
//         //         this._callSubscriber ()
//         //         break;
//         //     }
//         //
//         //
//         // }
//     }
// }
// // export let state: RootStateType = {
// //     profilePage: {
// //         posts: [
// //             {id: 1, message: "Hello", likesCount: 8},
// //             {id: 2, message: "How are you?", likesCount: 15},
// //             {id: 3, message: "Where are you?", likesCount: 50},
// //             {id: 4, message: "Fuck You", likesCount: 5},
// //
// //         ],
// //         newPostText: "Type new post",  /*_Значение тектареа*/
// //     },
// //     dialogsPage: {
// //         dialogs: [
// //             {id: 1, name: "Ivan"},
// //             {id: 2, name: "Oleg"},
// //             {id: 3, name: "Misha"},
// //             {id: 4, name: "Petr"},
// //             {id: 5, name: "Alex"},
// //         ],
// //         messages: [
// //             {id: 1, message: "Privet"},
// //             {id: 2, message: "How are you"},
// //             {id: 3, message: "Lets we meet"},
// //             {id: 4, message: "No"},
// //         ]
// //     },
// //     sidebar: {
// //         friends: [
// //             {name: "Ivan"},
// //             {name: "Oleg"},
// //             {name: "Petr"},
// //             {name: "Vasa"},
// //             {name: "Sergei"},
// //             {name: "Margo"}
// //         ]
// //     }
// // }
// // export const addPost = () => { /* по нажатию кнопки добавляем пост*/
// //     let newPost: PostsType = {
// //         id: 5,
// //         message: state.profilePage.newPostText,
// //         likesCount: 0
// //     }
// //     state.profilePage.posts.unshift (newPost)
// //     state.profilePage.newPostText = ""
// //     RerenderEntireTree ()
// // }
// // export const updateNewPostText = (newText: string) => { /*Функция, которая сетает значение из тектареа*/
// //     state.profilePage.newPostText = newText
// //     RerenderEntireTree ()
// // }
// // export const subscribe = (observer: () => void) => { /* патерн observer*/
// //     RerenderEntireTree = observer /*приравниванием полученный ререндер к созданный выше ререндер*/
// // }

//
// export default storee