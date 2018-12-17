import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerMedia from '../../img/headers/header-media.png';

class Media extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerMedia} headId="media-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Media;