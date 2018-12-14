import React from 'react';

function LinkIcon ({icon, link, idRef}) {
    return(
      <a href={link} target="_blank"><i class={icon} id={idRef}></i></a>
    );
  }

  export default LinkIcon;