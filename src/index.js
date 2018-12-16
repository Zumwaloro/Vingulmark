import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/about" component={AboutUs}></Route>
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
