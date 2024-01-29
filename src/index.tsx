import './index.css';
import {data} from './data/data'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

ReactDOM.render(
    <BrowserRouter>
        <App data={data}/>
    </BrowserRouter>,
    document.getElementById('root')
);
