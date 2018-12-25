import React from 'react';

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("topButton").style.display = "block";
    } else {
      document.getElementById("topButton").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 


function TopButton({icon, idRef}) {
    return(
        <i class={icon} id={idRef} onClick={topFunction}></i> 
    );
}

export default TopButton;
