import React from 'react';
import './App.css';

import {Redirect, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Navbar} from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            {/*<Navbar state={props.store.sidebar}/>*/}
            <Navbar/>
            <div className={"profile"}>

                <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.getState().dialogsPage}/>}/>*/}
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                <Route  path="/profile/:userId?"
                       render={() => <ProfileContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                <Route path="/users"
                       render={() => <UsersContainer/>} /*пробрасываем диспатч вмеесто функцый*//>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
