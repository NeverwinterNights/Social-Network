import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";


let RerenderEntireTree = () => {  /*Функция для перерисовки*/
    ReactDOM.render (
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState ()} dispatch={store.dispatch.bind (store)}/*бинд позволяет связать прокидываемый
                колбек с владельцем сторем*/ /*прокидываем диспатч вместо функций*/



            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById ('root')
    );
}
RerenderEntireTree ()/*Функция для перерисовки, вызывается для первой отрисовки*/

store.subscribe (RerenderEntireTree)/* функция которая закидывает ререндер в стейт файл*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
