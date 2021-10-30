import React from 'react';
import  {Field, reduxForm} from "redux-form";


const onSubmit = (formData: any) => {

}

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

export const LoginForm = (props: any) => {
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


const LoginFormRedux = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)