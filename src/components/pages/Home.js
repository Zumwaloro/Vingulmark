
//External components
import React, { Component } from 'react';
import Header from '../Header.js';
import NavigationBar from '../NavigationBar.js';
import ImgHolder from '../ImgHolder.js';
//Styling
import '../../style/Home.css';
//Images
import headerIndex from '../../img/headers/header-index.png';
import homeWelcome from '../../img/stock/home.jpg';


class Home extends Component {
  render() {
    return (
      <div>
        <Header headRef={headerIndex} headId="index-header" />
        <NavigationBar />
        <ImgHolder img={homeWelcome} imgId="welcomeImg" frame="welcomeFrame" />
      </div>
    );
  }
}

export default Home;
