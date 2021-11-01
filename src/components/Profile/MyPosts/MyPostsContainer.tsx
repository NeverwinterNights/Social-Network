import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {Dispatch} from "redux";
import {StateReduxType} from "../../../redux/redux-store";


export const mapStateToProps = (state: StateReduxType) => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText

    }
}
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)/*коннект имеет локальный субскрайб*/