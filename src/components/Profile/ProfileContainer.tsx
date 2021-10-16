import React from 'react';
import styles from "./Profile.module.css"
import {RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type  ProfileContainerPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    profile: null | ProfileType
    getUserProfile: (userID: string) => void
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
        this.props.getUserProfile(userID)
    }

    render() {
        return (
            <div className={styles.profile}>
                <Profile {...this.props} profile={this.props.profile}/> {/*все пришедшие пропсы прокидываю дальше*/}
            </div>
        );
    }
}


// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}


// let ProfileWithUrl = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(ProfileWithUrl)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)