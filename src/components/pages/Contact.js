import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';
import ImgHolder from '../ImgHolder';
import TopButton from '../TopButton';

import headerContact from '../../img/headers/header-contact.png';
import contactImg from '../../img/stock/contact.jpg';


import '../../style/Contact.css';

class Contact extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerContact} headId="contact-header" />
          <NavigationBar />
          <div id="contactRef">
            <p id="contText">Ta kontakt med oss på vingulmark_styret@googlegroups.com eller på <a href="https://www.facebook.com/Vingulmarkhaerkampgruppe/" target="_blank" id="fbRef">Facebook!</a></p>
          </div>
          <ImgHolder img={contactImg} imgId={"contImg"} frame={"contFrame"} />
          <TopButton icon="fas fa-chevron-up" idRef="topButton"/>   
        </div>
      );
    }
  }
  
  export default Contact;