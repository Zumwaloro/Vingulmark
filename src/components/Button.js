import React from 'react';
import {Link} from 'react-router-dom';

function Button({label, path}) {
    return(
      <Link to={path}>
        <button id="navButton" type="button">{label}</button>
      </Link>
    );
 }

 export default Button;