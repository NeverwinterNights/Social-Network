import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogs-reduсer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";


let reducers = combineReducers({ /*создается общий редьюсер с помощью спец команды, внутрь котор вставляют редюсеры имеющиеся*/
    dialogsPage: dialogsReducer,  /*ключ это элем общий из стейта, значя относящийся к нему релдьюсер*/
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

export type StateReduxType = ReturnType<typeof reducers>/*скопировал из впервой версии*/


// export let store: Store<StateReduxType> = createStore(reducers) /*это шаблон создания стора*/
export let store: Store<StateReduxType> = createStore(reducers)
// export let store: any = createStore(reducers) /*это шаблон создания стора help*/