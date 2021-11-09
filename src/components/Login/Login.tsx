import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/Input";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reduсer";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {StateReduxType} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean

}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"email"} validate={[required]} component={Input}/></div>
            <div><Field placeholder={"Password"} validate={[required]} type={"password"} name={"password"}
                        component={Input}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember Me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)


    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state:StateReduxType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)