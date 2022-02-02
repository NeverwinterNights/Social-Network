import React, {Suspense} from 'react';
import './App.css';

import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduсer";
import {StateReduxType} from "./redux/redux-store";
import {Preloader} from "./components/preloader/Preloader";
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import {UsersContainer} from "./components/Users/UsersContainer";



// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));/*ленивая загрузка компоненты*/


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {   /*метод жизненного цикла, тут все зхапосы на сервер*/
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                {/*<Navbar state={props.store.sidebar}/>*/}
                <Navbar/>
                <div className={"profile"}>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                        {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.getState().dialogsPage}/>}/>*/}
                        <Route path="/dialogs"
                               render={() => <Suspense fallback={<div>Loading...</div>}>
                                   <DialogsContainer/></Suspense>}/>
                        {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                        <Route path="/profile/:userId?"
                               render={() =>
                                   <ProfileContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                        <Route path="/users" render={() =>
                            <UsersContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                        <Route path="/login" render={() =>
                            <Login/>} /*пробрасываем диспатч вмеесто функцый*//>
                        <Route path="/news" render={() =>
                            <News/>}/>
                        <Route path="/music" render={() =>
                            <Music/>}/>
                    </Switch>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StateReduxType): MapStateToPropsType => {
    return {
        initialized: state.appReducer.initialized
    }
}


type  MapStateToPropsType = {
    initialized: boolean
}
type  MapDispatchToProps = {
    initializeApp: () => void
}

type  OwnProps = {}

export default compose<React.ComponentType>(withRouter, connect<MapStateToPropsType, MapDispatchToProps, OwnProps, StateReduxType>(mapStateToProps, {initializeApp}))(App)
