import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type FormDataType = {
    login: string
    password: string
    remember: boolean
}

const onSubmit = (formData: FormDataType) => {

}

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

export const LoginForm = (props:InjectedFormProps<FormDataType> ) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component ={"input"} /></div>
            <div><Field placeholder={"Password"} name={"password"} component ={"input"}/></div>
            <div><Field component ={"input"} name={"remember"} type={"checkbox"}/>Remember Me</div>
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