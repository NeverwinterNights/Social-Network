import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
// import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Navbar} from './components/Navbar/Navbar';
// import {storeReduxType} from "./redux/redux-store";


type  AppPropsType = {
    //state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsType) => void
    // //  store: StoreType
    // store: StateReduxType

}

function App(props: AppPropsType) {


    return (

        <div className="App">
            <Header/>
            {/*<Navbar state={props.store.sidebar}/>*/}
            <Navbar/>
            <div className={"profile"}>

                <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.getState().dialogsPage}/>}/>*/}
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                <Route path="/profile"
                       render={() => <Profile/>} /*пробрасываем диспатч вмеесто функцый*//>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>
        </div>

    );
}

export default App;
