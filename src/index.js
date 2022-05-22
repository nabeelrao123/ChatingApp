import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chat from './components/Chat';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Switch>
      <Route path="/signup"> <Signup /></Route>
      <Route path="/users"><Signin /></Route>
      <Route path="/chat"><Chat /></Route>
    </Switch>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
