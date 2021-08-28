export  type  PostsType = {
    id: number
    message: string
    likesCount: number
}




export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
}
type PhotosType = {
    'small': string
    'large': string
}
type  ContactsType = {
    facebook:string
    website:null
    vk:string
    twitter:string
    instagram:string
    youtube:null
    github:string
    mainLink:null
}


export type  ProfilePageType = {
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
    profile: any

}


export type  ActionsType =
    AddPostActionType
    | UpdateNewPostActionType
    | SetUserProfileActionType


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


/*Создаем инициализационный стейт для profileReducer*/

let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 8},
        {id: 2, message: "How are you?", likesCount: 15},
        {id: 3, message: "Where are you?", likesCount: 50},
        {id: 4, message: "Fuck You", likesCount: 5},

    ],
    newPostText: "",  /*_Значение тектареа*/
    profile: null
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType
):
    ProfilePageType => { /*указываем стейту инициализационное значение*/
    switch (action.type) {
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