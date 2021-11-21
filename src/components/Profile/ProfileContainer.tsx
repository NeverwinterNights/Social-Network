import React from 'react';
import styles from "./Profile.module.css"
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {StateReduxType} from "../../redux/redux-store";

type  ProfileContainerPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    profile: null | ProfileType
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
    status: string
}
type  PropsType = RouteComponentProps<PathType> & ProfileContainerPropsType  /*типизация пришедшего пути браузера*/
type  PathType = {
    userId: string
}

class ProfileContainer extends React.Component <PropsType, StateReduxType> {
    componentDidMount() {   /*метод жизненного цикла, тут все запросы на сервер*/
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = "19115"
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return (
            <div className={styles.profile}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/> {/*все пришедшие пропсы прокидываю дальше*/}
            </div>
        );
    }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


let mapStateToProps = (state: StateReduxType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


// let ProfileWithUrl = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(ProfileWithUrl)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)