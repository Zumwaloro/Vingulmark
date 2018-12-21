import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerLinks from '../../img/headers/header-links.png';

import '../../style/Links.css';

class Links extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerLinks} headId="links-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Links;