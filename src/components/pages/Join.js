import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';
import ImgHolder from '../ImgHolder';
import TextElement from '../TextElement';

import headerJoin from '../../img/headers/header-join.png';
import join1 from '../../img/stock/join-1.jpg';
import join2 from '../../img/stock/join-2.jpg';
import join3 from '../../img/stock/join-3.jpg';
import join4 from '../../img/stock/join-4.jpg';

import '../../style/Join.css';

const input1 = "Kunne du tenke deg å prøve “hærkamp” eller kjenner du noen som vil? Vingulmark trener med blunte historiske"+
            " vikingvåpen og holder nå to nybegynneropptak i året for de som ønsker å slåss sammen med oss; et om høsten og et"+
            " om vinteren / våren."+

              "Nybegynnere må gjennom et sikkerhetskurs som vil vare ca seks uker fra startsdato med treninger på onsdager og/eller"+
              "søndager. Etter godkjent sikkerhetskurs kan man delta på vanlige treninger. Reglene for vårt kampsystem kan du lese"+
              " mer om under Trening.\n\n" +

              "Praktisk:\n"+

              "Kurset varer 6 uker, koster 100 kr og har 16 års aldersgrense.\n"+
              "For å bli med må man delta på en av oppstartsbolkene, enten:\n"+
              "Onsdagen 29. august kl 18:00-20:00 er på Akershus festning\n"+
              "eller\n"+
              "Søndagen 2. september kl 13:00-16:00, også på Akershus festning\n"+

              "Kurset er delt opp i 6 tematiske bolker som går én onsdag og én søndag hver uke. Man må få med seg minst én\n"+
              " treningsdag per bolk.\n"+
              "Onsdager: 18:00-20:00 er på Akershus festning\n"+
              "Søndager: 13:00-15:00 på Akershus festning samme sted\n"+
              "eller i skogen på Brannfjellåsen.\n\n"+

              "1. BOLK\n"+ 
              "Introduksjon av hærkamp og basic våpenføring.\n"+
              "2. BOLK:\n"+
              "Teknikker og frikamp.\n"+
              "3. BOLK:\n"+
              "Introduksjon av skjold.\n"+
              "4. BOLK:\n"+
              "Gruppestrid.\n"+
              "5. BOLK:\n"+
              "Introduksjon av pålevåpen.\n"+
              "6. BOLK:\n"+
              "Eventuell repetisjon\n\n"+

              "Ta med:\n"+
              "-Hansker som gir beskyttelse mot slag (bandyhansker er topp)\n"+
              "-Enkel tannbeskytter (fåes for ca 30kr hos feks Fighter Sport)\n"+
              "-Drikkeflaske og litt mat etter behov\n"+
              "-Uteklær etter været (vi trener utendørs)\n"+
              "-100kr for påmeldingsavgift (eller Vipps).\n"+

              "Vi ordner utlån av utstyr til de som trenger det (blunte våpen og skjold) , men hvis man har eget kan det være"+
              " fint om man tar dette med. Eventuelt medbrakt skal selvsagt sjekkes og godkjennes av trenere før bruk.\n\n"+

              "Vel møtt!";

class Join extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerJoin} headId="join-header" />
          <NavigationBar />
          <ImgHolder img={join1} imgId="joinImg" frame="imgFrame"/>
          <TextElement text={input1} id="text-input" />
          <ImgHolder img={join1} imgId="joinImg" frame="imgFrame"/>
          <br/>
        </div>
      );
    }
  }
  
  export default Join;