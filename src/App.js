import React, { Component } from 'react';
import './App.css';
import headerIndex from './img/headers/header-index.png';
import homeWelcome from './img/stock/home.jpg';

function Header({headRef, headId}) {
  return(
    <div>
      <header id="home">
         <img src={headRef} id={headId}></img>
      </header>
      <LinkIcon icon="fab fa-facebook-square" link="https://www.facebook.com/Vingulmarkhaerkampgruppe/" idRef="face-icon" />
    </div>
  );
}

function Button({label}) {
  return(
    <button id="navButton" type="button">{label}</button>
  );
}

function NavigationBar() {
  return(
    <div id="navigationbar">
      <br/><br/>
      <Button label={"Om Vingulmark"}/>
      <br/><br/>
      <Button label={"Trening"}/>
      <br/><br/>
      <Button label={"Bilder og Media"}/>
      <br/><br/>
      <Button label={"Nybegynnertreninger"}/>
      <br/><br/>
      <Button label={"Kalender"}/>
      <br/><br/>
      <Button label={"Lenker"}/>
      <br/><br/>
      <Button label={"Kontaktinformasjon"}/>
    </div>
  );
}

function ImgHolder ({img, imgId, frame}) {
  return(
    <div id={frame}>
      <img src={img} id={imgId} alt="test"></img>
    </div>
  );
}

function LinkIcon ({icon, link, idRef}) {
  return(
    <a href={link} id={idRef} target="_blank"><i class={icon}></i></a>
  );
}

class App extends Component {
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

export default App;
