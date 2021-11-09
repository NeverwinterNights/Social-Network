import React from 'react';
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/Textarea";

type  MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

type  FormType = {
    newPostText: string
}

let maxLength = maxLengthCreator(15)


export const MyPosts = (props: MyPostsPropsType) => {
    const onAddPost = (values: FormType) => {
        if (values) {
            props.addPost(values.newPostText)
        }
    }
    return (
        <div className={styles.posts}>
            <div className={styles.main}>
                <h2>My Posts</h2>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            {props.posts.map((t, index) => <Post key={index} message={t.message} likes={t.likesCount}/>)}
        </div>
    );
};

const AddNewPost = (props: InjectedFormProps<FormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} validate={[required, maxLength]} placeholder={"Post message"}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostForm = reduxForm<FormType>({form: "ProfileAddNewPost"})(AddNewPost)