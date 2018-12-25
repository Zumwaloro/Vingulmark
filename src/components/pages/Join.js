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
              "Eventuell repetisjon.\n\n"+

              "Ta med:\n"+
              "-Hansker som gir beskyttelse mot slag (bandyhansker er topp)\n"+
              "-Enkel tannbeskytter (fåes for ca 30kr hos feks Fighter Sport)\n"+
              "-Drikkeflaske og litt mat etter behov\n"+
              "-Uteklær etter været (vi trener utendørs)\n"+
              "-100kr for påmeldingsavgift (eller Vipps).\n"+

              "Vi ordner utlån av utstyr til de som trenger det (blunte våpen og skjold) , men hvis man har eget kan det være"+
              " fint om man tar dette med. Eventuelt medbrakt skal selvsagt sjekkes og godkjennes av trenere før bruk.\n\n"+

              "Vel møtt!";

const input2 = "Bli medlem:\n" +

"Ønsker du å trene hærkamp, reise på markeder og treningshelger og mekke historisk utstyr sammen med Vingulmark? Her kan du sjekke"+
" kriterier vi har for rekruttering og hvor og hvordan man skal søke medlemskap.\n\n"+

"Vingulmark rekrutterer for tiden på to forskjellige nivåer, tilpasset hvilket nivå av erfaring man ligger på og hvor mye man vil"+
" investere i hobbyen. “Vingulmark” er hovedgruppen med relativt strenge krav, mens “Vingulmark-leidangen” er en undergruppe med"+
" en forholdsvis lav terskel.\n\n"+

"Vingulmark-leidangen:\n"+
"Leidangen var historisk en organisering i vikingtiden for å kalle inn bondekrigere i ufredstid. Leidangen var ikke profesjonelle"+
" krigere, men utgjorde likevel den største massen av krigere i fylkingen.\n"+

"I Vingulmark er Leidangen en undergruppe med mål om å kunne inkludere de aller ferskeste krigerne og de som ikke ønsker å "+
"investere så mye i reenactment-delen av foreningen. Medlemskap i Leidangen er tilstrekkelig for å kunne delta fullt ut på "+
"hærkamp-delen av hobbyen.\n"+

"Som medlem av Vingulmark-Leidangen har man lov til å male skjoldet sitt i Vingulmarks farger & mønster, kan reise og trene"+
" sammen med Vingulmark på treningshelger og visse markeder, delta på Vingulmark-arrangementer som mekkekvelder og julebord, få"+
" tilgang på Vingulmarks sosiale nettverk (facebook og mail) og har tale og forslagsrett (men ikke stemmerett) på Vingulmarks"+
" møter.\n\n"+

"Søknad og kriterier:\n"+
"For å søke medlemsskap i Leidangen sender man en mail til styret i Vingulmark, vingulmark_styret[at]googlegroups[dott]com, der"+
" man gjør rede for om man oppfyller kravene for medlemskap:\n"+
"– At godkjent sikkerhetskurs e.l. har blitt gjennomført.\n"+
"– At man eier eget skjold og våpen for hærkampstrid.\n"+
"– At man er minst 16 år gammel (de under 18 år trenger underskrift fra foresatte).\n\n"+

"Styret avgjør om hvorvidt søkeren kvalifiserer seg til medlemskap. For at medlemskap i Leidangen skal være gyldig må også"+
" kontingenten [150kr] være betalt innen 2 måneder for inneværende år eller innen 2 måneder av opptak.";

const input3 = "Vingulmark:\n"+
"Den originale Vingulmark har tradisjonelt favnet mye av vikingtid-reenactmenten i tillegg til hærkamp. Vingulmark tar også"+
" betalte formidlings/kampshow-oppdrag som setter høyere krav til utstyr, evner og bidragsvilje.\n\n"+

"Vingulmark er hovedgruppen/den harde kjernen i foreningen som består av de som legger mest tid i hobbyen. Det er også Vingulmark"+
" som står for organiseringen av foreningen i sin helhet. Det er forventet større deltagelse (show, dugnader, kjøringer, møter)"+
" av medlemmene i Vingulmark enn Leidangen.\n\n"+

"Som medlem av Vingulmark har man fulle rettigheter mht. vedtektene (nederst på siden), som i tillegg til rettighetene nevnt for"+
" leidangen blant annet gir stemmerett på Vingulmarks møter.\n\n"+

"Søknad og kriterier:\n"+
"For å søke medlemsskap i Vingulmark sender man en mail til styret i Vingulmark, vingulmark_styret[at]googlegroups[dott]com, der\n"+
" man gjør rede for om man oppfyller kravene for medlemskap:\n"+
"– Godkjent sikkerhetskurs e.l.\n"+
"– Minst 16 år (de under 18 trenger underskrift fra foresatte)\n"+
"– Eie godkjent vikingdrakt, skjold og hærkampvåpen.\n\n"+

"Søknad om medlemsskap avgjøres på medlems- eller årsmøte, der det trengs 2/3 flertall for godkjenning. I denne avgjørelsen"+
" er disse veiledende kriteriene avgjørende:\n"+
"– Bør ha reist på tur (treningshelg/marked) med Vingulmark og/eller deltatt på arrangement i Vingulmarks regi.\n"+
"– Være aktiv på oslotreningene, dvs ca 2 ganger i måneden.\n"+
"– Ha en interesse av vikingtid-reenactment.\n\n"+

"For at medlemskap i Vingulmark skal være gyldig må også kontingenten [350kr] være betalt innen 2 måneder av det inneværende året.";

class Join extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerJoin} headId="join-header" />
          <NavigationBar />
          <ImgHolder img={join1} imgId="joinImg" frame="imgFrame"/>
          <TextElement text={input1} id="text-input" />
          <ImgHolder img={join2} imgId="joinImg2" frame="imgFrame2"/>
          <TextElement text={input2} id="text-input" />
          <ImgHolder img={join3} imgId="joinImg2" frame="imgFrame2"/>
          <TextElement text={input3} id="text-input" />
          <ImgHolder img={join4} imgId="joinImg2" frame="imgFrame3"/>
          <br/>
        </div>
      );
    }
  }
  
  export default Join;