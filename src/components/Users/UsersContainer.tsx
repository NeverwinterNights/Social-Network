import React from 'react';
import {useSelector} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../preloader/Preloader";
import {StateReduxType} from "../../redux/redux-store";




export const UsersContainer = React.memo(() => {

    const isFetching = useSelector<StateReduxType, boolean>(state => state.usersPage.isFetching)


    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </>
    );
});



