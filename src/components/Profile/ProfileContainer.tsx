import React from 'react';
import styles from "./Profile.module.css"
import {RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {UsersType} from "../../redux/users-reduсer";


type  ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: null | ProfileType
}

class ProfileContainer extends React.Component <ProfileContainerPropsType, RootStateType> {

    componentDidMount() {   /*метод жизненного цикла, тут все зхапосы на сервер*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {/*запрос на сервак, зен респонс это ответ*/
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

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)

