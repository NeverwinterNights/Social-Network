import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateReduxType, store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";


let RerenderEntireTree = (state: StateReduxType) => {  /*Функция для перерисовки*/
    ReactDOM.render (
        <React.StrictMode>
            <BrowserRouter>
                {/*<Provider store=store from redux-store>*/}
                <App store={store} dispatch={store.dispatch.bind(store)}/*бинд позволяет связать прокидываемый
                колбек с владельцем сторем*/ /*прокидываем диспатч вместо функций*/
                />
                {/*</Provider>*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById ('root')
    );
}
RerenderEntireTree (store.getState ())/*Функция для перерисовки, вызывается для первой отрисовки*/

store.subscribe ( ()=> {
    let state = store.getState ()
    RerenderEntireTree(state)
})/* функция которая закидывает ререндер в стейт файл*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
