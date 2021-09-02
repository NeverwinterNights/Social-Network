import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setUserData} from "../../redux/auth-reduсer";

type  HeaderContainerPropsType = {
    setUserData: (id: number, email: null | string, login: null | string) => void
    isAuth: boolean
    login: null | string
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, RootStateType> {


    componentDidMount() {   /*метод жизненного цикла, тут все зхапосы на сервер*/


        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {/*запрос на сервак, зен респонс это ответ*/
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
            } /*отправляем полученные данные в стейт*/


        })
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
export default connect(mapStateToProps, {setUserData})(HeaderContainer)