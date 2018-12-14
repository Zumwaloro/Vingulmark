import React from 'react';

function ImgHolder ({img, imgId, frame}) {
    return(
      <div id={frame}>
        <img src={img} id={imgId} alt="test"></img>
      </div>
    );
  }

  export default ImgHolder;