var appName="iGCcheckin";
var appTwitterTag="iGCcheckin";
var appLanguage="nl";
var msgComingSoon=" test), binnenkort beschikbaar in de appstore!..................";

var startJudgements = 0; /* not in sentence */
var startModes = 0;
var startObservations = /*10*/-1;
var startFeelings = /* 30 */-1;
var startFeelings2 = /*50*/-1;
var startNeeds = /* 70 */-1;
var startRequests = /*90*/-1;
var indexOordeel=0;
var indexMode=0;
var indexWaarneming=0;
var indexGevoel=0;
var indexGevoel2=0;
var indexBehoefte=0;
var indexVerzoek=0;

var modes=new Array;
modes[1]="Eerlijk uiten hoe het met MIJ is zonder te 'zwartepieten' of kritiek te leveren";
modes[2]="Empathisch luisteren hoe het met JOU is zonder kritiek te horen of schuld";
var nrOfModes = 2;

var jackals=new Array;
jackals[0]="Maybe you can give a line or behaviour description that triggers you?";

var giraffes=new Array;
giraffes[0]="Maybe you can give a line or behaviour description that you hope for?";

var timeframes=new Array;
timeframes[0]="15min";
timeframes[1]="30min";
timeframes[2]="30min";

var complexities=new Array;
complexities[0]="Easy";
complexities[1]="Medium";
complexities[2]="Hard";

var prepares=new Array;
prepares[0]="Please prepare the dance by selecting a complexity level, timeframe and entering a name and relationshiptype for the person your trying to dance with?";

var relationships=new Array;
relationships[0]="Friend";
relationships[1]="Colleague";
relationships[2]="Partner";
relationships[3]="Child";
relationships[4]="Parent";
relationships[5]="Client";
relationships[6]="Supplier";
relationships[7]="Manager";
relationships[8]="Employee";

var observations=new Array;
observations[startObservations]="Vul de waarneming in door zo objectief mogelijk te beschrijven wat er speelt.";
observations[startObservations+1]="zie";
observations[startObservations+2]="opmerk";
observations[startObservations+3]="bedenk";
observations[startObservations+4]="alles op 'n rijtje zet";
observations[startObservations+5]="hoor";
observations[startObservations+6]="waarneem";
observations[startObservations+7]="constateer";
observations[startObservations+8]="ruik";
observations[startObservations+9]="ontdek";
observations[startObservations+10]="proef";
observations[startObservations+11]="bespeur";
var nrOfObservations = 11;

var feelings=new Array;
feelings[startFeelings]="Hoe voel je je op dit moment, bijv. boos, bedroefd, bang, blij of ... ?";
feelings[startFeelings+1]="BETROKKEN";
feelings[startFeelings+2]="DANKBAAR";
feelings[startFeelings+3]="GEINSPIREERD";
feelings[startFeelings+4]="GESTIMULEERD";
feelings[startFeelings+5]="HOOPVOL";
feelings[startFeelings+6]="OPGEBEURD";
feelings[startFeelings+7]="TOEGENEGEN";
feelings[startFeelings+8]="VERFRIST";
feelings[startFeelings+9]="VREDIG";
feelings[startFeelings+10]="VROLIJK";
feelings[startFeelings+11]="ZELFVERZEKERD";
var nrOfFeelings = 11;

var feelingsOkDetails=new Array;
feelingsOkDetails[0]="BETROKKEN";
feelingsOkDetails[1]="aandachtig";
feelingsOkDetails[2]="betoverd";
feelingsOkDetails[3]="geboeid";
feelingsOkDetails[4]="gefascineerd";
feelingsOkDetails[5]="geinteresseerd";
feelingsOkDetails[6]="geintrigeerd";
feelingsOkDetails[7]="gestimuleerd";
feelingsOkDetails[8]="nieuwsgierig";
feelingsOkDetails[9]="verdiept";
feelingsOkDetails[10]="waakzaam";
feelingsOkDetails[11]="DANKBAAR";
feelingsOkDetails[12]="erkentelijk";
feelingsOkDetails[13]="geraakt";
feelingsOkDetails[14]="ontroerd";
feelingsOkDetails[15]="GEINSPIREERD";
feelingsOkDetails[16]="onder de indruk";
feelingsOkDetails[17]="verbaasd";
feelingsOkDetails[18]="verwonderd";
feelingsOkDetails[19]="GESTIMULEERD";
feelingsOkDetails[20]="energiek";
feelingsOkDetails[21]="enthousiast";
feelingsOkDetails[22]="geanimeerd";
feelingsOkDetails[23]="gepassioneerd";
feelingsOkDetails[24]="geprikkeld";
feelingsOkDetails[25]="levendig";
feelingsOkDetails[26]="verbaasd";
feelingsOkDetails[27]="verbluft";
feelingsOkDetails[28]="verlangend";
feelingsOkDetails[29]="verrast";
feelingsOkDetails[30]="versterkt";
feelingsOkDetails[31]="verwonderd";
feelingsOkDetails[32]="vurig";
feelingsOkDetails[33]="HOOPVOL";
feelingsOkDetails[34]="bemoedigd";
feelingsOkDetails[35]="optimistisch";
feelingsOkDetails[36]="verwachtingsvol";
feelingsOkDetails[37]="OPGEBEURD";
feelingsOkDetails[38]="extatisch";
feelingsOkDetails[39]="geestdriftig";
feelingsOkDetails[40]="gelukzalig";
feelingsOkDetails[41]="hartstochtelijk";
feelingsOkDetails[42]="opgewekt";
feelingsOkDetails[43]="opgewonden";
feelingsOkDetails[44]="stralend";
feelingsOkDetails[45]="uitbundig";
feelingsOkDetails[46]="uitgelaten";
feelingsOkDetails[47]="verrukt";
feelingsOkDetails[48]="TOEGENEGEN";
feelingsOkDetails[49]="hartelijk";
feelingsOkDetails[50]="liefdevol";
feelingsOkDetails[51]="teder";
feelingsOkDetails[52]="vol mededogen";
feelingsOkDetails[53]="vriendelijk";
feelingsOkDetails[54]="zachtmoedig";
feelingsOkDetails[55]="warm";
feelingsOkDetails[56]="VERFRIST";
feelingsOkDetails[57]="gestimuleerd";
feelingsOkDetails[58]="hersteld";
feelingsOkDetails[59]="uitgerust";
feelingsOkDetails[60]="verjongd";
feelingsOkDetails[61]="vernieuwd";
feelingsOkDetails[62]="VREDIG";
feelingsOkDetails[63]="gecentreerd";
feelingsOkDetails[64]="gelijkmoedig";
feelingsOkDetails[65]="gelukkig";
feelingsOkDetails[66]="gerust";
feelingsOkDetails[67]="helder";
feelingsOkDetails[68]="kalm";
feelingsOkDetails[69]="ontspannen";
feelingsOkDetails[70]="opgelucht";
feelingsOkDetails[71]="op mijn gemak";
feelingsOkDetails[72]="rustig";
feelingsOkDetails[73]="sereen";
feelingsOkDetails[74]="stil";
feelingsOkDetails[75]="tevreden";
feelingsOkDetails[76]="vervuld";
feelingsOkDetails[77]="voldaan";
feelingsOkDetails[78]="VROLIJK";
feelingsOkDetails[79]="blij";
feelingsOkDetails[80]="frivool";
feelingsOkDetails[81]="geamuseerd";
feelingsOkDetails[82]="gelukkig";
feelingsOkDetails[83]="opgetogen";
feelingsOkDetails[84]="uitbundig";
feelingsOkDetails[85]="ZELFVERZEKERD";
feelingsOkDetails[86]="gesterkt";
feelingsOkDetails[87]="open";
feelingsOkDetails[88]="trots";
feelingsOkDetails[89]="vastberaden";
feelingsOkDetails[90]="veilig";
feelingsOkDetails[91]="zeker";
feelingsOkDetails[92]="zelfbewust";

var feelings2=new Array;
feelings2[startFeelings2]="Hoe voel je je op dit moment, bijv. boos, bedroefd, bang of ... ?";
feelings2[startFeelings2+1]="AFKEER";
feelings2[startFeelings2+2]="AFWEZIG";
feelings2[startFeelings2+3]="BANG";
feelings2[startFeelings2+4]="GEERGERD";
feelings2[startFeelings2+5]="GESPANNEN";
feelings2[startFeelings2+6]="KWAAD";
feelings2[startFeelings2+7]="KWETSBAAR";
feelings2[startFeelings2+8]="MACHTELOOS";
feelings2[startFeelings2+9]="ONRUST";
feelings2[startFeelings2+10]="OPGELATEN";
feelings2[startFeelings2+11]="PIJN";
feelings2[startFeelings2+12]="TREURIG";
feelings2[startFeelings2+13]="VERLANGEND";
feelings2[startFeelings2+14]="VERMOEID";
feelings2[startFeelings2+15]="VERWARD";
var nrOfFeelings2 = 15;

var feelingsNotOkDetails=new Array;
feelingsNotOkDetails[0]="AFKEER";
feelingsNotOkDetails[1]="haatdragend";
feelingsNotOkDetails[2]="minachtend";
feelingsNotOkDetails[3]="vol afschuw";
feelingsNotOkDetails[4]="vijandig";
feelingsNotOkDetails[5]="walging";
feelingsNotOkDetails[6]="AFWEZIG";
feelingsNotOkDetails[7]="afstandelijk";
feelingsNotOkDetails[8]="apathisch";
feelingsNotOkDetails[9]="gelaten";
// feelingsNotOkDetails[10]="AFKEER";
// feelingsNotOkDetails[11]="haatdragend";
// feelingsNotOkDetails[12]="minachtend";
// feelingsNotOkDetails[13]="vol afschuw";
// feelingsNotOkDetails[14]="vijandig";
// feelingsNotOkDetails[15]="walging";
// feelingsNotOkDetails[16]="AFWEZIG";
// feelingsNotOkDetails[17]="afstandelijk";
// feelingsNotOkDetails[18]="apathisch";
// feelingsNotOkDetails[19]="gelaten";
feelingsNotOkDetails[10]="koel";
feelingsNotOkDetails[11]="ongeinteresseerd";
feelingsNotOkDetails[12]="onverschillig";
feelingsNotOkDetails[13]="teruggetrokken";
feelingsNotOkDetails[14]="verveeld";
feelingsNotOkDetails[15]="vervreemd";
feelingsNotOkDetails[16]="BANG";
feelingsNotOkDetails[17]="angstig";
feelingsNotOkDetails[18]="in paniek";
feelingsNotOkDetails[19]="ongerust";
feelingsNotOkDetails[20]="ontsteld";
feelingsNotOkDetails[21]="op mijn hoede";
feelingsNotOkDetails[22]="verschrikt";
feelingsNotOkDetails[23]="versteend";
feelingsNotOkDetails[24]="verontrust";
feelingsNotOkDetails[25]="wantrouwend";
feelingsNotOkDetails[26]="GEERGERD";
feelingsNotOkDetails[27]="boos";
feelingsNotOkDetails[28]="gefrustreerd";
feelingsNotOkDetails[29]="geirriteerd";
feelingsNotOkDetails[30]="ongeduldig";
feelingsNotOkDetails[31]="ontevreden";
feelingsNotOkDetails[32]="ontstemd";
feelingsNotOkDetails[33]="GESPANNEN";
feelingsNotOkDetails[34]="chagrijnig";
feelingsNotOkDetails[35]="geirriteerd";
feelingsNotOkDetails[36]="overweldigd";
feelingsNotOkDetails[37]="rusteloos";
feelingsNotOkDetails[38]="zenuwachtig";
feelingsNotOkDetails[39]="KWAAD";
feelingsNotOkDetails[40]="furieus";
feelingsNotOkDetails[41]="razend";
feelingsNotOkDetails[42]="verontwaardigd";
feelingsNotOkDetails[43]="woedend";
feelingsNotOkDetails[44]="wraakzuchtig";
feelingsNotOkDetails[45]="KWETSBAAR";
feelingsNotOkDetails[46]="gevoelig";
feelingsNotOkDetails[47]="hulpeloos";
feelingsNotOkDetails[48]="onzeker";
feelingsNotOkDetails[49]="wiebelig";
feelingsNotOkDetails[50]="MACHTELOOS";
feelingsNotOkDetails[51]="hopeloos";
feelingsNotOkDetails[52]="hulpeloos";
feelingsNotOkDetails[53]="moedeloos";
feelingsNotOkDetails[54]="ONRUST";
feelingsNotOkDetails[55]="alert";
feelingsNotOkDetails[56]="geagiteerd";
feelingsNotOkDetails[57]="gealarmeerd";
feelingsNotOkDetails[58]="geschrokken";
feelingsNotOkDetails[59]="nerveus";
feelingsNotOkDetails[60]="ongemakkelijk";
feelingsNotOkDetails[61]="ontdaan";
feelingsNotOkDetails[62]="onthutst";
feelingsNotOkDetails[63]="ontmoedigd";
feelingsNotOkDetails[64]="ontsteld";
feelingsNotOkDetails[65]="verbaasd";
feelingsNotOkDetails[66]="verbouwereerd";
feelingsNotOkDetails[67]="verschrikt";
feelingsNotOkDetails[68]="OPGELATEN";
feelingsNotOkDetails[69]="beschaamd";
feelingsNotOkDetails[70]="onbehaaglijk";
feelingsNotOkDetails[71]="ongemakkelijk";
feelingsNotOkDetails[72]="schuldig";
feelingsNotOkDetails[73]="verward";
feelingsNotOkDetails[74]="PIJN";
feelingsNotOkDetails[75]="alleen";
feelingsNotOkDetails[76]="berouwvol";
feelingsNotOkDetails[77]="gebroken";
feelingsNotOkDetails[78]="gekweld";
feelingsNotOkDetails[79]="gekwetst";
feelingsNotOkDetails[80]="miserabel";
feelingsNotOkDetails[81]="ontredderd";
feelingsNotOkDetails[82]="TREURIG";
feelingsNotOkDetails[83]="bedroefd";
feelingsNotOkDetails[84]="melancholiek";
feelingsNotOkDetails[85]="ontmoedigd";
feelingsNotOkDetails[86]="ongelukkig";
feelingsNotOkDetails[87]="teneergeslagen";
feelingsNotOkDetails[88]="teleurgesteld";
feelingsNotOkDetails[89]="verdrietig";
feelingsNotOkDetails[90]="wanhopig";
feelingsNotOkDetails[91]="triest";
feelingsNotOkDetails[92]="VERLANGEND";
feelingsNotOkDetails[93]="afgunstig";
feelingsNotOkDetails[94]="hunkerend";
feelingsNotOkDetails[95]="jaloers";
feelingsNotOkDetails[96]="nostalgisch";
feelingsNotOkDetails[97]="smachtend";
feelingsNotOkDetails[98]="VERMOEID";
feelingsNotOkDetails[99]="futloos";
feelingsNotOkDetails[100]="leeg";
feelingsNotOkDetails[101]="lusteloos";
feelingsNotOkDetails[102]="slaperig";
feelingsNotOkDetails[103]="uitgeblust";
feelingsNotOkDetails[104]="uitgeput";
feelingsNotOkDetails[105]="verslagen";
feelingsNotOkDetails[106]="VERWARD";
feelingsNotOkDetails[107]="ambivalent";
feelingsNotOkDetails[108]="aarzelend";
feelingsNotOkDetails[109]="onthutst";
feelingsNotOkDetails[110]="onzeker";
feelingsNotOkDetails[111]="perplex";
feelingsNotOkDetails[112]="verbijsterd";
feelingsNotOkDetails[113]="verloren";

var needs=new Array;
needs[startNeeds]="Wat heb je nodig? Welke behoefte is wel/niet ingevuld?";
needs[startNeeds+1]="AUTONOMIE";
needs[startNeeds+2]="BETEKENIS";
needs[startNeeds+3]="EERLIJKHEID";
needs[startNeeds+4]="LICHAMELIJK WELBEVINDEN";
needs[startNeeds+5]="SPELEN";
needs[startNeeds+6]="VERBINDING";
needs[startNeeds+7]="VREDE";
var nrOfNeeds = 7;

var needsDetails=new Array;
needsDetails[0]="AUTONOMIE";
needsDetails[1]="keuze";
needsDetails[2]="onafhankelijkheid";
needsDetails[3]="ruimte";
needsDetails[4]="spontaniteit";
needsDetails[5]="vrijheid";
needsDetails[6]="BETEKENIS";
needsDetails[7]="begrip";
needsDetails[8]="bewustzijn";
needsDetails[9]="bijdrage";
needsDetails[10]="creativiteit";
needsDetails[11]="doeltreffendheid";
needsDetails[12]="erkenning";
needsDetails[13]="gewaarzijn";
needsDetails[14]="groei";
needsDetails[15]="helderheid";
needsDetails[16]="hoop";
needsDetails[17]="leren";
needsDetails[18]="ontdekking";
needsDetails[19]="participatie";
needsDetails[20]="vaardigheid";
needsDetails[21]="vieren van het leven";
needsDetails[22]="rouwen";
needsDetails[23]="stimulatie";
needsDetails[24]="uitdaging";
needsDetails[25]="van belang zijn";
needsDetails[26]="hoop";
needsDetails[27]="werkzaamheid";
needsDetails[28]="wilskracht";
needsDetails[29]="zelfexpressie";
needsDetails[30]="zin";
needsDetails[31]="EERLIJKHEID";
needsDetails[32]="aanwezigheid";
needsDetails[33]="authenticiteit";
needsDetails[34]="integriteit";
needsDetails[35]="zelfexpressie";
needsDetails[36]="LICHAMELIJK WELBEVINDEN";
needsDetails[37]="aanraking";
needsDetails[38]="beschutting";
needsDetails[39]="beweging";
needsDetails[40]="lucht";
needsDetails[41]="rust/slaap";
needsDetails[42]="seksualiteit";
needsDetails[43]="veiligheid";
needsDetails[44]="voedsel";
needsDetails[45]="water";
needsDetails[46]="SPELEN";
needsDetails[47]="humor";
needsDetails[48]="plezier";
needsDetails[49]="VERBINDING";
needsDetails[50]="acceptatie";
needsDetails[51]="affectie";
needsDetails[52]="begrijpen en begrepen worden";
needsDetails[53]="communicatie";
needsDetails[54]="compassie";
needsDetails[55]="empathie";
needsDetails[56]="erbij betrekken";
needsDetails[57]="erbij horen";
needsDetails[58]="gemeenschapsgevoel";
needsDetails[59]="intimiteit";
needsDetails[60]="kennen en gekend zijn";
needsDetails[61]="liefde";
needsDetails[62]="nabijheid";
needsDetails[63]="ondersteuning";
needsDetails[64]="respect/zelfrespect";
needsDetails[65]="samenwerking";
needsDetails[66]="vertrouwen";
needsDetails[67]="veiligheid";
needsDetails[68]="voeding";
needsDetails[69]="voorkomendheid";
needsDetails[70]="waardering";
needsDetails[71]="warmte";
needsDetails[72]="wederkerigheid";
needsDetails[73]="zien en gezien worden";
needsDetails[74]="VREDE";
needsDetails[75]="gemak";
needsDetails[76]="harmonie";
needsDetails[77]="heelheid";
needsDetails[78]="inspiratie";
needsDetails[79]="orde";
needsDetails[80]="waardering";
needsDetails[81]="warmte";

var requests=new Array;
requests[startRequests]="Wat wil/kan je nu aan jezelf of een ander vragen?";
requests[startRequests+1]="Hoe zou het voor je zijn om ...?";
requests[startRequests+2]="En zou je willen dat ...?";
requests[startRequests+3]="Ik zou graag willen weten ...";
requests[startRequests+4]="Zou je ... willen doen?";
requests[startRequests+5]="Hoe komt het op jou over?";
requests[startRequests+6]="Wat heb je nodig?";
requests[startRequests+7]="Zullen we samen ...?";
requests[startRequests+8]="Ben je bereid om naar me te luisteren?";
requests[startRequests+9]="Zal ik een kopje thee zetten?";
requests[startRequests+10]="Hoe ziet ... er voor mij uit?";
requests[startRequests+11]="Wil je vertellen ...?";
requests[startRequests+12]="Ik blijf in verbinding met mezelf.";
requests[startRequests+13]="Wil je aub teruggeven wat ik zojuist gezegd heb?";
requests[startRequests+14]="Mijn verlangen is ...";
requests[startRequests+15]="Heb je andere plannen?";
var nrOfRequests = 15;

var judgements=new Array;
judgements[startJudgements]="Beschrijf ongeremd de oordelen die in je opkomen";
judgements[startJudgements+1]="VEROORDEEL";
judgements[startJudgements+2]="ETIKETTEER";
judgements[startJudgements+3]="VERWIJT";
judgements[startJudgements+4]="VERDIEN";
judgements[startJudgements+5]="HEB GEEN KEUZE";
judgements[startJudgements+6]="LEG NORM OP";
judgements[startJudgements+7]="EIS";
var nrOfJudgements = 7;

var judgementsDetails=new Array;
judgementsDetails[0]="VEROORDEEL";
judgementsDetails[1]="goed";
judgementsDetails[2]="slecht";
judgementsDetails[3]="juist";
judgementsDetails[4]="onjuist";
judgementsDetails[5]="ETIKETTEER";
judgementsDetails[6]="ik ben";
judgementsDetails[7]="hij is";
judgementsDetails[8]="zij is";
judgementsDetails[9]="zij zijn";
judgementsDetails[10]="VERWIJT";
judgementsDetails[11]="mijn schuld";
judgementsDetails[12]="jouw schuld";
judgementsDetails[13]="zijn schuld";
judgementsDetails[14]="haar schuld";
judgementsDetails[15]="hun schuld";
judgementsDetails[16]="VERDIEN";
judgementsDetails[17]="straf";
judgementsDetails[18]="beloning";
judgementsDetails[19]="HEB GEEN KEUS";
judgementsDetails[20]="kan niet anders";
judgementsDetails[21]="moet";
judgementsDetails[22]="LEG NORM OP";
judgementsDetails[23]="zou moeten";
judgementsDetails[24]="hoort te";
judgementsDetails[25]="EIS";
judgementsDetails[26]="bedreigen";

function getObservationButtonText()
{
return "W";
}
function getFeelingButtonText()
{
return "G";
}
function getNeedButtonText()
{
return "B";
}
function getRequestButtonText()
{
return "V";
}
function getJudgementButtonText()
{
return "J";
}

function getNVCButtonText()
{
return "GC";
}

function getPrepareButtonText()
{
return "Prep";
}

function getJackalButtonText()
{
return "Jack";
}

function getGiraffeButtonText()
{
return "Gira";
}

function getTimeframeUndefinedText()
{
return "[Timeframe]";
}

function getRelationshipUndefinedText()
{
return "[Relationship]";
}

function getComplexityUndefinedText()
{
return "[Complexity]";
}

function getObservationUndefinedText()
{
return "[Waarneming]";
}


function getFeelingUndefinedText()
{
return "[Gevoel]";
}

function getFeelingOkUndefinedText()
{
return "[Gevoel ;=) ]";
}

function getFeelingNotOkUndefinedText()
{
return "[Gevoel :=( ]";
}

function getNeedUndefinedText()
{
return "[Behoefte]";
}

function getRequestUndefinedText()
{
return "[Verzoek]";
}

function getJudgementUndefinedText()
{
return "[Oordeel]";
}

function getStartObservation()
{
  if ( indexMode == 2) 
      return "Als jij "
   else
      return "Als ik ";
}

function getStartObservationValue()
{
return (' dat ');
}

function getStartFeeling()
{
  if ( indexMode == 2) 
      return "voel jij je "
   else
      return "voel ik me ";
}

function getStartNeed()
{
  if ( indexMode == 2 ) 
      return "omdat jij behoefte hebt aan "
   else
      return "omdat ik behoefte heb aan ";
}


function getMailToSubject()
{
  return "GCConnectionRequest";  
}

function getWebsiteToShare()
{
  return 'http://www.vitaliserendcommuniceren.nl/school/tools.html';
}

function getSavedText()
{
  return 'Succesfully Saved ! <br/>  <br/> Tweet/share the sentence and/or link to this app.';
}

function getWebMasterText()
{
  return ('Opmerking: ... '
+'                                                      '
+' Alvast bedankt voor uw feedback ! Dit maakt ons blij omdat het onze behoefte aan groei en verbinding vervuld. En mogelijk verdrietig omdat de uwe nog niet vervuld was.                       ');
}

function getCoProductionText()
{
return 'Coproductie van';
}

function getUsingNVCText()
{
return "m.b.v. het model voor geweldloze communicatie van";
}

function getMailQuestionsText()
{
return "Vragen en verbeterpunten graag mailen naar de";
}

function getHelp()
{
   return ('Welkom '
+ 'bij het Geweldloze Communicatie Checkin hulpmiddel ! '
+ 'Zoek verbinding met jezelf, druk op:'
+ '<br>'
+ '- W voor je waarneming <br>'
+ '- G voor je gevoel <br>'
+ '- B voor je behoefte  <br>'
+ '- V voor een verzoek aan jezelf <br>')
}

function getInfo()
{
   return ('' + getHelp()
+ '<br/>'
+'Een Check-in is stil staan/zitten bij wat er nu in je '
+ 'leeft om op die manier verbinding met jezelf te maken. '
+ '<br/>' + '<br/>'
+ 'De NVC CheckIn app maakt je stapsgewijs bewust van wat '
+ 'er speelt (waarneming), welke gevoelens dit stimuleert, '
+ 'welke behoeften wel of niet zijn ingevuld '
+ 'en wat je in deze situatie zou kunnen doen (verzoek). '
+ '<br/>' + '<br/>' 
+ 'Druk (herhaald) op de knoppen aan de bovenkant met de functie: '
+ '<br>'
+ '- W voor je Waarneming <br>'
+ '- G voor je Gevoel <br>'
+ '- B voor je Behoefte  <br>'
+ '- V voor een Verzoek <br>'
+ '<br>'
+ 'Bij iedere stap wordt je ondersteund door een hulpvraag en lijsten met veel voorkomende waarnemingen, gevoelens, behoeften en verzoeken.'
+ '<br>'
+ 'Je kunt een keuze maken uit de lijsten door meerdere keren op de WGBV knoppen te drukken of door aan het scroll wiel achter de knop met het pijltje te draaien.'
+ '<br>'
+ 'Daarnaast kun je door op het lege vakje te drukken met het toetsenbord je eigen bewoordingen toevoegen om de bewoording specifiek aan jouw situatie aan te passen.'
+ '<br>'
+ 'De zin die je zo stapsgewijs maakt wordt continu geupdate in het venster zodat deze altijd actueel is.'
+ '<br>'
+ '<br>'
+ 'De knoppen onderaan het scherm bevatten nog een aantal extra functies:'
+ '<br>'
+ '- Druk (herhaald) op GC voor meer informatie over hoe de verschillende stappen van het model voor Geweldloze Communicatie'
+' of NonViolent Communication (NVC) werken en over Marshall Rosenberg die dit gedachtengoed heeft ontwikkeld.'
+ '<br>'
+ '- Druk op Mail om je Check-in resultaat (zelfgemaakte zin in GC formaat) op te slaan in het logboek en te mailen naar jezelf of een ander.'
+ '<br>'
+ '- Druk op Log om door je eerder opgeslagen CheckIn resultaten te bladeren en te kijken wat je eerder nodig had en hielp.'
+ '<br>'
+ '- Druk op Apps voor andere ondersteunende apps gebaseerd op het GC / NVC model.'
+ '<br>'
+ '<br>'
+ 'Deze Check-in app is een '
+ '<br>' 
+ getCoProductionOf()
)
}

function getMaps()
{
return("");
}

function setModePicture()
{
/*
document.getElementById('modeSection').innerHTML=getModePicture();
*/
}

function getModePicture()
{
  return("");
}

