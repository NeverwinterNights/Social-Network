import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


type  AppPropsType = {
    state:  RootStateType
}

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"profile"}>

                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                                 />}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
