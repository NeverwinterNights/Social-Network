import {getAuthUserData} from "./auth-reduсer";
import {AppThunk} from "./redux-store";

export type  initializedActionType = {
    type: "INITIALIZED-SUCCESSES"
}
//


export type  AuthMainType = {
    initialized: boolean,
}


export type  ActionType = initializedActionType


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

export const initializeApp = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
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

