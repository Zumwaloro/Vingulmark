import React from 'react';
import {Link} from 'react-router-dom';

function LinkIcon ({icon, link, idRef}) {
    if (link !== undefined) {
      return(
        <a href={link} target="_blank"><i class={icon} id={idRef}></i></a>
      );
    } else {
      return(
        <Link to="/">
          <i class={icon} id={idRef}></i>
        </Link>
      );    
    }
  }

  export default LinkIcon;