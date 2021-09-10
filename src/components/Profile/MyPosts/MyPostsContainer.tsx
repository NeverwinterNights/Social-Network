import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {Dispatch} from "redux";
import {StateReduxType} from "../../../redux/redux-store";


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