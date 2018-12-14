import Button from './Button.js';
import React from 'react';

function NavigationBar() {
    return(
      <div id="navigationbar">
        <br/><br/>
        <Button label={"Om oss"}/>
        <br/><br/>
        <Button label={"Nybegynnertrening"}/>
        <br/><br/>
        <Button label={"Bilder og Media"}/>
        <br/><br/>
        <Button label={"Trening"}/>
        <br/><br/>
        <Button label={"Kalender"}/>
        <br/><br/>
        <Button label={"Lenker"}/>
        <br/><br/>
        <Button label={"Kontakt"}/>
      </div>
    );
  }

  export default NavigationBar;