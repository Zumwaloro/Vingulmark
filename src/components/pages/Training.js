import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';
import TextElement from '../TextElement';
import ImgHolder from '../ImgHolder';
import Map from '../Map';
import TopButton from '../TopButton';

import headerTraining from '../../img/headers/header-training.png';
import traning1 from '../../img/stock/traning-1.jpg'
import traning2 from '../../img/stock/traning-2.jpg'

import '../../style/Training.css';

const input1 = "Trening i Vingulmark:\n" +
            "Vingulmark har siden 2014 tatt ansvaret for å arrangere hærkamptreningene i Oslo. Det er ikke nødvendig å være"+
            " medlem av Vingulmark for å kunne trene i Oslo. Alle som har gjennomført godkjent sikkerhets/nybegynnerkurs hos oss"+
            " eller andre relevante hærkampgrupper er velkomne til å trene med oss.\n\n"+

            "Treningstider:\n"+
            "-Onsdager fra kl. 18.00-20:30, om sommeren, på Prins Carls bastion på Akershus Festning. Om vinteren leier vi aulaen"+
            " på Ulsrud vgs, 18:00-20:00.\n"+
            "-Søndager fra kl. 12.00 vinterstid og fra kl. 13.00 sommerstid. I skogen på Brannfjellåsen 1. og 3. søndag i månenden."+
            " 2. og 4. søndag i måneden er vi på Prins Carls bastion på Akershus Festning.\n\n"+
            
            "Vi trener på et åpent område med mye plass, så det er bare å komme innom om du ønsker å ta en titt. Har man eventuelt"+
            " spørsmål som man ønsker å stille ser vi helst at dette skjer i en av pausene slik at det ikke forstyrrer treningen.";

const input2 = "Reglene i hærkamp:\n" +
            "Hærkamp er en semi-kontakt-kampsport der man kjemper med blunte blankvåpen i et regelsystem som legger stor vekt på"+
            " sikkerhet for deltagerne. Utover noen variasjoner er disse reglene like som hos andre blankvåpengrupper i Skandinavia"+
            " og omeng.\n\n" +

            "Treff og treffområder:\n"+
            
            "-Man er ute av kampen når man har fått ett treff innen det gyldige treffområdet for våpenet.\n"+
            
            "-Alle våpen har treffområde i kropp, lår og overarmer.\n"+
            
            "-Med unntak av spyd er alle treff med metall gyldig. For spyd er det bare treff med tuppen som gjelder, kutt eller slag"+
            " med spyd telles ikke.\n"+
            
            "-Prosjektiler har treffområde fra armhuler og ned til rett over kneskålen, alle treff over armhule telles som Headshot."+
            " Buer skal ikke være sterkere enn 30 pund og pilene skal ha godkjente gummitupper.\n"+
            
            "-Et treff skal være hardt nok til at motstanderen kjenner det, men ikke hardere.\n"+
            
           " -Headshot: Treff i hodet eller hals er på grunn av sikkerhetshensyn ikke lov og vedkommende som gjør et treff i det"+
           " området blir øyeblikkelig diskvalifisert og er ute av striden. Blir man truffet av headshot skal man si “headshot”"+
           " klart og tydelig slik at den ansvarlige får dette med seg i kampens hete.\n\n"+          
             
            
            "Våpen:\n"+
            
            "-Våpnene som benyttes skal være laget for å tåle fullkontakt og skal ikke ha smalere egg enn 3mm eller tynnere spiss"+
            " enn en ti-kroning.\n\n"+            
            
             
            
            "Verneutstyr:\n"+
            
            "-Hansker er påbudt ved all kamp.\n"+
            
            "-Det anbefales på det sterkeste å bruke tannbeskytter og suspensorium.\n"+
            
            "-Beskyttelse for kne, albue, legg og rygg kan også være godt å ha.\n\n"+            
             
            
            "Generelle oppfordringer:\n" +
            
            "– Vis ekstra stor forsiktighet ved bruk av prosjektilvåpen da man ikke har kontroll på de etter at de er sendt av"+
            " gårde.\n"+
            
           " – Hugg aldri over ryggraden, slå heller rumpa om du angriper bakfra.\n"+
            
           " – Ta heller en treff for mye enn en treff for lite. Fair play er grunnleggende i denne sporten.\n"+
            
            "– Si gjerne ifra om du blir truffet utenfor treffområdet – Ingen er tjent med misforståelser.\n"+
            
            "– Vent med å diskutere uenigheter til etter kampen. (Dette gjelder spesielt diskusjoner om headshot.)\n"+
            
            "– Vis respekt for alle på kampplassen.\n"+
            
            "– Du er alltid ansvarlig for din motstanders og din egen sikkerhet.\n"+
            
           " – Hånden som holder våpenet bærer alltid den moralske skylden hvis skade oppstår.\n"+
            
            "– Husk at vi gjør dette for å ha det gøy!";

class Training extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerTraining} headId="training-header" />
          <NavigationBar />
          <ImgHolder img={traning1} imgId="trainingImg" frame="imgFrame"/>
          <TextElement text={input1} id="text-input" />
          <Map source="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d364.72068897850045!2d10.737403921084722!3d59.905812990201966!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2shu!4v1545690446117" id="map1"/>
          <Map source="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1113.8629562300955!2d10.850456090166903!3d59.88538011753315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2shu!4v1545693553459" id="map1" />
          <Map source="https://kart.gulesider.no/m/hlOwm?embed=true&center=59.89387758971056,10.788606405258179&zoom=16&layer=aerial" id="map1" />
          <ImgHolder img={traning2} imgId="trainingImg2" frame="imgFrame2"/>
          <TextElement text={input2} id="text-input2" />
          <TopButton icon="fas fa-chevron-up" idRef="topButton"/>
          <br/>
        </div>
      );
    }
  }
  
  export default Training;