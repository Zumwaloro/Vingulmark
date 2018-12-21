import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';
import EmbeddedVideo from '../EmbeddedVideo';
import ImgHolder from '../ImgHolder';

import headerMedia from '../../img/headers/header-media.png';
import media1 from '../../img/stock/media-1.jpg'
import media2 from '../../img/stock/media-2.jpg'
import media3 from '../../img/stock/media-3.jpg'
import media4 from '../../img/stock/media-4.jpg'
import media5 from '../../img/stock/media-5.jpg'
import media6 from '../../img/stock/media-6.jpg'

import '../../style/Media.css';

const url1 = "https://www.youtube.com/embed/XYkoChD3VNU";
const url2 = "https://www.youtube.com/embed/RsXXKckXjIk";
const url3 = "https://www.youtube.com/embed/PW72Sem9kH0";
const url4 = "https://www.youtube.com/embed/0zMM-1e4hWQ";
const url5 = "https://www.youtube.com/embed/cwujHUG6YCc";
const url6 = "https://www.youtube.com/embed/1W9HEzBmvM0";

class Media extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerMedia} headId="media-header" />
          <NavigationBar />
          <EmbeddedVideo link={url1} title="Under Vingulmarks skausautreninghelg i 2013 filmet med headcam" divId="video-frame"/>
          <EmbeddedVideo link={url2} title="Vingulmarkere med venner på Ranernas Wargame" divId="video-frame"/>
          <EmbeddedVideo link={url3} title="Vingulmark på Vikverirs treningshelg “Vinter”" divId="video-frame"/>
          <EmbeddedVideo link={url4} title="Noen vingulmarkere besøkte Alenfit i Bergen" divId="video-frame"/>
          <EmbeddedVideo link={url5} title="Et medlem og student lagde en promofilm fra en trening" divId="video-frame"/>
          <EmbeddedVideo link={url6} title="Noen studenter kom innom trening og lagde et kort videoclip" divId="video-frame"/>
          <ImgHolder img={media1} imgId="img" frame="imgFrame" />
          <ImgHolder img={media2} imgId="img" frame="imgFrame" />
          <ImgHolder img={media3} imgId="img" frame="imgFrame" />
          <ImgHolder img={media4} imgId="img" frame="imgFrame" />
          <ImgHolder img={media5} imgId="img" frame="imgFrame" />
          <ImgHolder img={media6} imgId="img" frame="imgFrame" />    
        </div>
      );
    }
  }
  
  export default Media;