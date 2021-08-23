import {AddPostActionType, ProfilePageType, UpdateNewPostActionType} from "./store";


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


/*Создаем инициализационный стейт для profileReducer*/

let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 8},
        {id: 2, message: "How are you?", likesCount: 15},
        {id: 3, message: "Where are you?", likesCount: 50},
        {id: 4, message: "Fuck You", likesCount: 5},

    ],
    newPostText: "",  /*_Значение тектареа*/
}


export const profileReducer = (state: ProfilePageType = initialState, action: any
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
        default:
            return state
    }
}