import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
        <HashRouter>
            <Provider store={store}>{/*позволяет стор  засунуть в контектс*/}
                <App/>
            </Provider>
        </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
