import {authAPI} from "../Api/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {StateReduxType} from "./redux-store";
import {FormAction} from "redux-form";

export type  AuthMainActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-USER-DATA"
    payload: {
        id: null | number
        email: null | string
        login: null | string
        isAuth: boolean
    }
}
////


export type  AuthMainType = {  /*типизация стейта локального*/
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}


export type  ActionType = AuthMainActionType


// let initialState: AuthMainType = {
//     data: {
//         id: 2,
//         email: null,
//         login: null,
//     },
//     isAuth: false
// }


let initialState: AuthMainType = {
    id: 2,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: AuthMainType = initialState, action: ActionType) => {
    switch (action.type) {

        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }

        default:
            return state
    }
}


export const setUserData = (id: number | null, email: null | string, login: null | string, isAuth: boolean): AuthMainActionType => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(response => {/*запрос на сервак, зен респонс это ответ*/
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserData(id, email, login, true))
        } /*отправляем полученные данные в стейт*/


    })

}


export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateReduxType, unknown, ActionType | FormAction> => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}


export const loginOut = () => (dispatch: Dispatch) => {

    authAPI.loginOut()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })

}

