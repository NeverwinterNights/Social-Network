import {RerenderEntireTree} from "../render";

export type  DialogsType = {
    id: number
    name: string
}
export  type  PostsType = {
    id: number
    message: string
    likesCount: number
}
export  type  MessagesType = {
    id: number
    message: string
}
export  type  FriendsType = {
    name: string
}


export type  ProfilePageType = {
    posts: Array<PostsType>
}
export type  DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type  SidebarType = {
    friends: Array<FriendsType>
}


export  type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 8},
            {id: 2, message: "How are you?", likesCount: 15},
            {id: 3, message: "Where are you?", likesCount: 50},
            {id: 4, message: "Fuck You", likesCount: 5},

        ]
    },
    dialogsPage: {
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
        ]
    },
    sidebar: {
        friends: [
            {name: "Ivan"},
            {name: "Oleg"},
            {name: "Petr"},
            {name: "Vasa"},
            {name: "Sergei"},
            {name: "Margo"}
        ]
    }
}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.unshift (newPost)
    RerenderEntireTree(state)
}

export default state