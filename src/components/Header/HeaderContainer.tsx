import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {getAuthUserData} from "../../redux/auth-reduсer";

type  HeaderContainerPropsType = {
    // setUserData: (id: number, email: null | string, login: null | string) => void
    isAuth: boolean
    login: null | string
    getAuthUserData: () => void
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, RootStateType> {
    componentDidMount() {   /*метод жизненного цикла, тут все зхапосы на сервер*/
        this.props.getAuthUserData()
    }
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
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)