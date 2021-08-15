import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type  dialogsType = {
    id: number
    name: string
}

export  type  postsType = {
    id: number
    message: string
    likesCount: number
}


export  type  messagesType = {
    id: number
    message: string
}



let dialogs: Array<dialogsType> = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Misha"},
    {id: 4, name: "Petr"},
    {id: 5, name: "Alex"},
]



let posts: Array<postsType> = [
    {id: 1, message: "Hello", likesCount: 8},
    {id: 2, message: "How are you?", likesCount: 15},
    {id: 3, message: "Where are you?", likesCount: 50},
    {id: 4, message: "Fuck You", likesCount: 5},

]



let messages: Array<messagesType>  = [
    {id: 1, message: "Privet"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Lets we meet"},
    {id: 4, message: "No"},
]




ReactDOM.render (
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
