import {authAPI, securityAPI} from "../Api/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppThunk, StateReduxType} from "./redux-store";
import {FormAction} from "redux-form";


export type  AuthMainType = {  /*типизация стейта локального*/
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    captchaURL: null | string
}

let initialState: AuthMainType = {
    id: 2,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
}


export const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "AUTH/SET-CAPTCHA-URL": {
            return {...state, ...action.payload}

            // return {...state, captchaURL: action.payload.captcha}
        }
        default:
            return state
    }
}

export type  AuthMainActionType = { /*необходимо для типизации диспатчка*/
    type: "AUTH/SET-USER-DATA"
    payload: {
        id: null | number
        email: null | string
        login: null | string
        isAuth: boolean
    }
}
export type SetCaptchaURLActionType = ReturnType<typeof setCaptchaURL>


export type  ActionType = AuthMainActionType | SetCaptchaURLActionType


export const setUserData = (id: number | null, email: null | string, login: null | string, isAuth: boolean): AuthMainActionType => {
    return {
        type: "AUTH/SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}

export const setCaptchaURL = (captchaURL: null | string) => {
    return {
        type: "AUTH/SET-CAPTCHA-URL",
        payload: {
            captchaURL
        }
    } as const
}


// thunk
export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setUserData(id, email, login, true))
    } /*отправляем полученные данные в стейт*/

}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<void, StateReduxType, unknown, ActionType | FormAction> => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
    }
}


export const getCaptcha = (): AppThunk => async (dispatch) => {
    try {
        const res = await securityAPI.getCaptcha()
        const captchaURL = res.data.url
        dispatch(setCaptchaURL(captchaURL))
    } catch (e) {
        console.log(e)
    } finally {

    }
}


export const loginOut = () => (dispatch: Dispatch) => {

    authAPI.loginOut()  /*чтобы прееделать в асинк пишем после стрелки async тут делаем переменную и await убираем зен*/
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })

}

