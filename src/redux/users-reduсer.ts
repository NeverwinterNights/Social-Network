export type  FollowActionType = { /*необходимо для типизации диспатчка*/
    type: "FOLLOW"
    userID: number
}

export type  UnFollowActionType = { /*необходимо для типизации диспатчка*/
    type: "UNFOLLOW"
    userID: number
}

export type  SetUsersActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-USERS"
    users: Array<UsersType>
}

export type  SetCurrentPageActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type  SetUsersTotalCountActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-CURRENT-TOTAL-COUNT"
    totalCount: number
}

export type  SetPreloaderActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-PRELOADER"
    isFetching: boolean
}


////


export type  UsersMainType = {  /*типизация стейта локального*/
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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


let initialState: UsersMainType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state: UsersMainType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW": {
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

        case "UNFOLLOW": {
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
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-CURRENT-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SET-PRELOADER": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}


export const followAC = (userID: number): FollowActionType => {
    return {
        type: "FOLLOW",
        userID: userID
    }
}
export const unFollowAC = (userID: number): UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        userID: userID
    }
}

export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users: users
    }
}

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    }
}

export const setUsersTotalCountAC = (totalCount: number): SetUsersTotalCountActionType => {
    return {
        type: "SET-CURRENT-TOTAL-COUNT",
        totalCount: totalCount
    }
}

export const setPreloaderAC = (isFetching: boolean): SetPreloaderActionType => {
    return {
        type: "SET-PRELOADER",
        isFetching: isFetching
    }
}





