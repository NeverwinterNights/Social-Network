import React from 'react';
import './App.css';

import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduсer";
import {StateReduxType} from "./redux/redux-store";
import {Preloader} from "./components/preloader/Preloader";


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
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                        <Route path="/profile/:userId?"
                               render={() =>
                                   <ProfileContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                        <Route path="/users" render={() =>
                            <UsersContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                        <Route path="/login" render={() =>
                            <Login/>} /*пробрасываем диспатч вмеесто функцый*//>
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
