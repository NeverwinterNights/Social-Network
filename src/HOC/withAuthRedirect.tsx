import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateReduxType} from "../redux/redux-store";


type  MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: StateReduxType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to="/login"/>


        return <Component {...restProps as T}/>
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

