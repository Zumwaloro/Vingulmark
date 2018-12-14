import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AboutUs />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
