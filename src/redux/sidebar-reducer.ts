import {SidebarType} from "./store";


let initialState = {
    friends: [
        {name: "Ivan"},
        {name: "Oleg"},
        {name: "Petr"},
        {name: "Vasa"},
        {name: "Sergei"},
        {name: "Margo"}
    ]
}


export const sidebarReducer = (state: SidebarType = initialState, action: any) => {

    return state
}