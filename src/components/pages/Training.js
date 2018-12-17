import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerTraining from '../../img/headers/header-training.png';

import '../../style/Training.css';

class Training extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerTraining} headId="training-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Training;