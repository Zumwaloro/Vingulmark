import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerLinks from '../../img/headers/header-links.png';

import '../../style/Links.css';

class Links extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerLinks} headId="links-header" />
          <NavigationBar />
          <div id="butikker">
            Butikker:<br/><br/>
            Sverd: <a href="http://miecze.pl/" id="link-text" target="_blank">http://miecze.pl/</a><br/>
            Stoff: <a href="http://www.naturtuche.de" id="link-text" target="_blank">http://www.naturtuche.de</a><br/>
            Skinn: <a href="http://www.skinnlaaven.no" id="link-text" target="_blank">http://www.skinnlaaven.no</a><br/>
            Stoff: <a href="http://handelsgillet.se/shop/ " id="link-text" target="_blank">http://handelsgillet.se/shop/</a><br/>
            Stoff, litt av alt: <a href="http://korps.se" id="link-text" target="_blank">http://korps.se</a><br/>
            Stoff: <a href="http://www.tekstil.no/ " id="link-text" target="_blank">http://www.tekstil.no/ </a><br/>
            Litt av alt: <a href="http://www.battlemerchant.com/" id="link-text" target="_blank">http://www.battlemerchant.com/</a><br/>
            Litt av alt, ligner Battlemarchant: <a href="http://vehi-mercatus.de/" id="link-text" target="_blank">http://vehi-mercatus.de/</a><br/>
            Sko: <a href="http://www.plantagenetshoes.co.uk/" id="link-text" target="_blank">http://www.plantagenetshoes.co.uk/ </a><br/>
            Stoff: <a href="http://www.medeltidsmode.se/ " id="link-text" target="_blank">http://www.medeltidsmode.se/ </a><br/>
            Diverse produkter fra Eikthyrnir: <a href="http://www.eikthyrnir.no/" id="link-text" target="_blank">http://www.eikthyrnir.no/</a><br/>
            Garn, Århus: <a href="http://www.garnlageret-aarhus.dk/" id="link-text" target="_blank">http://www.garnlageret-aarhus.dk/</a><br/>
            Lær, Århus: <a href="http://www.laederiet.dk" id="link-text" target="_blank">http://www.laederiet.dk</a><br/>
            Vikingsmykker etter fund: <a href="http://www.etsy.com/shop/etnoehe" id="link-text" target="_blank">http://www.etsy.com/shop/etnoehe</a><br/>
          </div>
          
          <div id="butikker">
            Andre nyttige lenker:<br/><br/>
            Virtual museum of the Strong collection: <a href="http://talbotsfineaccessories.com/" id="link-text" target="_blank">http://talbotsfineaccessories.com/</a><br/>
            Nice collection of links on viking finds: <a href="http://sites.google.com/site/archoevidence" id="link-text" target="_blank">http://sites.google.com/site/archoevidence</a><br/>
            Brikkevevtutorial: <a href="http://www.theloomybin.com/cw/index.html" id="link-text" target="_blank">http://www.theloomybin.com/cw/index.html</a><br/>
            Brikkebånd fra vikingtid: <a href="http://www.olvikthing.org " id="link-text" target="_blank">http://www.olvikthing.org</a><br/>
            Kine sin fargebblogg: <a href="http://www.densortegryte.tumblr.com" id="link-text" target="_blank">http://www.densortegryte.tumblr.com</a><br/>
            The history and development of shoes: <a href="http://www.personal.utulsa.edu/~marc-carlson/shoe/ " id="link-text" target="_blank">http://www.personal.utulsa.edu/~marc-carlson/shoe/ </a><br/>
            Recreating Viking Clothing: <a href="http://urd.priv.no/viking/" id="link-text" target="_blank">http://urd.priv.no/viking/</a><br/>
            
          </div>

          <div id="butikker">
            Venner:<br/><br/>
            Forening for blankvåpenkamp og reenactment i Drammen og Kongsberg: <a href="http://www.vikverir.no" id="link-text" target="_blank">http://www.vikverir.no</a><br/>
            Forening for blankvåpenkamp og reenactment i Horten: <a href="http://www.borrefylkingen.net" id="link-text" target="_blank">http://www.borrefylkingen.net </a><br/>           
          </div>
          <br/>
        </div>
      );
    }
  }
  
  export default Links;