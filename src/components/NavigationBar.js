import Button from './Button.js';
import React from 'react';

function NavigationBar() {
    return(
      <div id="navigationbar">
        <br/><br/>
        <Button label={"Om oss"} path="/about"/>
        <br/><br/>
        <Button label={"Bli medlem"} path="/join"/>
        <br/><br/>
        <Button label={"Bilder og media"} path="/media"/>
        <br/><br/>
        <Button label={"Trening"} path="/training"/>
        <br/><br/>
        <Button label={"Kalender"} path="/calendar"/>
        <br/><br/>
        <Button label={"Lenker"} path="/links"/>
        <br/><br/>
        <Button label={"Kontakt"} path="/contact"/>
      </div>
    );
  }

  export default NavigationBar;