import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';
import TextElement from '../TextElement';
import ImgHolder from '../ImgHolder';

import headerAbout from '../../img/headers/header-about.png';
import about1 from '../../img/stock/about-1.png';
import about2 from '../../img/stock/about-2.jpg';
import about3 from '../../img/stock/about-3.jpg';
import about4 from '../../img/stock/about-4.png';

import '../../style/About.css';

const input1 =
    "Vingulmark ble stiftet i 2006 med formålet om å fremme kampsporten “hærkamp”, med fokus på vikingtid, i Oslo-området. "+
    "Målet er at Vingulmark skal kunne tilby sine  medlemmer jevnlige treninger, felles historisk leirutstyr, reiser til vikingmarkeder"+
    " i inn-, og utland, samt et godt sosialt miljø. Vingulmark er også medlem av Nord-alliansen som er et samarbeid mellom de"+
    " største vikingkampgruppene i Norge. Nord har som mål å øke deltagelsen av nordmenn på treningstreff utenfor Norge, da"+
    " særlig på Moesgård i Danmark, som er det desidert største av sitt slag i Europa."+
    " I 2009 ble Vingulmark slått sammen med den Oslo-baserte vikingkampgruppen Vandræðafélagit og har etter dette fått en ny"+
    " økning av aktivitet på treninger, rekruttering av nye medlemmer, kampshow og andre prosjekter. Vingulmark er nå den største"+
    " vikingkampgruppen i Oslo og omegn med over tjue stridende medlemmer.";

const input2 =
    "Vingulmarks skjoldmotiv er inspirert av et mønster fra reversen på en mynt utgitt av Harald Hardråde en gang i hans"+
    " regjeringstid (1047-1066). Fargene er valgt med utgangspunkt i paletten fra en revle fra en kriger-grav i Rolvsøy,"+
    " Fredrikstad kommune. Denne graven er lokalisert like ved Tunefunnet og ligger sentralt i det gamle Vingulmark.";

const input3 =
    "Vi vurderte lenge om vi skulle ha en slags maskot for Vingulmark som vi kunne bruke til å pryde banneret og annet utstyr."+
    " Det var imidlertid først under treningshelgen som Vingulmark arrangerte for sitt 5-års jubileum at ideen begynte å få luft"+
    " under vingene. Det første som møtte oss da vi ankom treningslokalene var en hærfugl som fortsatte og sirkle rundt"+
    " kampplassen i en drøy time før den fløy videre. Hærfuglen hekker opprinnelig i Sør-Europa og Midt-Østen og er svært sjeldent"+
    " sett her til lands. Ifølge “gammel norsk overtro” og andre regionale myter skal ankomsten av en hærfugl være et forvarsel på"+
    " krig og død – derav det norske navnet.\n\n"+
    "Med bakgrunn i hærfuglens tilstedeværelse på vårt jubileum og fuglens episke navn og mytologi, fant vi fort ut at dette var"+
    " maskoten vi var ute etter. Det er derfor hærfuglen som pryder vårt banner når Vingulmark drar ut i strid.";

class AboutUs extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerAbout} headId="about-header" />
          <NavigationBar />
          <div id="textDiv">
            <ImgHolder img={about1} imgId="about1" frame="frame1"/>
            <TextElement text={input1} id="text" />
            <ImgHolder img={about2} imgId="about2" frame="frame2"/>
            <TextElement text={input2} id="text" />
            <ImgHolder img={about3} imgId="about2" frame="frame2"/>
            <TextElement text={input3} id="text" />
            <ImgHolder img={about4} imgId="about2" frame="frame3"/>
            <br/>
          </div>
        </div>
      );
    }
  }
  
  export default AboutUs;