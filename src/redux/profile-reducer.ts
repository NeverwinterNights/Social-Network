import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../Api/Api";

export  type  PostsType = {
    id: number
    message: string
    likesCount: number
}


export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}
type PhotosType = {
    'small': string
    'large': string
}
type  ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}


export type  ProfilePageType = {
    status: string;
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileType
}

export type  AddPostActionType = { /*необходимо для типизации диспатчка*/
    type: "ADD-POST"
}


export type  UpdateNewPostActionType = { /*необходимо для типизации диспатчка*/
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}


export type  SetUserProfileActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-USER-PROFILE"
    profile: null | ProfileType

}

export type  setStatusActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-STATUS"
    status: string

}


export type  ActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileActionType
    | setStatusActionType


/*Создаем инициализационный стейт для profileReducer*/

let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 8},
        {id: 2, message: "How are you?", likesCount: 15},
        {id: 3, message: "Where are you?", likesCount: 50},
        {id: 4, message: "Fuck You", likesCount: 5},

    ],
    newPostText: "",  /*_Значение тектареа*/
    profile: null,
    status: ""
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => { /*указываем стейту инициализационное значение*/
    switch (action.type) {
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "ADD-POST": {
            // let newPost: PostsType = {
            //     id: 5,
            //     message: state.newPostText,
            //     likesCount: 0
            // }
            return {
                ...state,
                posts: [{id: 5, message: state.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ""
            } /*делается копия для правильного изменения стейта*/

            // stateCopy.posts.unshift(newPost) /*стейт тут приходит в пропсах это this._state.profilePage*/
            // stateCopy.newPostText = ""
            // return stateCopy
            // break; /*брейк можно заменить ретурн стейт в каждом кейсе*/
        }
        case "UPDATE-NEW-POST-TEXT": {
            // let stateCopy = {...state, newPostText: action.newText} /*делается копия для правильного изменения стейта*/
            // stateCopy.newPostText = action.newText/* была параметр ф, а теперь мы берем его из экшена*/
            return {...state, newPostText: action.newText}
            // break;
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}


export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}
/*ф. возвращающая экшен, ее вызывают в компоненте в диспатче
и прокидывают в параметрах данные сюда. АК экспорт. его не надо прокидывать пропсами props.dispatch (updateNewPostActionCreator(text)) */
export const updateNewPostActionCreator = (body: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: body
    }
}
export const setUserProfile = (profile: null | ProfileType): SetUserProfileActionType => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }
}

export const setStatus = (status: string): setStatusActionType => {
    return {
        type: "SET-STATUS",
        status
    }
}

export const getUserProfile = (userID: string) => (dispatch: Dispatch) => {
    userAPI.getProfile(userID).then(response => {/*запрос на сервак, зен респонс это ответ*/
        dispatch(setUserProfile(response.data))/*отправляем полученные данные в стейт*/

    })
}


export const getStatus = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userID).then(response => {/*запрос на сервак, зен респонс это ответ*/
        dispatch(setStatus(response.data))/*отправляем полученные данные в стейт*/

    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {/*запрос на сервак, зен респонс это ответ*/
        if (response.data.resultCode===0) {
            dispatch(setStatus(status))/*отправляем полученные данные в стейт*/

        }

    })
}