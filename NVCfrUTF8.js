var appName="Check-in CNV";var appTwitterTag="icheckinCNV";var appLanguage="fr";var msgComingSoon=" test), coming soon to the appstore!..................";

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
var modes=new Array;modes[1]="Exprimer honnêtement comment JE vais sans critiquer ou déclarer l'autre responsable" modes[2]="Ecouter avec empathie comment TU vas sans entendre de critique ou culpabiliser";var nrOfModes = 2;

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
var observations=new Array;observations[startObservations]="Complète l'observation en décrivant ce qui se passe de façon aussi objective que possible.";observations[startObservations+1]="vois";observations[startObservations+2]="remarque";observations[startObservations+3]="pense";observations[startObservations+4]="fais le point";observations[startObservations+5]="entends";observations[startObservations+6]="observe";observations[startObservations+7]="constate";observations[startObservations+8]="sens (odorat)";observations[startObservations+9]="découvre";observations[startObservations+10]="goûte";observations[startObservations+11]="aperçois";var nrOfObservations = 11;var feelings=new Array;feelings[startFeelings]="Comment te sens-tu en ce moment, par exemple fâché(e), triste, inquiet(e), heureux(se) ou ... ?";feelings[startFeelings+1]="INSPIRÉ(E)";feelings[startFeelings+2]="INTÉRESSÉ(E)";feelings[startFeelings+3]="JOYEUX(SE)";feelings[startFeelings+4]="PAISIBLE";feelings[startFeelings+5]="PLEIN(E) D'AFFECTION";;feelings[startFeelings+6]="PLEIN(E) D'ESPOIR";feelings[startFeelings+7]="PLEIN(E) DE GRATITUDE";feelings[startFeelings+8]="RAFRAÎCHI(E)";feelings[startFeelings+9]="REMONTE(E)";feelings[startFeelings+10]="STIMULÉ(E)";feelings[startFeelings+11]="SÛR(E) DE MOI";var nrOfFeelings = 11;var feelingsOkDetails=new Array;feelingsOkDetails[0]="INSPIRÉ(E)";feelingsOkDetails[1]="étonné(e)";feelingsOkDetails[2]="impressionné(e)";feelingsOkDetails[3]="surpris(e)";feelingsOkDetails[4]="INTÉRESSÉ(E)";feelingsOkDetails[5]="absorbé(e)";feelingsOkDetails[6]="attentif(ve)";feelingsOkDetails[7]="curieux(se)";feelingsOkDetails[8]="ébloui(e)";feelingsOkDetails[9]="fasciné(e)";feelingsOkDetails[10]="impliqué(e)";feelingsOkDetails[11]="intrigué(e)";feelingsOkDetails[12]="passionné(e)";feelingsOkDetails[13]="stimulé(e)";feelingsOkDetails[14]="vigilant(e)";feelingsOkDetails[15]="JOYEUX(SE)";feelingsOkDetails[16]="amusé(e)";feelingsOkDetails[17]="enchanté(e)";feelingsOkDetails[18]="exubérant(e)";feelingsOkDetails[19]="heureux(se)";feelingsOkDetails[20]="insouciant(e)";feelingsOkDetails[21]="réjoui(e)";feelingsOkDetails[22]="PAISIBLE";feelingsOkDetails[23]="à l'aise";feelingsOkDetails[24]="calme";feelingsOkDetails[25]="centré(e)";feelingsOkDetails[26]="comblé(e)";feelingsOkDetails[27]="content(e)";feelingsOkDetails[28]="détendu(e)";feelingsOkDetails[29]="d'humeur égale";feelingsOkDetails[30]="heureux(se)";feelingsOkDetails[31]="lucide";feelingsOkDetails[32]="posé(e)";feelingsOkDetails[33]="rassuré(e)";feelingsOkDetails[34]="satisfait(e)";feelingsOkDetails[35]="serein(e)";feelingsOkDetails[36]="soulagé(e)";feelingsOkDetails[37]="tranquille";feelingsOkDetails[38]="PLEIN(E) D'AFFECTION";feelingsOkDetails[39]="plein(e) d'amour";feelingsOkDetails[40]="plein(e) chaleur";feelingsOkDetails[41]="plein(e) de compassion";feelingsOkDetails[42]="plein(e) de douceur";feelingsOkDetails[43]="plein(e) de gentillesse";feelingsOkDetails[44]="plein(e) de tendresse";feelingsOkDetails[45]="tout(e) chaud(e)";feelingsOkDetails[46]="PLEIN(E) D'ESPOIR";feelingsOkDetails[47]="dans l'expectative";feelingsOkDetails[48]="encouragé(e)";feelingsOkDetails[49]="optimiste";feelingsOkDetails[50]="PLEIN(E) DE GRATITUDE";feelingsOkDetails[51]="ému(e)";feelingsOkDetails[52]="reconnaissant(e)";feelingsOkDetails[53]="touché(e)";feelingsOkDetails[54]="RAFRAÎCHI(E)";feelingsOkDetails[55]="rajeuni(e)";feelingsOkDetails[56]="régénéré(e)";feelingsOkDetails[57]="reposé(e)";feelingsOkDetails[58]="requinqué(e)";feelingsOkDetails[59]="stimulé(e)";feelingsOkDetails[60]="REMONTE(E)";feelingsOkDetails[61]="béat(e)";feelingsOkDetails[62]="en extase";feelingsOkDetails[63]="enjoué(e)";feelingsOkDetails[64]="enthousiaste";feelingsOkDetails[65]="excité(e)";feelingsOkDetails[66]="exubérant(e)";feelingsOkDetails[67]="passionné(e)";feelingsOkDetails[68]="ravi(e)";feelingsOkDetails[69]="transporté(e) de joie";feelingsOkDetails[70]="très gai(e)";feelingsOkDetails[71]="STIMULÉ(E)";feelingsOkDetails[72]="animé(e)";feelingsOkDetails[73]="enthousiaste";feelingsOkDetails[74]="étonné(e)";feelingsOkDetails[75]="excité(e)";feelingsOkDetails[76]="impatient(e)";feelingsOkDetails[77]="plein(e) d'ardeur";feelingsOkDetails[78]="plein(e) d'énergie";feelingsOkDetails[79]="plein(e) de passion";feelingsOkDetails[80]="revigoré(e)";feelingsOkDetails[81]="stupéfait(e)";feelingsOkDetails[82]="surpris(e)";feelingsOkDetails[83]="vivant(e)";feelingsOkDetails[84]="SÛR(E) DE MOI";feelingsOkDetails[85]="assuré(e)";feelingsOkDetails[86]="conforté(e)";feelingsOkDetails[87]="déterminé(e)";feelingsOkDetails[88]="en sécurité";feelingsOkDetails[89]="fier(e)";;feelingsOkDetails[90]="ouvert(e)";feelingsOkDetails[91]="sûr(e)";var feelings2=new Array;feelings2[startFeelings2]="Comment te sens-tu en ce moment, par exemple fâché(e), triste, inquiet(e) ou ... ?";feelings2[startFeelings2+1]="ABSENT(E)";feelings2[startFeelings2+2]="AGACÉ(E)";feelings2[startFeelings2+3]="AGITÉ(E)";feelings2[startFeelings2+4]="CONFUS(E)";feelings2[startFeelings2+5]="ÉCOEURÉ(E)";feelings2[startFeelings2+6]="FÂCHÉ(E)";feelings2[startFeelings2+7]="FATIGUÉ(E)";feelings2[startFeelings2+8]="GÊNÉ(E)";feelings2[startFeelings2+9]="IMPUISSANT(E)";feelings2[startFeelings2+10]="INQUIET(E)";feelings2[startFeelings2+11]="INSATISFAIT(E)";feelings2[startFeelings2+12]="MALHEUREUX(SE)";feelings2[startFeelings2+13]="TENDU(E)";feelings2[startFeelings2+14]="TRISTE";feelings2[startFeelings2+15]="VULNÉRABLE";var nrOfFeelings2 = 15;var feelingsNotOkDetails=new Array;feelingsNotOkDetails[0]="ABSENT(E)";feelingsNotOkDetails[1]="apathique";feelingsNotOkDetails[2]="détaché(e)";feelingsNotOkDetails[3]="distant(e)";feelingsNotOkDetails[4]="froid(e)";feelingsNotOkDetails[5]="impassible";feelingsNotOkDetails[6]="indifférent(e)";feelingsNotOkDetails[7]="plein(e) d'ennui";feelingsNotOkDetails[8]="résigné(e)";feelingsNotOkDetails[9]="sur la réserve";feelingsNotOkDetails[10]="AGACÉ(E)";feelingsNotOkDetails[11]="contrarié(e)";feelingsNotOkDetails[12]="fâché(e)";feelingsNotOkDetails[13]="frustré(e)";feelingsNotOkDetails[14]="impatient(e)";feelingsNotOkDetails[15]="irrité(e)";feelingsNotOkDetails[16]="mécontent(e)";feelingsNotOkDetails[17]="AGITÉ(E)";feelingsNotOkDetails[18]="abasourdi(e)";feelingsNotOkDetails[19]="ahuri(e)";feelingsNotOkDetails[20]="alarmé(e)";feelingsNotOkDetails[21]="apeuré(e)";feelingsNotOkDetails[22]="bouleversé(e)";feelingsNotOkDetails[23]="consterné(e)";feelingsNotOkDetails[24]="découragé(e)";feelingsNotOkDetails[25]="effrayé(e)";feelingsNotOkDetails[26]="en alerte";feelingsNotOkDetails[27]="étonné(e)";feelingsNotOkDetails[28]="inquiet(e)";feelingsNotOkDetails[29]="mal à l'aise";feelingsNotOkDetails[30]="nerveux(se)";feelingsNotOkDetails[31]="CONFUS(E)";feelingsNotOkDetails[32]="ambivalent(e)";feelingsNotOkDetails[33]="déconcerté(e)";feelingsNotOkDetails[34]="hésitant(e)";feelingsNotOkDetails[35]="incertain(e)";feelingsNotOkDetails[36]="perdu(e)";feelingsNotOkDetails[37]="perplexe";feelingsNotOkDetails[38]="stupéfait(e)";feelingsNotOkDetails[39]="ÉCOEURÉ(E)";feelingsNotOkDetails[40]="dégoûté(e)";feelingsNotOkDetails[41]="haineux(se)";feelingsNotOkDetails[42]="horrifié(e)";feelingsNotOkDetails[43]="plein(e) d'agressivité";feelingsNotOkDetails[44]="plein(e) de mépris";feelingsNotOkDetails[45]="FÂCHÉ(E)";feelingsNotOkDetails[46]="en colère";feelingsNotOkDetails[47]="enragé(e)";feelingsNotOkDetails[48]="furieux(se)";feelingsNotOkDetails[49]="indigné(e)";feelingsNotOkDetails[50]="plein(e) de rancune";feelingsNotOkDetails[51]="FATIGUÉ(E)";feelingsNotOkDetails[52]="déconfit(e)";feelingsNotOkDetails[53]="endormi(e)";feelingsNotOkDetails[54]="épuisé(e)";feelingsNotOkDetails[55]="exténué(e)";feelingsNotOkDetails[56]="sans élan";feelingsNotOkDetails[57]="sans énergie";feelingsNotOkDetails[58]="vide";feelingsNotOkDetails[59]="GÊNÉ(E)";feelingsNotOkDetails[60]="confus(e)";feelingsNotOkDetails[61]="embarrassé(e)";feelingsNotOkDetails[62]="honteux(se)";feelingsNotOkDetails[63]="mal à l'aise";feelingsNotOkDetails[64]="IMPUISSANT(E)";feelingsNotOkDetails[65]="découragé(e)";feelingsNotOkDetails[66]="démuni(e)";feelingsNotOkDetails[67]="sans espoir";feelingsNotOkDetails[68]="INQUIET(E)";feelingsNotOkDetails[69]="alarmé(e)";feelingsNotOkDetails[70]="anxieux(se)";feelingsNotOkDetails[71]="apeuré(e)";feelingsNotOkDetails[72]="bouleversé(e)";feelingsNotOkDetails[73]="effrayé(e)";feelingsNotOkDetails[74]="méfiant(e)";feelingsNotOkDetails[75]="paniqué(e)";feelingsNotOkDetails[76]="pétrifié(e)";feelingsNotOkDetails[77]="sur mes gardes";feelingsNotOkDetails[78]="INSATISFAIT(E)";feelingsNotOkDetails[79]="avide";feelingsNotOkDetails[80]="envieux(se)";feelingsNotOkDetails[81]="jaloux(se)";feelingsNotOkDetails[82]="languissant(e)";feelingsNotOkDetails[83]="nostalgique";feelingsNotOkDetails[84]="MALHEUREUX(SE)";feelingsNotOkDetails[85]="blessé(e)";feelingsNotOkDetails[86]="brisé(e)";feelingsNotOkDetails[87]="désemparé(e)";feelingsNotOkDetails[88]="misérable";feelingsNotOkDetails[89]="repentant(e)";feelingsNotOkDetails[90]="seul(e)";feelingsNotOkDetails[91]="tourmenté(e)";feelingsNotOkDetails[92]="TENDU(E)";feelingsNotOkDetails[93]="agité(e)";feelingsNotOkDetails[94]="d'humeur maussade";feelingsNotOkDetails[95]="irrité(e)";feelingsNotOkDetails[96]="nerveux(se)";feelingsNotOkDetails[97]="submergé(e)";feelingsNotOkDetails[98]="TRISTE";feelingsNotOkDetails[99]="abattu(e)";feelingsNotOkDetails[100]="attristé(e)";feelingsNotOkDetails[101]="découragé(e)";feelingsNotOkDetails[102]="déçu(e)";feelingsNotOkDetails[103]="désespéré(e)";feelingsNotOkDetails[104]="d'humeur morose";feelingsNotOkDetails[105]="malheureux(se)";feelingsNotOkDetails[106]="mélancolique";feelingsNotOkDetails[107]="navré(e)";feelingsNotOkDetails[108]="VULNÉRABLE";feelingsNotOkDetails[109]="démuni(e)";feelingsNotOkDetails[110]="incertain(e)";feelingsNotOkDetails[111]="instable";feelingsNotOkDetails[112]="sensible";var needs=new Array;needs[startNeeds]="De quoi as-tu besoin? Quel besoin est/n'est pas comblé?";needs[startNeeds+1]="AUTONOMIE";needs[startNeeds+2]="BIEN-ÊTRE PHYSIQUE";needs[startNeeds+3]="CONNEXION";needs[startNeeds+4]="HONNÊTETÉ";needs[startNeeds+5]="JEU";needs[startNeeds+6]="PAIX";needs[startNeeds+7]="SENS";var nrOfNeeds = 7;var needsDetails=new Array;needsDetails[0]="AUTONOMIE";needsDetails[1]="choix";needsDetails[2]="espace";needsDetails[3]="indépendance";needsDetails[4]="liberté";needsDetails[5]="spontanéité";needsDetails[6]="BIEN-ÊTRE PHYSIQUE";needsDetails[7]="abri";needsDetails[8]="air";needsDetails[9]="contact";needsDetails[10]="eau";needsDetails[11]="expression sexuelle";needsDetails[12]="mouvement";needsDetails[13]="nourriture";needsDetails[14]="repos/sommeil";needsDetails[15]="sécurité";needsDetails[16]="CONNEXION";needsDetails[17]="acceptation";needsDetails[18]="affection";needsDetails[19]="amour";needsDetails[20]="appartenance";needsDetails[21]="appréciation";needsDetails[22]="chaleur";needsDetails[23]="communication";needsDetails[24]="compassion";needsDetails[25]="comprendre et être compris(e)";needsDetails[26]="confiance";needsDetails[27]="connaître et être connu(e)";needsDetails[28]="coopération";needsDetails[29]="empathie";needsDetails[30]="intimité";needsDetails[31]="nourrir, entourer de soins et d'attention";needsDetails[32]="participation";needsDetails[33]="prévenance";needsDetails[34]="proximité";needsDetails[35]="réciprocité";needsDetails[36]="respect/respect de soi";needsDetails[37]="sécurité";needsDetails[38]="sens de la communauté";needsDetails[39]="soutien";needsDetails[40]="voir et être vu(e)";needsDetails[41]="HONNÊTETÉ";needsDetails[42]="authenticité";needsDetails[43]="expression de soi";needsDetails[44]="intégrité";needsDetails[45]="présence";needsDetails[46]="JEU";needsDetails[47]="humour";needsDetails[48]="plaisir";needsDetails[49]="PAIX";needsDetails[50]="appréciation";needsDetails[51]="chaleur";needsDetails[52]="confort";needsDetails[53]="harmonie";needsDetails[54]="inspiration";needsDetails[55]="ordre";needsDetails[56]="unité intérieure/guérison";needsDetails[57]="SENS";needsDetails[58]="action";needsDetails[59]="apprentissage";needsDetails[60]="célébration de la vie";needsDetails[61]="clarté";needsDetails[62]="compétence";needsDetails[63]="comprendre";needsDetails[64]="conscience";needsDetails[65]="contribuer à enrichir la vie";needsDetails[66]="créativité";needsDetails[67]="découverte";needsDetails[68]="défi";needsDetails[69]="efficacité";needsDetails[70]="espoir";needsDetails[71]="être important(e)";needsDetails[72]="évolution";needsDetails[73]="expression de soi";needsDetails[74]="faire le deuil des pertes";needsDetails[75]="participation";needsDetails[76]="percevoir mes sensations, mon ressenti";needsDetails[77]="reconnaissance";needsDetails[78]="signification";needsDetails[79]="stimulation";needsDetails[80]="volonté/énergie";var requests=new Array;requests[startRequests]="Que peux-tu/veux-tu maintenant demander, à toi-même ou à quelqu'un d'autre?";requests[startRequests+1]="Comment est-ce que ce serait pour toi de ...?";requests[startRequests+2]="Et voudrais-tu que ...?";requests[startRequests+3]="J'aimerais bien savoir ...";requests[startRequests+4]="Voudrais-tu faire ... ?";requests[startRequests+5]="Comment reçois-tu cela?";requests[startRequests+6]="De quoi as-tu besoin?";requests[startRequests+7]="Ferions-nous ensemble ...?";requests[startRequests+8]="Es-tu prêt(e) à m'écouter?";requests[startRequests+9]="Est-ce que je prépare une tasse de thé?";requests[startRequests+10]="Comment est-ce que je vois... ?";requests[startRequests+11]="Veux-tu raconter... ?";requests[startRequests+12]="Je reste en connexion avec moi-même.";requests[startRequests+13]="Veux-tu redire ce que je viens de dire, s'il te plaît?";requests[startRequests+14]="Mon désir est ...";requests[startRequests+15]="As-tu d'autres projets?";var nrOfRequests = 15;
function getObservationButtonText(){return "O";}function getFeelingButtonText(){return "S";}function getNeedButtonText(){return "B";}function getRequestButtonText(){return "D";}function getJudgementButtonText(){return "J";}function getNVCButtonText(){return "CNV";}

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

function getObservationUndefinedText(){return "[observation]";}function getFeelingUndefinedText(){return "[sentiment]";}function getFeelingOkUndefinedText(){return "[sentiment ;=) ]";}function getFeelingNotOkUndefinedText(){return "[sentiment :=( ]";}function getNeedUndefinedText(){return "[besoin]";}function getRequestUndefinedText(){return "[demande]";}

function getJudgementUndefinedText()
{
return "[Judgement]";
}
function getStartObservation(){  if ( indexMode == 2)       return "Quand tu "   else      return "Quand je ";}function getStartObservationValue(){return (' que ');}function getStartFeeling(){  if ( indexMode == 2)       return "tu te sens "   else      return "je me sens ";}function getStartNeed(){  if ( indexMode == 2 )       return "parce que tu as besoin de "   else      return "parce que j'ai besoin de ";}function getMailToSubject()
{
  return "NVC Connection Request";  
}

function getWebsiteToShare()
{
  return 'http://www.vitaliserendcommuniceren.nl/school/tools.html';
}

function getSavedText()
{
  return 'Succesfully Saved! <br/>  <br/> Tweet/share the sentence and/or link to this app.';
}
function getWebMasterText(){  return ('Remark: ... '+'                                                      '+" D'avance merci pour votre feed-back! Il nous réjouit parce qu'il nourrit notre besoin de croissance et de connexion. Et peut-être qu'il nous attriste parce le vôtre n'était pas encore satisfait. ");}function getCoProductionText(){return ('Coproduction de'
  + '<br> - Stéphanie Chantraine (Translation)' 
  );}function getUsingNVCText(){return "à l'aide du modèle de la Communication NonViolente de";}function getMailQuestionsText(){return "Questions et suggestions d'améliorations à envoyer par mail à";}function getHelp(){   return ('<br/><br/> Bienvenue '+ 'sur l’aide du Check-in Communication NonViolente! '+ '<br><br>Recherchez la connexion avec vous-même et appuyez sur:'+ '<br><br>'+ '- O pour votre observation <br><br>'+ '- S pour votre sentiment <br><br>'+ '- B pour votre besoin <br><br>'+ '- D pour votre demande à vous-même <br><br>')}
function getInfo(){   return ('' + getHelp()+ '<br/>'+'Un check-in, c’est s’arrêter et rester avec ce que vous '+ 'vivez en ce moment pour ainsi entrer en connexion avec vous-même. '+ '<br/>' + '<br/>'+ 'L’apps Check-in CNV vous permet de prendre conscience, '+ 'pas à pas, de ce qui se passe (observation), quels sentiments cela stimule, '+ 'quels besoins sont satisfaits ou non '+ 'et ce que vous pourriez faire dans cette situation (demande). '+ '<br/>' + '<br/>' + 'Appuyez (à répétition) sur les touches du haut avec la fonction: '+ '<br>'+ '- O pour votre Observation <br>'+ '- S pour votre Sentiment <br>'+ '- B pour votre Besoin <br>'+ '- D pour une Demande <br>'+ '<br>'+ 'A chaque étape, l’apps vous aide par une question et des listes d’observations, sentiments, besoins et demandes courants.'+ '<br>'+ 'Dans ces listes, vous pouvez faire votre sélection en appuyant plusieurs fois sur les touches OSBD ou en faisant tourner la molette de défilement derrière la touche avec la flèche.'+ '<br>'+ 'Vous pouvez en outre, avec le clavier, ajouter vos propres termes en appuyant sur la case vide pour adapter la formulation à votre situation spécifique.'+ '<br>'+ 'La phrase que vous composez ainsi pas à pas est continuellement mise à jour dans la fenêtre, de sorte qu’elle est toujours actuelle.'+ '<br>'+ '<br>'+ 'Les touches en bas de l’écran comportent encore plusieurs fonctions supplémentaires:'+ '<br>'+ '- Appuyez (à répétition) sur CNV pour de plus amples informations sur la façon dont fonctionnent les différentes étapes du modèle de la Communication NonViolente (CNV)'+' et sur Marshall Rosenberg, qui a développé la pensée CNV.'+ '<br>'+ '- Appuyez sur Mail pour sauvegarder le résultat de votre check-in (la phrase composée par vous-même au format CNV) dans votre journal et l’envoyer par mail à vous-même ou à quelqu’un d’autre.'+ '<br>'+ '- Appuyez sur Log (Journal) pour feuilleter les résultats de check-in que vous avez sauvegardés précédemment et relire ce dont vous aviez besoin et ce qui vous aidait auparavant.'+ '<br>'+ '- Appuyez sur Apps pour des apps supplémentaires de soutien, basés sur le modèle de la CNV.'+ '<br>'+ '<br>'+ 'Cet apps Check-in est une '+ '<br>' + getCoProductionOf())}function getMaps()
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
