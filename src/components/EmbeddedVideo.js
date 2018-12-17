import React from 'react';

function EmbeddedVideo({link, idRef}) {
    return(
        <div id={idRef}>
            <iframe width="560" height="315" src={link} frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
        </div>
    );
}

export default EmbeddedVideo;