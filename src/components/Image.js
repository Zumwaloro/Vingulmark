import React from 'react';

function Image({numberText, imgSource, caption}) {
    return(
        <div class="mySlides fade">
            <div class="numbertext">{numberText}</div>
                <img src={imgSource} style="width:100%"/>
            <div class="text">{caption}</div>
        </div> 
    );
}

export default Image;