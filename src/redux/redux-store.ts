import {
    AnyAction,
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
    Store
} from "redux";
import {dialogsReducer} from "./dialogs-reduсer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reduсer";
import {authReducer} from "./auth-reduсer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reduсer";


let reducers = combineReducers({ /*создается общий редьюсер с помощью спец команды, внутрь котор вставляют редюсеры имеющиеся*/
    dialogsPage: dialogsReducer,  /*ключ это элем общий из стейта, значя относящийся к нему релдьюсер*/
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    appReducer: appReducer
})

// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<StateReduxType> = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export type StateReduxType = ReturnType<typeof reducers>/*скопировал из впервой версии*/

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateReduxType, unknown, AnyAction>

// export let store: Store<StateReduxType> = createStore(reducers) /*это шаблон создания стора*/
// export let store: Store<StateReduxType> = createStore(reducers, applyMiddleware(thunkMiddleware))
// export let store: any = createStore(reducers) /*это шаблон создания стора help*/

//@ts-ignore
window.store = store