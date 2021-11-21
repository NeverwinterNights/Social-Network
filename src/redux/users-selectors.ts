import {StateReduxType} from "./redux-store";

export const getUsers = (state:StateReduxType) => {
    return state.usersPage.users
}

export const getPageSize = (state:StateReduxType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:StateReduxType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:StateReduxType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:StateReduxType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state:StateReduxType) => {
    return state.usersPage.followingProgress
}
