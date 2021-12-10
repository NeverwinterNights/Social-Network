import {StateReduxType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./users-reduсer";

export const getUsers = (state: StateReduxType) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users: Array<UsersType>) => {
    return users.map((user) => user)
})

// export const getUsersSuper = createSelector(getUsers, getPageSize (users: Array<UsersType>, pageSize: number) => {
//     return users.map((user) => true)
// })


export const getPageSize = (state: StateReduxType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: StateReduxType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: StateReduxType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: StateReduxType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: StateReduxType) => {
    return state.usersPage.followingProgress
}
