import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {dialogsType, messagesType, postsType} from "./index";


type  AppPropsType = {
    dialogs: Array<dialogsType>
    posts: Array<postsType>
    messages: Array<messagesType>
}

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"profile"}>
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
