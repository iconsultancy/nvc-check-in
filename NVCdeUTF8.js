var appName="iGfKcheckin";
var appTwitterTag="iGfKcheckin";
var appLanguage="de";
var msgComingSoon=" test), bald erhältlich im appstore!..................";

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
modes[1]="Ehrlich äußern wie es MIR geht ohne den andern zu beschuldigen oder zu kritisieren.";
modes[2]="Empathisch aufnehmen wie es DIR geht ohne Kritik oder Beschuldigungen zu hören.";
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
observations[startObservations]="Beschreibe Deine Beobachtung so objectiv wie möglich.";
observations[startObservations+1]="sehe";
observations[startObservations+2]="bemerke";
observations[startObservations+3]="bedenke";
observations[startObservations+4]="zurückblicke";
observations[startObservations+5]="höre";
observations[startObservations+6]="beobachte";
observations[startObservations+7]="feststelle";
observations[startObservations+8]="rieche";
observations[startObservations+9]="entdecke";
observations[startObservations+10]="prüfe";
observations[startObservations+11]="spüre";
var nrOfObservations = 11;

var feelings=new Array;
feelings[startFeelings]="Wie fühlst du dich jetzt, z.B. wütend, traurig, besorgt, froh oder ... ?";
feelings[startFeelings+1]="AUFGEMUNTERT";
feelings[startFeelings+2]="DANKBAR";
feelings[startFeelings+3]="ERFRISCHT";
feelings[startFeelings+4]="FRIEDLICH";
feelings[startFeelings+5]="FRÖHLICH";
feelings[startFeelings+6]="HOFFNUNGSVOLL";
feelings[startFeelings+7]="INSPIRIERT";
feelings[startFeelings+8]="INTERESSIERT";
feelings[startFeelings+9]="LIEBEVOLL";
feelings[startFeelings+10]="SELBSTSICHER";
feelings[startFeelings+11]="STIMULIERT";
var nrOfFeelings = 11;

var feelingsOkDetails=new Array;
feelingsOkDetails[0]="AUFGEMUNTERT";
feelingsOkDetails[1]="ausgelassen";
feelingsOkDetails[2]="enthusiastisch";
feelingsOkDetails[3]="entzückt";
feelingsOkDetails[4]="erregt";
feelingsOkDetails[5]="extatisch";
feelingsOkDetails[6]="glücklich";
feelingsOkDetails[7]="munter";
feelingsOkDetails[8]="passioniert";
feelingsOkDetails[9]="strahlend";
feelingsOkDetails[10]="überschwänglich";
feelingsOkDetails[11]="DANKBAR";
feelingsOkDetails[12]="berührt";
feelingsOkDetails[13]="erkenntlich";
feelingsOkDetails[14]="gerührt";
feelingsOkDetails[15]="ERFRISCHT";
feelingsOkDetails[16]="ausgeruht";
feelingsOkDetails[17]="erneuert";
feelingsOkDetails[18]="gestärkt";
feelingsOkDetails[19]="stimuliert";
feelingsOkDetails[20]="verjüngt";
feelingsOkDetails[21]="FRIEDLICH";
feelingsOkDetails[22]="entspannt";
feelingsOkDetails[23]="erfüllt";
feelingsOkDetails[24]="erleichtert";
feelingsOkDetails[25]="gelassen";
feelingsOkDetails[26]="glücklich";
//feelingsOkDetails[72]="ruhig";
feelingsOkDetails[27]="heiter";
feelingsOkDetails[28]="im Gleichgewicht";
feelingsOkDetails[29]="ruhig";
feelingsOkDetails[30]="still";
feelingsOkDetails[31]="wach";
//feelingsOkDetails[68]="ruhig";
feelingsOkDetails[32]="zentriert";
feelingsOkDetails[33]="zufrieden";
//feelingsOkDetails[77]="zufrieden";
feelingsOkDetails[34]="FRÖHLICH";
feelingsOkDetails[35]="ausgelassen";
feelingsOkDetails[36]="amüsiert";
feelingsOkDetails[37]="freudig erregt";
feelingsOkDetails[38]="frivol";
feelingsOkDetails[39]="froh";
feelingsOkDetails[40]="glücklich";
feelingsOkDetails[41]="HOFFNUNGSVOLL";
feelingsOkDetails[42]="ermutigt";
feelingsOkDetails[43]="erwartungsvoll";
feelingsOkDetails[44]="optimistisch";
feelingsOkDetails[45]="INSPIRIERT";
feelingsOkDetails[46]="beeindruckt";
feelingsOkDetails[47]="erstaunt";
feelingsOkDetails[48]="verwundert";
feelingsOkDetails[49]="INTERESSIERT";
feelingsOkDetails[50]="aufmerksam";
feelingsOkDetails[51]="bezaubert";
feelingsOkDetails[52]="fasziniert";
//feelingsOkDetails[4]="fasziniert";
feelingsOkDetails[53]="interessiert";
//feelingsOkDetails[6]="interessiert";
feelingsOkDetails[54]="neugierig";
feelingsOkDetails[55]="stimuliert";
feelingsOkDetails[56]="vertieft in";
feelingsOkDetails[57]="wachsam";
feelingsOkDetails[58]="LIEBEVOLL";
feelingsOkDetails[59]="freundlich";
feelingsOkDetails[60]="herzlich";
feelingsOkDetails[61]="liebevoll";
feelingsOkDetails[62]="voll Mitgefühl";
feelingsOkDetails[63]="warm";
feelingsOkDetails[64]="zart";
feelingsOkDetails[65]="zärtlich";
feelingsOkDetails[66]="SELBSTSICHER";
feelingsOkDetails[67]="bestimmt";
feelingsOkDetails[68]="gestärkt";
feelingsOkDetails[69]="offen";
feelingsOkDetails[70]="selbstbewust";
feelingsOkDetails[71]="sicher";
//feelingsOkDetails[91]="sicher";
feelingsOkDetails[72]="stolz";
feelingsOkDetails[73]="STIMULIERT";
feelingsOkDetails[74]="animiert";
feelingsOkDetails[75]="begeistert";
feelingsOkDetails[76]="Energie geladen";
feelingsOkDetails[77]="enthusiastisch";
feelingsOkDetails[78]="erstaunt";
feelingsOkDetails[79]="gestärkt";
feelingsOkDetails[80]="lebendig";
feelingsOkDetails[81]="leidenschaftlich";
//feelingsOkDetails[24]="geprikkelt";
feelingsOkDetails[82]="überrascht";
feelingsOkDetails[83]="verblüfft";
feelingsOkDetails[84]="verlangend";
feelingsOkDetails[85]="verwundert";

var feelings2=new Array;
feelings2[startFeelings2]="Wie fühlst du dich jetzt, z.B. wütend, traurig, besorgt, froh oder ... ?";
feelings2[startFeelings2+1]="ABNEIGUNG";
feelings2[startFeelings2+2]="ABWESEND";
feelings2[startFeelings2+3]="ALLEIN";
feelings2[startFeelings2+4]="ANGESPANNT";
feelings2[startFeelings2+5]="ÄNGSTLICH";
feelings2[startFeelings2+6]="ÄRGERLICH";
feelings2[startFeelings2+7]="EMPFINDLICH";
feelings2[startFeelings2+8]="MACHTLOS";
feelings2[startFeelings2+9]="MÜDE";
feelings2[startFeelings2+10]="SCHMERZ";
feelings2[startFeelings2+11]="TRAURIG";
feelings2[startFeelings2+12]="UNRUHIG";
feelings2[startFeelings2+13]="VERLANGEND";
feelings2[startFeelings2+14]="VERWIRRT";
feelings2[startFeelings2+15]="WÜTEND";
var nrOfFeelings2 = 15;

var feelingsNotOkDetails=new Array;
feelingsNotOkDetails[0]="ABNEIGUNG";
feelingsNotOkDetails[1]="Abscheu";
feelingsNotOkDetails[2]="ekel";
feelingsNotOkDetails[3]="feindlich";
feelingsNotOkDetails[4]="hasserfüllt";
feelingsNotOkDetails[5]="verächtlich";
feelingsNotOkDetails[6]="ABWESEND";
feelingsNotOkDetails[7]="apathisch";
feelingsNotOkDetails[8]="distanziert";
feelingsNotOkDetails[9]="gelangweilt";
feelingsNotOkDetails[10]="gelassen";
//feelingsNotOkDetails[10]="ABNEIGUNG";
//feelingsNotOkDetails[11]="hasserfüllt";
//feelingsNotOkDetails[12]="verächtlich";
//feelingsNotOkDetails[13]="abscheu";
//feelingsNotOkDetails[14]="feindlich";
//feelingsNotOkDetails[15]="Ekel";
//feelingsNotOkDetails[16]="ABWESEND";
//feelingsNotOkDetails[17]="distanziert";
//feelingsNotOkDetails[18]="apathisch";
//feelingsNotOkDetails[19]="gelassen";
feelingsNotOkDetails[11]="gleichgültig";
feelingsNotOkDetails[12]="kühl";
feelingsNotOkDetails[13]="uninteressiert";
feelingsNotOkDetails[14]="verfremdet";
feelingsNotOkDetails[15]="zurückgezogen";
feelingsNotOkDetails[16]="ALLEIN";
feelingsNotOkDetails[17]="beschämt";
feelingsNotOkDetails[18]="schuldig";
feelingsNotOkDetails[19]="unbehaglich";
feelingsNotOkDetails[20]="unbequem";
feelingsNotOkDetails[21]="verwirrt";
feelingsNotOkDetails[22]="ANGESPANNT";
feelingsNotOkDetails[23]="aufgeregt";
feelingsNotOkDetails[24]="irritiert";
feelingsNotOkDetails[25]="launisch";
feelingsNotOkDetails[26]="ruhelos";
feelingsNotOkDetails[27]="überwältigt";
feelingsNotOkDetails[28]="ÄNGSTLICH";
feelingsNotOkDetails[29]="alarmiert";
feelingsNotOkDetails[30]="argwöhnisch";
feelingsNotOkDetails[31]="bang";
feelingsNotOkDetails[32]="bestürzt";
feelingsNotOkDetails[33]="erschrokken";
feelingsNotOkDetails[34]="in Panick";
feelingsNotOkDetails[35]="unruhig";
feelingsNotOkDetails[36]="versteinert";
feelingsNotOkDetails[37]="beunruhigt";
feelingsNotOkDetails[38]="ÄRGERLICH";
feelingsNotOkDetails[39]="frustriert";
feelingsNotOkDetails[40]="irritiert";
feelingsNotOkDetails[41]="ungeduldig";
feelingsNotOkDetails[42]="unzufrieden";
feelingsNotOkDetails[43]="verstimmt";
feelingsNotOkDetails[44]="wütend";
feelingsNotOkDetails[45]="EMPFINDLICH";
feelingsNotOkDetails[46]="hilflos";
feelingsNotOkDetails[47]="hin- und hergerissen";
feelingsNotOkDetails[48]="sensibel";
feelingsNotOkDetails[49]="unsicher";
feelingsNotOkDetails[50]="MACHTLOS";
feelingsNotOkDetails[51]="hilflos";
feelingsNotOkDetails[52]="hoffnungslos";
feelingsNotOkDetails[53]="mutlos";
feelingsNotOkDetails[54]="MÜDE";
feelingsNotOkDetails[55]="abgekämpft";
feelingsNotOkDetails[56]="erschöpft";
feelingsNotOkDetails[57]="kraftlos";
feelingsNotOkDetails[58]="leer";
feelingsNotOkDetails[59]="lustlos";
feelingsNotOkDetails[60]="schläfrig";
feelingsNotOkDetails[61]="verschlagen";
feelingsNotOkDetails[62]="SCHMERZ";
feelingsNotOkDetails[63]="einsam";
feelingsNotOkDetails[64]="elend";
feelingsNotOkDetails[65]="gequält";
//feelingsNotOkDetails[91]="ontredderd";
feelingsNotOkDetails[66]="reumütig";
feelingsNotOkDetails[67]="verletzt";
feelingsNotOkDetails[68]="zermürbt";
feelingsNotOkDetails[69]="TRAURIG";
feelingsNotOkDetails[70]="betrübt";
feelingsNotOkDetails[71]="bedrückt";
feelingsNotOkDetails[72]="entmutigt";
feelingsNotOkDetails[73]="enttäuscht";
feelingsNotOkDetails[74]="melancholisch";
feelingsNotOkDetails[75]="niedergeschlagen";
feelingsNotOkDetails[76]="traurig";
feelingsNotOkDetails[77]="unglücklich";
feelingsNotOkDetails[78]="verzweifelt";
feelingsNotOkDetails[79]="UNRUHIG";
feelingsNotOkDetails[80]="alarmiert";
feelingsNotOkDetails[81]="aufgewühlt";
feelingsNotOkDetails[82]="entmutigt";
feelingsNotOkDetails[83]="entsetzt";
feelingsNotOkDetails[84]="erschrocken";
//feelingsNotOkDetails[83]="erschrocken";
feelingsNotOkDetails[85]="fassungslos";
feelingsNotOkDetails[86]="nervös";
//feelingsNotOkDetails[87]="ontdaan";
feelingsNotOkDetails[87]="überrascht";
feelingsNotOkDetails[88]="unbequem";
feelingsNotOkDetails[89]="verwirrt";
feelingsNotOkDetails[90]="wachsam";
feelingsNotOkDetails[91]="VERLANGEND";
feelingsNotOkDetails[92]="neidisch";
feelingsNotOkDetails[93]="nostalgisch";
feelingsNotOkDetails[94]="verlangend";
//feelingsNotOkDetails[113]="neidisch";
feelingsNotOkDetails[95]="schmachtend";
feelingsNotOkDetails[96]="VERWIRRT";
feelingsNotOkDetails[97]="ambivalent";
feelingsNotOkDetails[98]="fassungslos";
feelingsNotOkDetails[99]="perplex";
feelingsNotOkDetails[100]="unsicher";
feelingsNotOkDetails[101]="verloren";
feelingsNotOkDetails[102]="zweifelnd";
//feelingsNotOkDetails[122]="verbijsterd";
feelingsNotOkDetails[103]="WÜTEND";
feelingsNotOkDetails[104]="empört";
feelingsNotOkDetails[105]="rasend";
feelingsNotOkDetails[106]="voll Rache";
//feelingsNotOkDetails[53]="wütend";
feelingsNotOkDetails[107]="zornig";

var needs=new Array;
needs[startNeeds]="Was brauchst du? Welches Bedürfnis istwohl/nicht erfüllt";
needs[startNeeds+1]="AUTONOMIE";
needs[startNeeds+2]="BEDEUTUNG";
needs[startNeeds+3]="EHRLICHKEIT";
needs[startNeeds+4]="FRIEDE";
needs[startNeeds+5]="SPIEL";
needs[startNeeds+6]="VERBINDUNG";
needs[startNeeds+7]="WOHLERGEHEN";
var nrOfNeeds = 7;

var needsDetails=new Array;
needsDetails[0]="AUTONOMIE";
needsDetails[1]="Freiheit";
needsDetails[2]="Raum";
needsDetails[3]="Spontanität";
needsDetails[4]="Unabhängigkeit";
needsDetails[5]="Wahl";
needsDetails[6]="BEDEUTUNG";
needsDetails[7]="Anerkennung";
needsDetails[8]="Aufmerksamkeit";
needsDetails[9]="Beitrag";
needsDetails[10]="Bewusstsein";
needsDetails[11]="Effektivität";
needsDetails[12]="Entdecken";
needsDetails[13]="Geschicklichkeit";
needsDetails[14]="Herausforderung";
needsDetails[15]="Hoffnung";
//needsDetails[16]="Hoffnung";
needsDetails[16]="Klarheit";
needsDetails[17]="Kreativität";
needsDetails[18]="Leben feiern";
needsDetails[19]="Lernen";
needsDetails[20]="Selbstausdruck";
needsDetails[21]="Sinn";
needsDetails[22]="Stimulierung";
//needsDetails[27]="werkzaamheid";
needsDetails[23]="Teilnahme";
needsDetails[24]="trauern";
needsDetails[25]="Verstehen";
needsDetails[26]="von Bedeutung sein";
needsDetails[27]="Wachstum";
needsDetails[28]="Willenskraft";
needsDetails[29]="EHRLICHKEIT";
needsDetails[30]="Anwesenheid";
needsDetails[31]="Autentizität";
needsDetails[32]="Integrität";
needsDetails[33]="Selbstausdruck";
needsDetails[34]="FRIEDE";
needsDetails[35]="Ganzheit";
needsDetails[36]="Harmonie";
needsDetails[37]="Inspiration";
needsDetails[38]="Leichtigkeit";
needsDetails[39]="Ordnung";
needsDetails[40]="Wärme";
needsDetails[41]="Wertschätzung";
needsDetails[42]="SPIEL";
needsDetails[43]="Humor";
needsDetails[44]="Freude";
needsDetails[45]="VERBINDUNG";
needsDetails[46]="Akzeptanz";
needsDetails[47]="Empathie";
needsDetails[48]="Gegenseitigkeit";
needsDetails[49]="Gemeinschaft";
needsDetails[50]="Intimität";
needsDetails[51]="kennen und gekannt zu werden";
needsDetails[52]="Kommunikation";
needsDetails[53]="Mitgefühl";
needsDetails[54]="Liebe";
needsDetails[55]="Nähe";
needsDetails[56]="Nahrung";
needsDetails[57]="Respekt/Selbstrespekt";
needsDetails[58]="sehen und gesehen werden";
needsDetails[59]="Sicherheit";
needsDetails[60]="Unterstützung";
needsDetails[61]="verstehen und verstanden werden";
needsDetails[62]="Vertrauen";
//needsDetails[69]="voorkomendheid";
needsDetails[63]="Wertschätzung";
needsDetails[64]="Wärme";
needsDetails[65]="Zugehörigkeit";
needsDetails[66]="Zuneigung";
needsDetails[67]="Zusammenarbeit";
//needsDetails[56]="Zusammenarbeit";
needsDetails[68]="WOHLERGEHEN";
needsDetails[69]="Berührung";
needsDetails[70]="Bewegung";
needsDetails[71]="Luft";
needsDetails[72]="Nahrung";
needsDetails[73]="Ruhe";
needsDetails[74]="Schutz";
needsDetails[75]="Sexualität";
needsDetails[76]="Sicherheit";
needsDetails[77]="Wasser";

var requests=new Array;
requests[startRequests]="Was möchtest/kannst Du an dich selbst oder jemanden anders fragen?";
requests[startRequests+1]="Wie wäre es für Dich um ...?";
requests[startRequests+2]="Und möchtest Du ...?";
requests[startRequests+3]="Ich würde gern wissen ...";
requests[startRequests+4]="Würdest du ... machen?";
requests[startRequests+5]="Wie kommt das auf Dich 'rüber?";
requests[startRequests+6]="Was brauchst Du?";
requests[startRequests+7]="Sollen wir zusammen ...?";
requests[startRequests+8]="Würdest Du mir bitte zuhören?";
requests[startRequests+9]="Möchtest Du etwas trinken?";
requests[startRequests+10]="Wie sieht für mich ... aus?";
requests[startRequests+11]="Willst Du erzählen ...?";
requests[startRequests+12]="Ich bleibe in Verbindung mit mir selbst.";
requests[startRequests+13]="Würdest Du mir bitte sagen, wie Du mich verstanden hast?";
requests[startRequests+14]="Mein Verlangen ist ...";
requests[startRequests+15]="Hast Du andere Pläne?";
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
return "B";
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
return "B";
}
function getJudgementButtonText()
{
return "U";
}

function getNVCButtonText()
{
return "GfK";
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
return "[Beobachtung]";
}


function getFeelingUndefinedText()
{
return "[Gefühl]";
}

function getFeelingOkUndefinedText()
{
return "[Gefühl ;=) ]";
}

function getFeelingNotOkUndefinedText()
{
return "[Gefühl :=( ]";
}

function getNeedUndefinedText()
{
return "[Bedürfnis]";
}

function getRequestUndefinedText()
{
return "[Bitte]";
}

function getJudgementUndefinedText()
{
return "[Oordeel]";
}

function getStartObservation()
{
  if ( indexMode == 2) 
      return "Wenn Du "
   else
      return "Wenn ich ";
}

function getStartObservationValue()
{
return (' dass ');
}

function getStartFeeling()
{
  if ( indexMode == 2) 
      return "fühlst Du dich "
   else
      return "fühle ich mich ";
}

function getStartNeed()
{
  if ( indexMode == 2 ) 
      return "weil Du brauchst "
   else
      return "weil ich brauche ";
}


function getMailToSubject()
{
  return "NVCConnectionRequest";  
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
+' Vielen Dank für Ihre Anregungen! Wir freuen uns darüber, weil unser Bedürfnis an Verbindung und Lernen hiermit erfüllt wird. Und möglich auch wehmütig da Ihr Bedürfnis noch unerfüllt war.                        ');
}

function getCoProductionText()
{
return 'Coproduktion von';
}

function getUsingNVCText()
{
return "auf der Basis des Modells der Gewaltfreien Kommunikation von";
}

function getMailQuestionsText()
{
return "Fragen und Anregungen gerne mailen an den";
}

function getHelp()
{
   return ('Willkommen '
+ 'beim iapp CheckIn für Gewaltfreien Kommunikation! '
+ 'Möchtest Du wissen was in Dir vorgeht, drücke auf:'
+ '<br>'
+ '- B für Deine Beobachtung <br>'
+ '- G für Dein Gefühl <br>'
+ '- B für Dein Bedürfnis <br>'
+ '- B für eine Bitte an Dich selbst <br>')
}

function getInfo()
{
   return ('' + getHelp()
+ '<br/>'
+'Ein Check-in ist verbleiben bei was in Dir '
+ 'vorgeht, um Dich so mit Dir selbst in Verbindung zu setzen. '
+ '<br/>' + '<br/>'
+ 'Das GfK CheckIn app macht Dich Schritt für Schritt bewust von dem was '
+ 'los ist (Beobachtung), welche Gefühle das hervorruft, '
+ 'welche Bedürfnisse wohl oder nicht erfüllt sind '
+ 'und was Du in dieser Situation machen kannst (Bitte). '
+ '<br/>' + '<br/>' 
+ 'Drücke (mehrmals) auf die obigen Funktionstasten: '
+ '<br>'
+ '- B für Deine Beobachtung <br>'
+ '- G für Dein Gefühl <br>'
+ '- B für Dein Bedürfnis  <br>'
+ '- B für eine Bitte <br>'
+ '<br>'
+ 'Bei jedem Schritt stehen Dir eine Hilfsfrage und jeweils ein Verzeichnis mit geläufigen Beobachtungen, Gefühlen, Bedürfnissen und Bitten zur Verfügung.'
+ '<br>'
+ 'Du kannst selber eine Auswahl treffen durch mehrmals auf die BGBB Tasten zu drücken und durch die Listen zu scrollen. Oder blätter selber durch die Verzeichnisse der Scrolltaste neben dem Pfeil.'
+ '<br>'
+ 'Weiterhin kannst Du in dem Leerfeld Deine eigenen Worte hinzufügen, um die Situation spezifisch für Dich zu umschreiben.'
+ '<br>'
+ 'Der Satz, der so Schritt für Schritt entsteht, wird stets im Bildschirm aktualisiert.'
+ '<br>'
+ '<br>'
+ 'Die Tasten im unteren Bildschirm bieten die folgenden extra Möglichkeiten:'
+ '<br>'
+ '- Drücke (mehrmals) auf die GfK-Taste für mehr Informationen wie die einzelnen Schritte des Modells für Gewaltfreie Kommunikation'
+' oder Nonviolent Communication (NVC) funktionieren. Hier erfährt man auch mehr über Marshall Rosenberg, dem Grundleger dieses Modells.'
+ '<br>'
+ '- Drücke auf die Mail-Taste, um das Check-in Resultat (den eigenen Satz in GfK Format) im Logbuch zu speichern und an dich selbst oder anderen zu emailen.'
+ '<br>'
+ '- Drücke auf die Log-Taste um Dir die gespeicherten CheckIn Resultate anzuschauen und durchzublättern. Hier siehst Du was Du in anderen Situationen brauchtest und was Dir half.'
+ '<br>'
+ '- Drücke auf die Apps-Taste für andere Hilfsapps basiert auf dem GfK Modell.'
+ '<br>'
+ '<br>'
+ 'Dieser Check-in app ist eine '
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

