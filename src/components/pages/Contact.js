import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerContact from '../../img/headers/header-contact.png';

class Contact extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerContact} headId="contact-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Contact;