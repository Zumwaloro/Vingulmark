import React from 'react';
import LinkIcon from './LinkIcon.js';


function Header({headRef, headId}) {
    return(
        <header id="home">
          <img src={headRef} id={headId}></img> 
          <LinkIcon icon="fab fa-facebook-square" link="https://www.facebook.com/Vingulmarkhaerkampgruppe/" idRef="face-icon" />
          <LinkIcon icon="fas fa-home" link="" idRef="home-icon" />
        </header>
    
    );
  }

  export default Header;