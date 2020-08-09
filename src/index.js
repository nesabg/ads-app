import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';
import AdContextProvider from './contexts/AdContext';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <AdContextProvider history={history}>
          <App /> 
        </AdContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA