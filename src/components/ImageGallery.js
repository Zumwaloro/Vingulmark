import React from 'react';
import Image from './Image.js';

import '../style/ImageGallery.css';

import test1 from '../img/stock/test1.jpg';
import test2 from '../img/stock/test2.jpg';

function ImageGallery() {
    return(
        <div>

            <div class="slideshow-container">

                <Image numberText="1/2" imgSource={test1} caption="Works!"/>
                <Image numberText="2/2" imgSource={test2} caption="Works 2!"/>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

                <div styles="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span> 
                    <span class="dot" onclick="currentSlide(2)"></span> 
                </div>
            </div>

            <br/>


            <script src="ImageGalleryFunctionality.js"></script>

        </div>
    );
}

export default ImageGallery;