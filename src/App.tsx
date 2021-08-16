import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


type  AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

function App (props: AppPropsType) {
    return (

        <div className="App">  {/*комментарий*/}
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={"profile"}>

                <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                />}/>
                <Route path="/profile"
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>
        </div>

    );
}

export default App;
