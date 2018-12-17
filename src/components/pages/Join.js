import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerJoin from '../../img/headers/header-join.png';

class Join extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerJoin} headId="join-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Join;