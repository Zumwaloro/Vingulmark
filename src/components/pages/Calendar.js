import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerCalendar from '../../img/headers/header-calendar.png';

import '../../style/Calendar.css';

class Calendar extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerCalendar} headId="calendar-header" />
          <NavigationBar />
          <div id="timeline">
            2018:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Vinter treningshelg, Halden: 9 - 11. februar<br/>
            Vingulmarks nybegynnerkurs, vinter: 14. februar - 21. mars<br/>
            Landa treninghelg, Rogaland: 16 - 18. mars<br/>
            Vestgøta treningshelg, Sverige (Vestra Gøtaland): 6 - 8. april<br/>
            Skausau treningshelg, Høland: 20 - 22. april<br/>
            Oslo middelalderfestival: 25 - 27. mai<br/>
            Hamar middelalderfestival: 8 - 10. juni<br/>
            Borrekaupangen, Horten: 6 - 8. juli<br/>
            Trelleborg, Danmark (Sjælland): 14 - 22. juli<br/>
            Moesgaard, Danmark (Aarhus): 23 - 29. juli<br/>
            Wargame, Sverige (Bohuslen) – august/september?<br/>
          </div>
          <br/>
          <div id="timeline">
            2016:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Medlemsmøte: 16. februar<br/>
            Vikverirs Winter 2016: 26 - 28. februar<br/>
            Vestgötas treningshelg: 18 - 20. mars<br/>
            Rygenes Landa: 18 – 20. mars<br/>
            Vingulmarks nybegynnerkurs: 3. april – 4. mai<br/>
            Skausau 5-årsjubileum: 6 - 8. mai<br/>
            Oslo Middelalderfestival: 27 - 29. mai<br/>
            Hamar Middelalderfestival: 10 - 12. juni<br/>
            Borre vikingmarked: 1 - 3. juli<br/>
            Trelleborg vikingtræf: 15 - 24. juli<br/>
            Moesgaard vikingtræf: 25 - 31. juli<br/>
            Romertid på Veien: 6 - 8. august<br/>
            Midgardsblot: 18 - 21. august<br/>
            Wargame: 26 - 28. august<br/>
            Gjallarstadir vikingmarkedt: 3 - 4. september<br/>
            Kvennin: 15 - 18. september<br/>
            Vingulmarks 10-års jublieum: 30. september – 2. oktober<br/>
          </div>
          <br/>
          <div id="timeline">
            2015:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Vikverirs Vinter treningshelg: 13 - 15. februar<br/>
            Landa treningshelg: 20. mars<br/>
            Vårens nybegynnerkurs: 12. arpril<br/>
            Västgöta Hirds Storträning: 18 - 19. april<br/>
            Ale Vikingmarked: 1 - 3. mai<br/>
            Skausauenes treningshelg: 8-10. mai<br/>
            Halsingarna Training Weeken: 14. mai<br/>
            Oslo Middelalderfestival, 29 - 31. mai<br/>
            Midgard Vikingfestival 2015: 4-5. juni<br/>
            Slaget om Trelleborgen: 3-5. juli<br/>
            Moesgaard Fighting Week: 20-26.juli <br/>
            Wargames: august<br/>
            Kvennin: september<br/>
          </div>
          <br/>
          <div id="timeline">
            2014:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Vinter treningshelg: 14 - 16. februar<br/>
            Landa treningshelg: 28 - 30. mars<br/>
            Västgöta hird treningshelg: 4 - 6. april<br/>
            The Battle of Clontarf, Dublin: 16 - 21. april<br/>
            Ale vikingmarked: 3 - 4. mai<br/>
            Oslo middelalderfestival: 23 - 25. mai<br/>
            Slaget om Hisingen, Sverige: 6 - 8. juni<br/>
            Hamar middelalderfestival: 13 - 15. juni<br/>
            How to be epic? Vingulmark’s episke treningshelg i Høland’s mørke skoger: 20 - 22. juni<br/>
            Borre vikingmarked: 4 - 6. juli<br/>
            Trelleborg/Sverige: samme helg<br/>
            Moesgård Vikingtreff, Danmark: 21 - 27. juli<br/>
            Ranernes Wargames, Sverige: august<br/>
            Kvennin treningshelg: 18 - 21. september<br/>
          </div>
          <br/>
          <div id="timeline">
            2013:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Kvennin: 26 - 29 september<br/>
            Slaget om Hisingen: 13 - 14. september<br/>
            Wargamet.: 31. august - 1. september<br/>
            Slaget på Borre: 5 - 7. juli<br/>
            Egge Vikingmarked: 12 - 14. juli<br/>
            Oslo Middelalderfestival: 14 - 16. juni<br/>
            Vingulmark Treningshelg: 1 - 2. juni<br/>
            Ale Vikingmarked: 3 - 5. mai<br/>
            Västgöta hird treningshelg: 23 - 24 mars<br/>
            Landa Treningshelg: 15 - 17. mars<br/>
            Ask Treningshelg: 1 - 3. mars<br/>
            Vinter treningshelg: 18 - 20. januar<br/>
          </div>
          <br/>
          <div id="timeline">
            2012:<br/><br/>
            <div id="underscore" ></div>
            <br/>
            Kvennin treningshelg: 28 - 30. september<br/>
            Slaget om Hisingen, Sverige: 7 - 9. september<br/>
            Ranernes Wargames, Sverige: 24 - 26. august<br/>
            Moesgård Vikingtreff, Danmark: 23 - 29. juli<br/>
            Borre Vikingmarknad: 3 - 8. juli<br/>
            Oslo Middelalderfestival: 13 - 15. juni<br/>
            Hamar Middelalterfestival: 7 - 9. juni<br/>
            Skausauens treningshelg: 26 - 27. mai<br/>
            Västgöta hird treningshelg: 13 - 15. april<br/>
          </div>
          <br/>
        </div>
      );
    }
  }
  
  export default Calendar;