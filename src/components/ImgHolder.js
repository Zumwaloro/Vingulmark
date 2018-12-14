import React from 'react';

function ImgHolder ({img, imgId, frame}) {
    return(
      <div id={frame}>
        <img src={img} id={imgId}></img>
      </div>
    );
  }

  export default ImgHolder;