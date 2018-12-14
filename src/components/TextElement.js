import React from 'react';

function TextElement({text, id}) {
    return(
        <div id={id}>
            <p>
                {text}
            </p>
        </div>
    );
}

export default TextElement;