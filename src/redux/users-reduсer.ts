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


////


export type  UsersMainType = {
    users: Array<UsersType>
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


let initialState: UsersMainType = {
    users: []

}


export const usersReducer = (state: UsersMainType = initialState, action: any) => {
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
            return {...state, users: [...state.users, ...action.users]}
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

