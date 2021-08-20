import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import  {ActionsType, RootStateType} from "./redux/state";


type  AppPropsType = {
    state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
    //  store: StoreType

}

function App (props: AppPropsType) {


    return (

        <div className="App">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={"profile"}>

                <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                <Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.state.dialogsPage}
                />}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>} /*пробрасываем диспатч вмеесто функцый*//>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>
        </div>

    );
}

export default App;
