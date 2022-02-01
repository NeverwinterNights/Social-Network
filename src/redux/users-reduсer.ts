import {Dispatch} from "redux";
import {userAPI} from "../Api/Api";

export type  FollowActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/FOLLOW"
    userID: number
}

export type  UnFollowActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/UNFOLLOW"
    userID: number
}

export type  SetUsersActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/SET-USERS"
    users: Array<UsersType>
}

export type  SetCurrentPageActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/SET-CURRENT-PAGE"
    currentPage: number
}

export type  SetUsersTotalCountActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/SET-CURRENT-TOTAL-COUNT"
    totalCount: number
}

export type  SetPreloaderActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/SET-PRELOADER"
    isFetching: boolean
}
export type  FollowingInProgressActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/FOLLOWING-IN-PROGRESS"
    userID: number
    isFetching: boolean
}

export type  SetFiltersActionType = { /*необходимо для типизации диспатчка*/
    type: "USERS/SET-FILTER"
    payload: {
        term: string,
        friend: null | boolean
    }
}


////


export type  UsersMainType = {  /*типизация стейта локального*/
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[],
    filter: {
        term: string,
        friend: null | boolean
    }
}

export type  UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type  PhotosType = {
    small: null | string
    large: null | string

}

type  LocationType = {
    city: string
    country: string
}


export type  ActionType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | SetPreloaderActionType
    | FollowingInProgressActionType
    | SetFiltersActionType


let initialState: UsersMainType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
    filter: {
        term: "",
        friend: null
    }
}


export type FilterType = typeof initialState.filter


export const usersReducer = (state: UsersMainType = initialState, action: ActionType): UsersMainType => {
    switch (action.type) {
        case "USERS/FOLLOW": {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case "USERS/UNFOLLOW": {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case "USERS/SET-USERS": {
            return {...state, users: action.users}
        }
        case "USERS/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "USERS/SET-CURRENT-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "USERS/SET-PRELOADER": {
            return {...state, isFetching: action.isFetching}
        }
        case "USERS/FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter((t) => t !== action.userID)

            }
        }
        case "USERS/SET-FILTER": {
            return {...state, filter: action.payload}
        }
        default:
            return state
    }
}


/*Это экшен криэйторы у которых в названии в конце убрали букву AC*/


export const followSuccess = (userID: number): FollowActionType => {
    return {
        type: "USERS/FOLLOW",
        userID: userID
    }
}
export const unFollowSuccess = (userID: number): UnFollowActionType => {
    return {
        type: "USERS/UNFOLLOW",
        userID: userID
    }
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => {
    return {
        type: "USERS/SET-USERS",
        users: users
    }
}
export const setFilter = (filter: FilterType): SetFiltersActionType => {
    return {
        type: "USERS/SET-FILTER",
        payload: filter
    }
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: "USERS/SET-CURRENT-PAGE",
        currentPage: currentPage
    }
}


export const setTotalUsersCount = (totalCount: number): SetUsersTotalCountActionType => {
    return {
        type: "USERS/SET-CURRENT-TOTAL-COUNT",
        totalCount: totalCount
    }
}
export const setPreloader = (isFetching: boolean): SetPreloaderActionType => {
    return {
        type: "USERS/SET-PRELOADER",
        isFetching: isFetching
    }
}
export const setFollowingInProgress = (userID: number, isFetching: boolean): FollowingInProgressActionType => {
    return {
        type: "USERS/FOLLOWING-IN-PROGRESS",
        userID: userID,
        isFetching: isFetching
    }
}


/*санки*/

export const getUsersThunkCreator = (currentPage: number, pageSize: number, filter: FilterType) => async (dispatch: Dispatch) => {  /*это санка*/

    dispatch(setPreloader(true))
    dispatch(setCurrentPage(currentPage))
    dispatch(setFilter(filter))
    const data = await userAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(setPreloader(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}


export const follow = (userID: number) => { /*это криэйтор санки*/
    return async (dispatch: Dispatch) => {   /*это санка*/
        dispatch(setFollowingInProgress(userID, true))
        const response = await userAPI.follow(userID)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userID))
        }
        dispatch(setFollowingInProgress(userID, false))
    }
}

export const unfollow = (userID: number) => { /*это криэйтор санки*/
    return async (dispatch: Dispatch) => {   /*это санка*/
        dispatch(setFollowingInProgress(userID, true))
        const response = await userAPI.unfollow(userID)
        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userID))
        }
        dispatch(setFollowingInProgress(userID, false))
    }
}


