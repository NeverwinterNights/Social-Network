import {getAuthUserData} from "./auth-reduсer";
import {ThunkAction} from "redux-thunk";
import {StateReduxType} from "./redux-store";

export type  initializedActionType = {
    type: "INITIALIZED-SUCCESSES"
}
//


export type  AuthMainType = {  /*типизация стейта локального*/
    initialized: boolean,
}


export type  ActionType = initializedActionType


type ThunkTyoe = ThunkAction<void, StateReduxType, unknown, ActionType>


let initialState: AuthMainType = {
    initialized: false,
}


export const appReducer = (state: AuthMainType = initialState, action: ActionType): AuthMainType => {
    switch (action.type) {

        case "INITIALIZED-SUCCESSES": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


export const initializedSuccess = (): initializedActionType => {
    return {
        type: "INITIALIZED-SUCCESSES",
    }
}

export const initializeApp = (): ThunkTyoe => (dispatch) => {
    let prom = dispatch(getAuthUserData())

    prom.then(() => {
        dispatch(initializedSuccess())

    })

}

//
// export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateReduxType, unknown, ActionType | FormAction> => (dispatch) => {
//
//     authAPI.login(email, password, rememberMe)
//         .then((response) => {
//             if (response.data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             }
//         })
//
// }
//
//
// export const loginOut = () => (dispatch: Dispatch) => {
//
//     authAPI.loginOut()
//         .then((response) => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setUserData(null, null, null, false))
//             }
//         })
//
// }

