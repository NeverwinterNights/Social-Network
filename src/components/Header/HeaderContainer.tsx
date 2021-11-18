import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {loginOut} from "../../redux/auth-reduсer";

type  HeaderContainerPropsType = {
    // setUserData: (id: number, email: null | string, login: null | string) => void
    isAuth: boolean
    login: null | string

    loginOut: any
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, RootStateType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {loginOut})(HeaderContainer)