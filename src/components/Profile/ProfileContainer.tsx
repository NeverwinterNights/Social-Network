import React from 'react';
import styles from "./Profile.module.css"
import {RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type  ProfileContainerPropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: null | ProfileType

}

type  PropsType = RouteComponentProps<PathType> & ProfileContainerPropsType  /*типизация пришедшего пути браузера*/


type  PathType = {
    userId: string
}


class ProfileContainer extends React.Component <PropsType, RootStateType> {



    componentDidMount() {   /*метод жизненного цикла, тут все зхапосы на сервер*/
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = "3"
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID).then(response => {/*запрос на сервак, зен респонс это ответ*/
            this.props.setUserProfile(response.data) /*отправляем полученные данные в стейт*/


        })
    }

    render() {
        return (
            <div className={styles.profile}>
                <Profile {...this.props} profile={this.props.profile}/> {/*все пришедшие пропсы прокидываю дальше*/}
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}


let ProfileWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileWithUrl)

