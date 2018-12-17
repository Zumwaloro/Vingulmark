import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Calendar from './components/pages/Calendar';
import Contact from './components/pages/Contact';
import Join from './components/pages/Join';
import Links from './components/pages/Links';
import Media from './components/pages/Media';
import Training from './components/pages/Training';

import './style/index.css';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
             <Route exact path="/" component={Home}></Route>
             <Route path="/about" component={AboutUs}></Route>
             <Route path="/calendar" component={Calendar}></Route>
             <Route path="/contact" component={Contact}></Route>
             <Route path="/join" component={Join}></Route>
             <Route path="/links" component={Links}></Route>
             <Route path="/media" component={Media}></Route>
             <Route path="/training" component={Training}></Route>
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
