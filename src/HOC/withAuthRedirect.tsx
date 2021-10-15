import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/store";
import {connect} from "react-redux";


type  MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>)  {
    function RedirectComponent(props:MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to="/login"/>


        return <Component {...restProps as T}/>
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent)
};

