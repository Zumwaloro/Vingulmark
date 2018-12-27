import React from 'react';

function EmbeddedVideo({link, title, divId, videoId}) {
    return(
        <div id={divId}>
            <p id="video-title">{title}</p>
            <iframe width="560" height="315" src={link} frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
        </div>
    );
}

export default EmbeddedVideo;