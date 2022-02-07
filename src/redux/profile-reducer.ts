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
    profile: null | ProfileType
}

export type  AddPostActionType = {
    type: "PROFILE/ADD-POST"
    newPostText: string
}

export type DeletePostActionType = ReturnType<typeof deletePostActionCreator>




export type  SetUserProfileActionType = {
    type: "PROFILE/SET-USER-PROFILE"
    profile: null | ProfileType

}

export type  setStatusActionType = {
    type: "PROFILE/SET-STATUS"
    status: string

}

export type SetPhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>


export type  ActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | setStatusActionType
    | DeletePostActionType
    | SetPhotoSuccessActionType




let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 8},
        {id: 2, message: "How are you?", likesCount: 15},
        {id: 3, message: "Where are you?", likesCount: 50},
    ],
    profile: null,
    status: ""
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => { /*указываем стейту инициализационное значение*/
    switch (action.type) {
        case "PROFILE/SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "PROFILE/ADD-POST": {
            // let newPost: PostsType = {
            //     id: 5,
            //     message: state.newPostText,
            //     likesCount: 0
            // }
            return {
                ...state,
                posts: [{
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }, ...state.posts],
            }

            // stateCopy.posts.unshift(newPost) /*стейт тут приходит в пропсах это this._state.profilePage*/
            // stateCopy.newPostText = ""
            // return stateCopy
            // break; /*брейк можно заменить ретурн стейт в каждом кейсе*/
        }
        case "PROFILE/SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "PROFILE/DELETE-POST": {
            return {...state, posts: state.posts.filter((post) => post.id != action.id)}
        }
        case "PROFILE/SET-PHOTO": {
            return {...state, profile: state.profile ? {...state.profile} : null}
        }
        default:
            return state
    }
}


export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "PROFILE/ADD-POST",
        newPostText
    }
}

export const deletePostActionCreator = (id: number) => {
    return {
        type: "PROFILE/DELETE-POST",
        id
    } as const
}




export const setUserProfile = (profile: null | ProfileType): SetUserProfileActionType => {
    return {
        type: "PROFILE/SET-USER-PROFILE",
        profile
    }
}

export const setStatus = (status: string): setStatusActionType => {
    return {
        type: "PROFILE/SET-STATUS",
        status
    }
}

export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: "PROFILE/SET-PHOTO",
        photos
    } as const
}


export const getUserProfile = (userID: string) => async (dispatch: Dispatch) => {
    const response = await userAPI.getProfile(userID)
    dispatch(setUserProfile(response.data))
}


export const getStatus = (userID: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }


}








