import React from 'react';
import {Component} from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';
import TextElement from './TextElement';
import ImgHolder from './ImgHolder';

import headerAbout from '../img/headers/header-about.png';
import about1 from '../img/stock/about-1.png';

import '../style/About.css';

const input1 =
    "Vingulmark ble stiftet i 2006 med formålet om å fremme kampsporten “hærkamp”, med fokus på vikingtid, i Oslo-området. "+
    "Målet er at Vingulmark skal kunne tilby sine  medlemmer jevnlige treninger, felles historisk leirutstyr, reiser til vikingmarkeder"+
    " i inn-, og utland, samt et godt sosialt miljø. Vingulmark er også medlem av Nord-alliansen som er et samarbeid mellom de"+
    " største vikingkampgruppene i Norge. Nord har som mål å øke deltagelsen av nordmenn på treningstreff utenfor Norge, da"+
    " særlig på Moesgård i Danmark, som er det desidert største av sitt slag i Europa."+
    " I 2009 ble Vingulmark slått sammen med den Oslo-baserte vikingkampgruppen Vandræðafélagit og har etter dette fått en ny"+
    " økning av aktivitet på treninger, rekruttering av nye medlemmer, kampshow og andre prosjekter. Vingulmark er nå den største"+
    " vikingkampgruppen i Oslo og omegn med over tjue stridende medlemmer.";

class AboutUs extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerAbout} headId="about-header" />
          <NavigationBar />
          <div id="textDiv">
            <TextElement text={input1} id="text-first" />
            <ImgHolder img={about1} imgId="about1" frame="frame1"/>
            <TextElement text={input1} id="text-first" />
            <ImgHolder img={about1} imgId="about1" frame="frame1"/>
          </div>
        </div>
      );
    }
  }
  
  export default AboutUs;