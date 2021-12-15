import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setFollowingInProgress,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/users-reduсer";
import {Users} from "./Users";
import {Preloader} from "../preloader/Preloader";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {StateReduxType} from "../../redux/redux-store";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/users-selectors";


type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []

    setUsers: (users: Array<UsersType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    // setPreloader: (isFetching: boolean) => void
    setFollowingInProgress: (userID: number, isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component <UsersPropsType, StateReduxType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    OnClickPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    setCurrentPage={this.props.setCurrentPage}
                    setUsers={this.props.setUsers}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    OnClickPageHandler={this.OnClickPageHandler}
                    setFollowingInProgress={this.props.setFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


export const mapStateToProps = (state: StateReduxType) => {

    return {
        users: getUsersSuper(state),  /*отправляет стейт в компоненту*/
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setUsers,
        setFollowingInProgress,
        getUsers: getUsersThunkCreator
    }),
    WithAuthRedirect
)(UsersContainer)


