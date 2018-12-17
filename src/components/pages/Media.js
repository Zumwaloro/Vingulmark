import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerMedia from '../../img/headers/header-media.png';

import '../../style/Media.css';
import EmbeddedVideo from '../EmbeddedVideo';

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
          <EmbeddedVideo link={url1} title="Under Vingulmarks skausautreninghelg i 2013 filmet med headcam" idRef="video"/>
          <EmbeddedVideo link={url2} title="Vingulmarkere med venner på Ranernas Wargame:" idRef="video"/>
          <EmbeddedVideo link={url3} title="Vingulmark på Vikverirs treningshelg \“Vinter\”" idRef="video"/>
          <EmbeddedVideo link={url4} title="Noen vingulmarkere besøkte Alenfit i Bergen" idRef="video"/>
          <EmbeddedVideo link={url5} title="Et medlem og student lagde en promofilm fra en trening" idRef="video"/>
          <EmbeddedVideo link={url6} title="Noen studenter kom innom trening og lagde et kort videoclip" idRef="video"/>
        </div>
      );
    }
  }
  
  export default Media;