import React from 'react';

function Image({numberText, imgSource, caption}) {
    return(
        <div class="mySlides fade">
            <div class="numbertext">{numberText}</div>
             <img src={imgSource} styles="width:50%"></img>
            <div class="text">{caption}</div>
        </div>   
    );
}

export default Image;