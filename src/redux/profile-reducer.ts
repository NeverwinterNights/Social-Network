import {AddPostActionType, PostsType, ProfilePageType, StoreType, UpdateNewPostActionType} from "./state";


export const addPostActionCreator = (newPostText: string): AddPostActionType => {/*ф. возвращающая экшен, ее вызывают в компоненте в диспатче
и прокидывают в параметрах данные сюда. АК экспорт. его не надо прокидывать пропсами props.dispatch (updateNewPostActionCreator(text)) */
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}

export const updateNewPostActionCreator = (body: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: body
    }
}


export const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            state.posts.unshift (newPost) /*стейт тут приходит в пропсах это this._state.profilePage*/
            state.newPostText = ""
            break; /*брейк можно заменить ретурн стейт в каждом кейсе*/
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText/* была параметр ф, а теперь мы берем его из экшена*/
            break;
        }
        default:
            return state
    }
}