import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/Input";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reduсer";
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from "react-router-dom";
import {StateReduxType} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaURL: string | null
    captcha: string

}
// type MSTP = {
//     isAuth: boolean
//     captchaURL: string | null
// }
// type MDTP = {
//     login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
// }
// type LoginPropsType = MSTP & MDTP
// type LoginPropsType = MDTP

// interface LoginFormProps extends InjectedFormProps<FormDataType> {
//     captchaURL: string | null
// }

const LoginForm = ({handleSubmit, initialValues}: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={"Login"} name={"email"} validate={[required]}
                        component={Input}/></div>
            <div><Field placeholder={"Password"} validate={[required]} type={"password"}
                        name={"password"}
                        component={Input}/></div>
            <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember
                Me
            </div>
            {initialValues.captchaURL &&
            <img alt={"capture"} src={initialValues.captchaURL}/>}
            {initialValues.captchaURL &&
            <Field placeholder={"Type text from captcha"} component={Input}
                   validate={[required]} name={"captcha"} type={"input"}/>}


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

export const Login = () => {



    const captchaURL = useSelector<StateReduxType, string | null>(state => state.auth.captchaURL)
    const isAuth = useSelector<StateReduxType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
        // login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit} initialValues={{captchaURL}}/>
        </div>
    );
};

// const mapStateToProps = (state: StateReduxType): MSTP => ({
//     captchaURL: state.auth.captchaURL,
//     isAuth: state.auth.isAuth
// })
// export default connect<MDTP, {}, StateReduxType>(null, {login})(Login)