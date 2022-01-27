import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = 'https://cryptovision-api.herokuapp.com/';
//axios.defaults.baseURL = 'http://localhost:3050/';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);