import {authAPI} from "../Api/Api";
import {Dispatch} from "redux";

export type  AuthMainActionType = { /*необходимо для типизации диспатчка*/
    type: "SET-USER-DATA"
    payload: {
        id: number
        email: null | string
        login: null | string
    }
}
////


export type  AuthMainType = {  /*типизация стейта локального*/
    id: number
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
                ...action.payload,
                isAuth: true
            }
        }

        default:
            return state
    }
}


/*Это экшен криэйторы у которых в названии в конце убрали букву AC*/


export const setUserData = (id: number, email: null | string, login: null | string): AuthMainActionType => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login
        }
    }
}

export const getAuthUserData = () =>  (dispatch: Dispatch) => {
    authAPI.me().then(response => {/*запрос на сервак, зен респонс это ответ*/
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserData(id, email, login))
        } /*отправляем полученные данные в стейт*/


    })

}





