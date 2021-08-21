import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
// import {Dialogs} from "./components/Dialogs/Dialogs";
import {Redirect, Route} from 'react-router-dom';
import  {ActionsType} from "./redux/store";
import { storeReduxType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
// import {storeReduxType} from "./redux/redux-store";


type  AppPropsType = {
    //state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
    //  store: StoreType
    store: storeReduxType

}

function App (props: AppPropsType) {

    console.log (props.store)


    return (

        <div className="App">
            <Header/>
            <Navbar state={props.store.getState().sidebar}/>
            {/*<Navbar state={props.store.sidebar}/>*/}
            <div className={"profile"}>

                <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.getState().dialogsPage}/>}/>*/}
                <Route path="/dialogs" render={() => <DialogsContainer   store={props.store}/>}/>
                {/*<Route path="/dialogs" render={() => <Dialogs  dispatch={props.dispatch} state={props.store.dialogsPage}*/}
                <Route path="/profile"
                       render={() => <Profile />} /*пробрасываем диспатч вмеесто функцый*//>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>
        </div>

    );
}

export default App;
