import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {Dispatch} from "redux";
import {StateReduxType} from "../../../redux/redux-store";


// type  MyPostsContainerPropsType = {
//     // posts: Array<PostsType>
//     // // addPost: () => void
//     // newPostText: string
//     // // updateNewPostText: (newText: string) => void
//     // dispatch: (action: ActionsType) => void
//
//
//     store: storeReduxType
//
//
// }

// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//     // let newPostElement = React.createRef<HTMLTextAreaElement> ()   /*нужна ли?*/ /*нет*/
//
// const addPost = () => {

//     if (props.store.getState().profilePage.newPostText) {  /*было if (props.newPostText) {*/
//         // props.addPost()
//         props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.newPostText))/*указываем тип какой и в стейте этому дейсвтию указали*/
//
//     }
// }
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostActionCreator(text)) /*тут тип экшена и  свойство экшена для ф.*/
//     }
//
//     return (<MyPosts updateNewPostText={onPostChange}
//                      addPost={addPost}
//
//                      posts={props.store.getState().profilePage.posts}
//                      newPostText={props.store.getState().profilePage.newPostText}/>);
// };

export const mapStateToProps = (state: StateReduxType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },

        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)/*коннект имеет локальный субскрайб*/