import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reduсer";
import UsersComp from './User.Comp';


export const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users/*отправляет стейт в компоненту*/
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComp) /*получаем новую контейнерную компоненту*/

