import React from 'react';

function Map({source, id}) {
    return(
        <div id={id}>
            <iframe src={source}
                width="600" height="450" frameborder="0" styles="border:0" allowfullscreen>
            </iframe>
        </div>
    );
}

export default Map;