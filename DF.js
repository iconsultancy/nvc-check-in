// var appLanguage="en";
// var msgComingSoon=" test), coming soon to the appstore!..................";

var previousIndexMode=indexMode;

var colorMarker = 
// 'rgba(200,150,255,1)'; 
'#ff66ff';
var colorIntention = 
'rgba(204,206,247,1)';
/* danceFrame */
var colorIntentionLight = '#99ccff';
var colorIntentionDark = 
'rgb(134,133,219)';
var colorNeed = 
'rgb(153,205,255)';
/* danceStep */
var colorNeedLight = 'ccffff';
var colorNeedDark = 
'rgb(98,136,182)';
var colorFeeling =  
'rgb(254,204,255)';
/* danceStep */
var colorFeelingLight = '#ffcccc';
var colorFeelingDark =  
'rgb(180,145,182)';
var colorJudgements =  
'rgb(238,238,238)';
/* danceStep */
var colorJudgementsLight = 'rgb(245,245,245)';
var colorJudgementsDark =  
'rgb(168,168,168)';
var colorRequestLight = 'lightgreen';
var colorRequest = 
'rgb(205,255,204)';
var colorRequestDark = 'green';
var colorInfoLight = '#ffff99';
var colorInfo = '#ff9933';
var colorInfoDark = 'orange';

modes[1]=''+getDanceFloorPosition()
+"<img align='left' src="
+getDanceFloor()
+" usemap='#dancemap' onLoad='gotoCurrentStep();' onClick='gotoCurrentStep();'/></div>"
+getDanceFloorButtons();
modes[2]=modes[1];
modes[3]=modes[1];
modes[4]=modes[1];
nrOfModes = 1;

function getOrientationWidth()
{
	xWidth = null;
/*    if(window.screen != null)
		xWidth = window.screen.availWidth;
	
    if(window.innerWidth != null)
		xWidth = window.innerWidth;
*/	
    if(document.body != null)
		xWidth = document.body.clientWidth;
	
    return xWidth;
}

function getOrientationHeight()
{
	return document.body.clientHeight;
}


function getCoordStr(x1,y1,x2,y2)
{
	/* gebruikt voor intention frame */
   var zoomFactor = 1;
   zoomFactor = getCoordZoomFactor();
   
	var strReturn = '';
   strReturn = strReturn
     +(zoomFactor*(x1+getOffSetX())) + ','
     +(zoomFactor*(y1+getOffSetY())) + ','
     +(zoomFactor*(x2+getOffSetX())) + ','        
     +(zoomFactor*(y2+getOffSetY()));

	return strReturn;
}

function getCoords(step)
{
	/* gebruikt voor steps op map */
	var zoomFactor = 1;
	zoomFactor = getCoordZoomFactor();
/*	alert('x1 '+step.x1+' y1 '+step.y1+' zoom ' + zoomFactor);
	alert('left '+zoomFactor*(step.x1-200)+' top '+zoomFactor*(step.y1-100));
*/
	return (''+(zoomFactor*(step.x1+getOffSetX()))+','
			+(zoomFactor*(step.y1+getOffSetY()))+','
			+(zoomFactor*(step.x2+getOffSetX()))+','
			+(zoomFactor*(step.y2+getOffSetY())))

}

function getOffSetX()
{
	/* gebruikt voor steps op map en intention frame */
   return offSetX;
   return 0;
}

function getOffSetY()
{
	/* gebruikt voor steps op map en intention frame */
   return offSetY;
   return 0;
}

function getOffSetMarkerX()
{
   return offSetMarkerX;
}

function getOffSetMarkerY()
{
   return offSetMarkerY;
}

function addPath(file)
{
var path='';
// alert(tryDevServerForFile);
// file existst locally
// if (tryDevServerForFile)
   path= 'http://www.vitaliserendcommuniceren.nl/dev/';
return path+file;
}

function finishHide()
{
//   alert('finishHide'+state);
   if (!DFReferenceVersion &&  
       !DFAssistedVersion)
{ 
   if (state=='N')
   {
document.getElementById('footer').style.position = "absolute";
   }
   if (state=='F1' || state=='F2')
   {
document.getElementById('footer').style.position = "absolute";
   }
}
}

function finishGo()
{
   /* alert("test"); */
   var images;
//   alert('finishGo'+state);
   if (!DFReferenceVersion &&  
       !DFAssistedVersion)
{ 
   if (state=='N')
   {
      hideStateElements();
      images =
"<img src='"+ addPath("needs1.pdf")+"' >"
+
"<img src='"+ addPath("needs2.pdf")+"' >"
+
"<img src='"+ addPath("needs3.pdf")+"' >"
;
document.getElementById('foo').innerHTML = images;
/*document.getElementById('foo').style.background = "white";*/
document.getElementById('footer').style.position = "static";
hideElement(document.getElementById('stepMarker'));
   }
   if (state=='F1' || state=='F2')
   {
      hideStateElements();
      images =
"<img src='"+ addPath("feelings.pdf")+"' >"
;
document.getElementById('foo').innerHTML = images;
document.getElementById('foo').style.background = "pink";
document.getElementById('footer').style.position = "static";
hideElement(document.getElementById('stepMarker'));
   }
	/* For iphone acceptance: */
	resizeTo(getOrientationWidth(),getOrientationHeight());
	scrollTo(0,0);
	document.body.style.width = ""+getOrientationWidth()+"px";
	var db = document.body.getElementsByTagName('div'); 
	for (var i = 0; i < db.length; i++) 
	{  /* alert(db[i].id); */ /* geen div.body */
/*		if (db[i].id != 'welcomeButtonText') 
			db[i].style.width = "320px"; 
*/	};
	var db = document.getElementsByClassName('DFHeader'); /* Geen DFBody */ 
	for (var i = 0; i < db.length; i++) 
	{	 /* alert(db[i].className); */
		db[i].style.width = ""+getOrientationWidth()-4+"px" 
	};
/*	document.getElementById('footer').style.width = "300px"; */

	if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
		if (/OS [1-3](.*) like Mac OS X/i.test(navigator.userAgent)) {
			// iOS version is <= 3.
			document.getElementById('header').style.width = ""+getOrientationWidth()-10+"px"; /* 311px veroorzaakte schuiven met menu PADDING lijkt -10px verder kijken in webinspector*/
		} else {
			// iOS version is > 3.
			document.getElementById('header').style.width = ""+getOrientationWidth()+"px"; /* 311px veroorzaakte schuiven met menu PADDING lijkt -10px verder kijken in webinspector*/
		}
	}
	
	if (navigator.userAgent.indexOf('Android') >0) {		
		document.getElementById('header').style.width = ""+getOrientationWidth()-20+"px"; /* helpt niet voor Android, TODO: verder uitzoeken*/
	}	
	
	/* alert(document.getElementById('header').style.width); */
	document.getElementById('page').style.width = ""+getOrientationWidth()+"px"; /* 310 helpt niet, het is niet 1 van de div's */
	document.getElementById('foo').style.backgroundColor = "grey"; /* helpt niet, het is niet 1 van de div's */
	document.getElementById('page').style.backgroundColor = "grey"; /* helpt niet, het is niet 1 van de div's */
	/* in go(state)
	displayElement(document.getElementById('pagerHeader'));
	displayElement(document.getElementById('pagerPage')); */
	document.getElementById('pagerPage').style.margin = "0px 0px 0px 0px"; /* helpt niet, het is niet 1 van de div's */
	document.getElementById('pagerPage').style.padding = "0px 0px 0px 0px"; /* helpt niet, het is niet 1 van de div's */
	

	
    document.body.style.margin = "0px 0px 0px 0px";
	document.body.style.padding = "0px 0px 0px 0px"; /* help niet, dus het moet iets zijn, wat een bredere rand dan header veroorzaakt */
	/* NB Bij feelings.pdf ook breedte verkleinen net als bij Header helpt ook ! 
	 Staat nu iets teveel aan, nog iets mee doen, via plaatjes daarna groene rand proberen weg te halen */
/*	document.getElementById('foo').style.width = "300px"; */
/*    alert(document.documentElement.clientWidth);
	alert(window.innerWidth);
	alert(document.body.clientWidth);
	alert(screen.width); 
	alert(document.width); */ /* This is the one that gets changed, now trace it untill change found ! */
/*	alert(getCoordZoomFactor());
	alert(getDanceFloorZoom()); */
/*	document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=0.5; maximum-scale=0.5; user-scalable=0;");
*/
 if ( navigator.userAgent.indexOf('Android') >0)
 {
 //  alert('iPad || Android');

  var video1 = document.getElementById('video1');
  video1.addEventListener('click', function(){
/*    alert('video clicked'); */
    video1.play();
    },false);
/*  var video2 = document.getElementById('video2');
	 video2.addEventListener('click', function(){
	alert('video clicked');
	video2.play();
	},false);
*/	 
  }    
}
}

function getState(step)
{
   return step.state.name;
}

function setModePicture()
{
document.body.style.fontFamily = 'Trebuchet MS';
document.getElementById('header').style.backgroundImage=('-webkit-gradient(linear,left top,left bottom,from(white), to('
+getDanceFloorColor()
+'))');
document.body.style.backgroundImage=('-webkit-gradient(linear,left top,left bottom,from(white), to('
															 +getDanceFloorColor()
															 +'))');
/*
document.body.style.backgroundColor=getDanceFloorColor();
 */
/* Grijze streep onder aan dancefloor app wordt veroorzaakt door div.body background colour
 in style deel van index. html, voorloopig zo gelaten */
var db = document.body.getElementsByTagName('div'); 
for (var i = 0; i < db.length; i++) 
{ /*alert(db[i].id);*/
	if (db[i].id != 'welcomeButtonText' && db[i].id != 'stepMarker') 
		db[i].style.backgroundColor = getDanceFloorColor(); 
};
	
if (navigator.userAgent.indexOf('Android') >0)
{
	document.getElementById('DFWelcomeHeader').style.margin='-35px 0 0 0';
}

/*
document.getElementById('modeSection').innerHTML=getModePicture();
*/
// alert('setmode');
hideElement(document.getElementById('sentence'));
   if (DFReferenceVersion || DFAssistedVersion) 
{
hideElement(document.getElementById('OFNRButtons'));
/* temporay disabled for Festival 
displayElement(document.getElementById('prepareButtons'));
displayElement(document.getElementById('PrepButton'));
displayElement(document.getElementById('JackButton'));
displayElement(document.getElementById('GiraButton')); */
hideElement(document.getElementById('footer'));
}
else /* ChartOnlyVersion */
{
displayElement(document.getElementById('JButton'));
hideElement(document.getElementById('SButton'));
hideElement(document.getElementById('OFNRButtons'));
hideElement(document.getElementById('footer'));
/* not working: removes infoPages
hideElement(document.getElementById('header'));

document.getElementById('header').style.backgroundColor='red';
document.getElementById('header').style.margin='0px 0 0 0';

not working because of room left on page ?
document.getElementById('footer').style.padding='0px 0 0 0'; 
*/

document.getElementById('header').style.padding='0px 0 0 0';
document.getElementById('foo').style.padding='0px 0 0 0';
}
if (document.getElementById('stepMarker') != null)
 displayElement(document.getElementById('stepMarker'));	
}

function gotoOFNRButtons(buttonGo)
{
displayElement(document.getElementById('sentence'));
displayElement(document.getElementById('OFNRButtons'));
hideElement(document.getElementById('prepareButtons'));
hideElement(document.getElementById('stepMarker'));
   if (currentStep.mode != previousOFNRmode)
   {
      initSentence();
previousOFNRmode = currentStep.mode
   }
  go(buttonGo);
}

function gotoDanceFloor()
{
//  previousIndexMode=indexMode;
//  indexMode=3;
  setModePicture();
  go(1);
}

function gotoCurrentStep()
{
//   alert('loadEvent');
   setModePicture();
   showIntention();
   if (DFReferenceVersion || DFAssistedVersion) 
{
displayElement(document.getElementById('OFNRButtons'));
   if (DFReferenceVersion) 
     showMode(currentStep.mode.index);
}
   showStep(currentStep);
}

function gotoStep(step)
{
//   alert('gotoStep' +step.state.name
//    +'from'+currentStep.state.name);
   if (currentStep == step)
   {
     // alert('equal');
     indexMode=step.mode.index;
     if (DFAssistedVersion)
        gotoOFNRButtons(step.state.go);
   }
   else
   {
   if (currentStep.mode != step.mode)
   {
      logSentence();
      if (DFReferenceVersion)
        showMode(step.mode.index);
   }
   previousStep = currentStep;
   currentStep = step;
   showStep(step);
   }
}

function showStep(step)
{
if (step.nrOfTextShows < 1)
{
   if (DFReferenceVersion) 
      alert(step.text);
   step.nrOfTextShows++;
}
//   alert('before'+step.state.name + ' show');
/*
    alert('x1 '+step.x1+' y1 '+step.y1+' zoom ' + getDanceFloorZoom()+' stepH ' +stepH+' stepW ' +stepW+' stepdH ' +stepdH);
	alert('left '+getDanceFloorZoom()/100*(step.x1+getOffSetMarkerX())+' top '+getDanceFloorZoom()/100*(step.y1+getOffSetMarkerY()+stepH+stepdH));
*/
 document.getElementById('modeSection').innerHTML="<div id='stepMarker' onClick='gotoStep(currentStep);' style='position:absolute; left:"
+getDanceFloorZoom()/100*(step.x1+getOffSetMarkerX())
+"; top:"+getDanceFloorZoom()/100*(step.y1+getOffSetMarkerY()+stepH+stepdH)
+"; width: "
+getDanceFloorZoom()/100*stepW+"; height: "
+getDanceFloorZoom()/100*stepH+"; z-index: 1; border: "+
+getDanceFloorZoom()/100*5+ "px solid "
+colorMarker+";'><p> </p></div>";
	document.getElementById('modeSection').innerHTML="<div id='stepMarker' onClick='gotoStep(currentStep);' style='position:absolute; left:"
	+getDanceFloorZoom()/100*(step.x1+getOffSetMarkerX())
	+"; top:"+getDanceFloorZoom()/100*(step.y2+getOffSetMarkerY())
	+"; width: "
	+getDanceFloorZoom()/100*(step.x2-step.x1)+"; height: "
	+getDanceFloorZoom()/100*(step.y2-step.y1)+"; z-index: 1; border: "+
	+getDanceFloorZoom()/100*5+ "px solid "
	+colorMarker+";'><p> </p></div>";	
}

function showMode(indexMode)
{
   switch (indexMode) {
case 0:
{ showModeConnectWithMyself(); }
break;
case 1:
{ showModeConnectWithMyself(); }
break;
case 2:
{ showModeReceivingOthers(); }
break;
case 3:
{ showModeExpressingMyself(); }
break;
default:
break;
}
}

function getModePicture()
{
  strReturn='';
  switch (indexMode)
   {
case 0:
{
strReturn="<img src='dancefloor13stappenSmallC.jpg' onClick='gotoDanceFloor();'>";  
}
break;
case 1:
{
strReturn="<img src='dancefloor13stappenSmallC.jpg' onClick='gotoDanceFloor();'><!--img  src='dancefloor13stepsC.jpg' onClick='indexMode=3;go(1)'-->"; 
}
break;
case 2:
{
strReturn="<img src='dancefloor13stappenSmallL.jpg' onClick='gotoDanceFloor();'><!--img  src='dancefloor13stepsL.jpg' onClick='indexMode=3;go(1)'-->"; 
}
break;
case 3:
{
strReturn="<img  src='dancefloor13stappenSmallE.jpg' onClick='gotoDanceFloor();'><!--img  src='dancefloor13stepsE.jpg' onClick='indexMode=3;go(1)'-->"; 
}
break;
default:
break;
}
  return strReturn; 
}

function showIntentionText()
{
return("Within this purple frame it is my intention to establish a quality of connection that leads to everyone's needs being met peacefully.");
}

function showIntentionTextNL()
{
return("Binnen dit paarse lint is mijn intentie om een kwaliteit van verbinding te bereiken die leidt tot op harmonieuze wijze vervullen van ieders behoefte.");
}

function showModeReceivingOthersText()
{
return("Receiving others: In this mode I choose to listen empathically and focus my intention on what is alive in the other person. Especially receiving feelings and needs will establish the desired life-connecting information flow.");
}

function showModeReceivingOthersTextNL()
{
return("Ontvangen van de ander: In deze modus kies je ervoor om empathisch te luisteren en open te staan om met name de gevoelens en behoeften van de ander te ontvangen.");
}

function showModeExpressingMyselfText()
{
return("Expressing myself: In this mode I choose to express myself honestly, by sharing my observation, feeling and/or need; optionally combined with a explicit request to the other, to meet my need, followed by the question asking if the other person is willing to fulfill this request.");
}

function showModeExpressingMyselfTextNL()
{
return("Eerlijk uiten: In deze modus kies ik ervoor om mezelf eerlijk te uiten door mijn waarneming, gevoel en/of behoefte te delen, evt gecombineerd met een expliciet verzoek aan de ander om tegemoet te komen aan mijn behoefte, met de vraag of de ander bereid is hier aan te voldoen.");
}

function showModeConnectWithMyselfText()
{
return("Connecting with myself: in this mode I connect (inside, without another person hearing it) with my judgments, my observation (trigger for my judgments and current feeling), my feeling and the underlying need."
+ "To fulfill this need I can connect myself with a request to myself, to change the mode to 'expressing myself', to 'receiving others' or to spend more time in 'connecting with myself'.");
}

function showModeConnectWithMyselfTextNL()
{
return("Verbinden met mijzelf: in deze modus verbind ik mij (van binnen, zonder dat de ander het hoort) met mijn oordelen, mijn waarneming (trigger voor mijn oordelen en mijn huidig gevoel), mijn gevoel en de achterliggende behoefte."
+ "Om deze behoefte te vervullen kan ik mij verbinden met een verzoek aan mezelf om van modus te veranderen en mezelf te uiten, of de ander te ontvangen of mij eerst nog meer metezelf te verbinden.");
}

function showDanceOverview()
{
// alert('showDanceOverview');
   if (DFReferenceVersion || DFAssistedVersion) 
      alert(showDanceOverviewText());
}

function showCurtain()
{
// alert('showCurtain');
   if (DFReferenceVersion || DFAssistedVersion) 
      alert(showCurtainText());
}

function showCurtainText()
{
return("Behind/below this curtain, I connect with my self without the role-player hearing it.");
}

function showInner()
{
// alert('showInner');
alert(showInnerText());
}

function showInnerText()
{
return("In the inner part of the process, I connect with my self without the role-player hearing it.");
}

function showOuter()
{
// alert('showOuter');
alert(showOuterText());
}

function showOuterText()
{
return("In the outer part of the process, I try to establish/practice a dialogue flowing between myself and the role player.");
}

function getStepMap(step)
{
var strReturn='';
strReturn=strReturn
+"<area alt='frame"
+getStepName(step)
+"' shape='rect' coords="
+getCoords(step)
+" href='javascript:gotoStep("
+getStepName(step)
+");'/>"
return strReturn;
}

function testPrompt()
{
 prompt('testYesWaarnemingNoGevoel'
,go(2),go(3));
}

function getStepName(step)
{
/*   alert ('step'
+step.mode.name
+step.state.name); */
   return ('step'
+step.mode.name
+step.state.name)
}

function getNVCButtonText()
{
return "DF"; //"DV";
}

function getCoProductionDFOf()
{
   return (getCoProductionText()
+"<br>- <a style='color: blue; text-decoration: underline' href='http://iconsultancypress.wordpress.com/'>iConsultancy</a> (Martijn Ceelen)<br>- <a style='color: blue; text-decoration: underline' href='http://www.nvcdancefloors.com/'>The NVC Dance Floors</a> (Bridget Belgrave) <br>"
+getUsingNVCText()+" Marshall Rosenberg <a style='color: blue; text-decoration: underline' href='http://www.cnvc.org'>CNVC</a>. <br/><br/>"
+getMailQuestionsText()+" <a style='color: blue; text-decoration: underline' href='javascript:location.href=getMailToWebMaster()'>appmaster</a>.");
}

function getDanceFloorButtons()
{
   return getIntentionButton() 
             +getInfoButton()
             +getDFFeelingsButton()
             +getDFJudgementsButton()
            +getDFNeedsButton();
}

function getDFJudgementsButton()
{
   return(
"<div id='DFJudgementsButton' onClick='goPager(125);scrollTo(0,0);' style='position:absolute; left:"
+(getDanceFloorZoom()/100*190-15)
+"; top:"+(10)+"; width: "+ (90-(940/getDanceFloorZoom())) +"; height: "+(35-(470/getDanceFloorZoom()))+"; z-index: 1; border: 2px solid "
+colorJudgementsDark
+";  -webkit-border-radius: 5px"
+"; background-color: "
+colorJudgements
+";  background-image: -webkit-gradient(linear,left top,left bottom,from("
+colorJudgements
+"), to("
+colorJudgementsDark
+ "))"
+";'><p style='font-size: "
+(13-(100/getDanceFloorZoom()))
+"px;padding:0;margin:5px'>judgements</p></div>");
}

function getDFFeelingsButton()
{
   return(
"<div id='DFFeelingsButton' onClick='goPager(123);scrollTo(0,0);' style='position:absolute; left:"
+(getDanceFloorZoom()/100*300+15)+"; top:"+(10)
+"; width: "+(65-(470/getDanceFloorZoom()))+"; height: "
+(35-(470/getDanceFloorZoom()))+"; z-index: 1; border: 2px solid "
+colorFeelingDark
+";  -webkit-border-radius: 5px"
+"; background-color: "
+colorFeeling
+";  background-image: -webkit-gradient(linear,left top,left bottom,from("
+colorFeeling
+"), to("
+colorFeelingDark
+ "))"
+";'><p style='font-size: "
+(13-(100/getDanceFloorZoom()))
+"px;padding:0;margin:5px'>feelings</p></div>");
}

function getDFNeedsButton()
{
   return(
"<div id='DFNeedsButton' onClick='goPager(124);scrollTo(0,0);' style='position:absolute; left:"
+(getDanceFloorZoom()/100*400+35)
+"; top:"+(10)+"; width: "+ (80-(1880/getDanceFloorZoom())) + "; height: "+(35-(470/getDanceFloorZoom()))+"; z-index: 1; border: 2px solid "
+colorNeedDark
+";  -webkit-border-radius: 5px"
+"; background-color: "
+colorNeed
+";  background-image: -webkit-gradient(linear,left top,left bottom,from("
+colorNeed
+"), to("
+colorNeedDark
+ "))"
+";'><p style='font-size: "
+(13-(100/getDanceFloorZoom()))
+"px;padding:0;margin:5px'>needs</p></div>");
}

function getInfoButton()
{
   return(
"<div id='infoButton' onClick='goPager(1);scrollTo(0,0);' style='position:absolute; left:"
+(getDanceFloorZoom()/100*500+40)
+"; top:"+(10)+"; width: "+ (85-(2350/getDanceFloorZoom())) +"; height: "+(35-(470/getDanceFloorZoom()))+"; z-index: 1; border: 2px solid "+colorInfoDark
/*+"; color: blue;font-family: Comic MS Sans" */
+"; background-color: "
+colorInfo
+";  -webkit-border-radius: 5px"
+";  background-image: -webkit-gradient(linear,left top,left bottom,from("
+colorInfoLight
+"), to("
+colorInfo
+ "))"
+";'><p style='font-size: "
+(13-(100/getDanceFloorZoom()))
+"px;padding:0;margin:5px'>info</p></div>");
//+";'><img src='info.gif'></img></div>");
}

function getIntentionButton()
{
   return(
"<div id='intentionButton' onClick='goPager(122);scrollTo(0,0);' style='position:absolute; left:"
+(getDanceFloorZoom()/100*100-40)+"; top:"+(10)+"; width: "+ (60-5)+ "; height: "+(35-(470/getDanceFloorZoom()))+"; z-index: 1; border: 2px solid "
+colorIntentionDark
+";  -webkit-border-radius: 5px"
+";  background-image: -webkit-gradient(linear,left top,left bottom,from("
+colorIntention
+"), to("
+colorIntentionDark
+ "))"
+";'><p style='font-size: "
+(13-(100/getDanceFloorZoom()))
+"px;padding:0;margin:5px'>intention</p></div>");
}

function getCurrentPagerHeader()
{
var strDFHeader = '';
var strPagerButtons = '';

if (currentPagerPage!='0')
{
   strDFHeader = getDFHeader();
   strPagerButtons =
'<div id="pagerButtons">' 
+'<ul>'
+'<li id="pagerButton" onClick="goBackOnePage()">';
if (currentPagerPage!='1')	
	strPagerButtons = strPagerButtons +'Back';
else
	strPagerButtons = strPagerButtons +'Home';
	strPagerButtons = strPagerButtons 
+'</li>'
+'<li id="pagerButtonBack" onClick="goPager(1)">'
+'Info'
+'</li>'
+'</ul>'
+'</div>'
} 

	return (
			"<div "+ "style='width: " + getOrientationWidth() + ";'" + ">"+		   
			strDFHeader
			+"</div>"		   
			+ strPagerButtons
			);
}

var currentPagerPage = 1;
var previousPagerPage = 1; 

function goPager(strPage)
{
//  alert('goPager: '+strPage);
if (document.getElementById('stepMarker') != null)
 hideElement(document.getElementById('stepMarker'));
  previousPagerPage = currentPagerPage;
  currentPagerPage = strPage;
  go(15);
}

function goBackOnePage()
{
  var backPage=0;
/*  alert(currentPagerPage); */
  if (currentPagerPage != 1)
  {
    backPage= Math.floor(currentPagerPage/10);  
  }
/*	alert(backPage);
	alert(previousState);
*/
  if ((previousState 
       == 'Pager')
      || 
      (currentPagerPage 
       == 1)
	  || 
      (currentPagerPage 
       == 2))
    goPager(backPage);
  else 
    go(1);    
}

function getCurrentPagerPage()
{
//  alert('getCurrentPagerPage: '+currentPagerPage);
var strReturn;	
if (currentPagerPage==0)
  strReturn = getHelp();    
if (currentPagerPage==1)
  strReturn = getInfoMenu();
if (currentPagerPage==2)
  strReturn = 'Videos<br/><br/>'              
    + getUsageVideo();
if (currentPagerPage==11)
  strReturn = 'Tips for using this app<br/><br/>'              
    + getAppTips();
if (currentPagerPage==12)
  strReturn = 'Overview of NVC<br/><br/>'+getOverviewNVCMenu();
if (currentPagerPage==13) 
  strReturn = 'The NVC Dance Floors<br/><br/>' + getDanceFloorIntroPagesPdf();
if (currentPagerPage==14)
  strReturn = 'NVC Dance Floors: products<br/><br/>'              
    + getDanceFloorResourcesPdf();
if (currentPagerPage==15)
  strReturn = 'NVC Dance Floors: apps <br/><br/>'              
    + getOtherDFApps();
if (currentPagerPage==16)
  strReturn = 'iConsultancy: NVC apps <br/><br/>'             
    + getOtherNVCApps();
if (currentPagerPage==121)
  strReturn = 'NVC explained<br/><br/>'
            + getNVCOverviewPdf();
if (currentPagerPage==122)
  strReturn = 'Intention<br/><br/>'
            + getIntentionPdf();
if (currentPagerPage==123)
  strReturn = 'Feelings<br/><br/>' 
            + getFeelingsPdf();
if (currentPagerPage==124)
  strReturn = 'Needs<br/><br/>'
            + getNeedsPdf();
if (currentPagerPage==125)
  strReturn = 'Judgements<br/><br/>'
            + getJudgementsPdf();
/*	return ("<div style='width: 320px;'>"+strReturn+"</div>");	*/
	return ("<div>"+strReturn+"</div>");	
}

function getUsageVideo()
{	
	images = "";
	images = images	
    +'</br>'
	+'Clip from a professional video about the NVC Dance Floors'
    +'</br>'
    +'</br>'
	+'<div>'
	+'<!-- video width="320" height="480" autoplay controls -->'
/*	+'<video poster="introfilm_for_APP.jpg" width="200" height="160" src="introfilm_for_APP.mp4" controls>' */
	+'<video id="video1" autobuffer poster="introfilm_for_APP.jpg" width="200" height="160" src="introfilm_for_APP.m4v" controls>' 
	+'Your browser does not support the videoplayer.'
	+'</video>'
	+'</div>'	
    +'</br>'
	+'Short home-made video about this App, by the developer'
    +'</br>'
    +'</br>'
	+'<div style="border: 0;">'
	+'<!-- video width="320" height="480" autoplay controls -->'
/*	+'<video poster="iphoneAppUsageEND.jpg" width="158" height="210" src="iphoneAppUsage.mp4" controls>' */
	+'<video id="video2" autobuffer poster="iphoneAppUsageEND.jpg" width="158" height="210" src="iphoneAppUsage.m4v" controls>' 
	+'Your browser does not support the videoplayer.'
	+'</video>'
	+'</div>';
	return images;
}

function getDanceFloorResourcesPdf()
{
 var images;
 var imageWidth = 656;	
/*
  images = "<img src='"+ addPath("dancefloorproducts1.png")+"' >" */
	
  images = "<div "
  images = images + "style='zoom: "+
 	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
  images = images	
  +  "<img src='dancefloorproducts1.png' >" 
  + "<h1> </h1>"
  +  "<img src='dancefloorproducts2.png' >"
  + "</div>";
  return images;
}

function getDanceFloorIntroPagesPdf()
{
  var images;
  var imageWidth = 930;	
  
  images = "<div "
  images = images + "style='zoom: "+
 	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
  images = images	
  + "<img src='DanceFloorIntroPages1.png' >" 
  + "<h1> </h1>"
  +  "<img src='DanceFloorIntroPages2.png' >"
  + "</div>";
  return images;
}

function getNVCOverviewPdf()
{
  var images;
  var imageWidth = 660;	

  images = "<div "
  images = images + "style='zoom: "+
 	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
  images = images	
  + "<img src='NVCOverview1.png' >" 
	/*  + "<h1> <br/> <br/> </h1>" */
  + "<h1> </h1>"
  +  "<img src='NVCOverview2.png' >" 
  + "<h1> </h1>"
  + "<img src='NVCOverview3.png' >"
  + "<h1> </h1>"
  + "<img src='NVCOverview4.png' >" 
  + "<h1> </h1>"
  +  "<img src='NVCOverview5.png' >" 
  + "<h1> </h1>"
  +  "<img src='NVCOverview6.png' >" 
  + "<h1> </h1>"
  + "<img src='NVCOverview7.png' >"
  + "<h1> </h1>"
  + "<img src='NVCOverview8.png' >" 
  + "<h1> </h1>"
  +  "<img src='NVCOverview9.png' >" 
  + "<h1> </h1>"
  + "<img src='NVCOverview10.png' >"
  + "<h1> </h1>"
  + "<img src='NVCOverview11.png' >"
  + "<h1> </h1>"
  + "<img src='NVCOverview12.png' >"
  + "</div>";
 return images;
}

function getFeelingsPdf()
{
 var images;
 var imageWidth = 770;	
 images = "<img src='Feelings.png' style='zoom: "+
	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>"; 
 return images;
}

function getNeedsPdf()
{
  var images;
  var imageWidth = 650;	

	images = "<img src='Needs1.png' style='zoom: "+
	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
	+ "<h1> </h1>"
	+  "<img src='Needs2.png' style='zoom: "+
	(100*getOrientationWidth()/imageWidth)+"%; margin: "+0+"px "+0+"px;'>"  
	+ "<h1> </h1>"
	+ "<img src='Needs3.png' style='zoom: "+
	(100*getOrientationWidth()/imageWidth)+"%; margin: "+0+"px "+0+"px;'>" ;   
	return images;
}

function getJudgementsPdf()
{
 var images;
 var imageWidth = 600;	

	images = "<img src='Judgements.png'style='zoom: "+
	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>"; 
	return images;
}

function getOverviewNVCMenu()
{
   return(
/* 'Overview NVC menu '
+ '<br/>'
+'<br/>'
+ */
'<div id="welcomeList">'
+'<ul>'
+'<li onClick="goPager(121)"'
+'>'
+'NVC explained'
+'</li>'
+'<li onClick="goPager(122)"'
+'>'
+'Intention'
+'</li>'
+'<li onClick="goPager(123)">'
+'Feelings'
+'</li>'
+'<li onClick="goPager(124)">'
+'Needs'
+'</li>'
+'<li onClick="goPager(125)">'
+'Judgmental language'
+'</li>'
+'</ul>'
+'</div>'
);
}

function getInfoMenu()
{
   return('Info menu '
+ '<br/>'
+'<br/>'
+'<div id="welcomeList">'
+'<ul>'
+'<li onClick="goPager(11)">'
+'Tips for using this app'
+'</li>'
+'<li onClick="goPager(12)">'
+'Overview of NVC'
+'</li>'
+'<li onClick="goPager(13)"'
+'>'
+'The NVC Dance Floors'
+'</li>'
+'<li onClick="goPager(14)">'
+'NVC Dance Floors: products'
+'</li>'
+'<li onClick="goPager(15)">'
+'NVC Dance Floors: apps'
+'</li>'
+'<li onClick="goPager(16)">'
+'iConsultancy: NVC apps'
+'</li>'
+'<li onClick="go(1)">'
+'Dance your Dance!'
+'</li>'
+'</ul>'
+'</div>'
// + getHelpImg()
);
// return (getHelpImg())
}

function getDFWelcomeHeader()
{
	var strWelcomeHeader = '';
	strWelcomeHeader = strWelcomeHeader
	+ '<div class="DFHeader" id="DFWelcomeHeader" ';

	if (navigator.userAgent.indexOf('Android') >0) {		
		strWelcomeHeader = strWelcomeHeader 	
		+ 'style="font-family: DroidSerif;font-size: 25px; font-type: italic;font-weight: normal; margin: 0px 0px -15px 0px;font-">NVC Dance Floors</div>';
	}
	else {
	strWelcomeHeader = strWelcomeHeader 	
	/* + 'style="font-family: Zapfino, DroidSerif;font-size: 14px; margin: 0px 0px -15px 0px;font-">The NVC Dance Floors</div>' */
		+ 'style="font-family: Zapfino, DroidSerif;font-size: 19px; margin: 0px 0px -15px 0px;font-">NVC Dance Floors</div>';
	}
return (strWelcomeHeader);
	
}

function getDFWelcomeFooter()
{
return ( 
''
/*+'<div style="background-image: -webkit-gradient(linear,left top,left bottom,from(ffccff), to(ff99ff));"  class="DFHeader"'
+'>'
+'Apps by Bridget Belgrave <br/> and Martijn Ceelen'
+'</div>'
*/); 
}

function getDFHeader()
{
	var strHeader = '';
	strHeader = strHeader 
	if (navigator.userAgent.indexOf('Android') >0) {		
		strHeader = strHeader 
		+'<div style="font-size: 20px;color:white;background-image: -webkit-gradient(linear,left top,left bottom,from('
	}
	else {
		strHeader = strHeader 
		+'<div style="color:white;background-image: -webkit-gradient(linear,left top,left bottom,from('
	}
	strHeader = strHeader 
	+getDanceFloorColor()
	+'), to('
	+getDanceFloorColor()
	+'));"  class="DFHeader" id="DFPagerHeader" '
	+'>'
	+getDanceHeaderText()
	+'</div>';
	
return (strHeader);
}

function getOtherDFApps()
{
   return(
'<div class="DFBody"><br/>'
+'NVC Dance Floor Apps will be  available for: '
+ '<br/>'
+ '<br/>'
+ 'iPhone, iPod, iPad and Android based Devices'
+ '<br/>'
+ '<br/><i>'
+ 'in two versions:'
+ '</i><br/>'
+ '<br/><i>'
+ '[Chart] version'
+ '</i><br/>'
+ 'for people already familiar'
+ '<br/>'
+ 'with the NVC Dance Floors'
+ '<br/>'
+ '<br/><i>'
+ '[How to] version'
+ '</i><br/>'
+ 'for people wanting step by step guidance'
+ '<br/>'
+ 'about how to use the NVC Dance Floors'
+ '<br/>'
+ '<br/><i>'
+ 'Apps available (or in development) :'
+'</i><br/>'
+ '<br/>'
// +'<ul>' causes grey background
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'13 Step Chart'
+"</div><div id='welcomeButtonImage'><img src='iNVCInnerOuterChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'13 Step How To'
+"</div><div id='welcomeButtonImage'><img src='iNVCInnerOuterReference.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Anger/Shame Chart'
+"</div><div id='welcomeButtonImage'><img src='iNVCAngerChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Self Empathy Chart'
+"</div><div id='welcomeButtonImage'><img src='iNVCSelfEmpathyChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Yes/No Chart'
+"</div><div id='welcomeButtonImage'><img src='iNVCYesNoChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Educator/Chooser Ch.'
+"</div><div id='welcomeButtonImage'><img src='iNVCEducatorChooserChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Transforming Pain Ch.'
+"</div><div id='welcomeButtonImage'><img src='iNVCPainChartOnly.jpg'></img></div>"
+'</li>'
+'<li id="welcomeButton"  onClick="getVCToolsLink(2);"'
+'><div id="welcomeButtonText">'
+'Info on all apps'
/* +"<img 
src='iNVCCheckInNVCnl.png'></img>" */
+'</div></li>'
+'</ul>'
+ 'The NVC Dance Floor Apps were created by Bridget Belgrave (co-creator of the NVC Dance Floors) and Martijn Ceelen (developer and trainer at iConsultancy and the School voor Vitaliserend Communiceren). The NVC Dance Floors are based on the Nonviolent Communication (NVC) process developed by Marshall Rosenberg.'
+ '<br/>'
+'</div>'
);
// return (getHelpImg())
}

function getOtherNVCApps()
{
   return(
'<div class="DFBody"><br/>'
+'Other NVC Apps are  available for: '
+ '<br/>'
+ '<br/>'
+ 'Mobile and Desktop Devices'
+ '<br/>'
+ '<br/><i>'
+ 'in two versions:'
+ '</i><br/>'
+ '<br/><i>'
+ '[Paid] Check In version'
+ '</i><br/>'
+ 'of the NVC model for mobile phones'
+ '<br/>'
+ 'giving OFNR support in many languages'
+ '<br/>'
+ '<br/><i>'
+ '[Free] desktop version'
+ '</i><br/>'
+ 'giving basic OFNR support'
+ '<br/>'
+ 'for any type of device in English and Dutch'
+ '<br/>'
+ '<br/><i>'
+ 'Apps available (or in development) :'
+'</i><br/>'
+ '<br/>'
+'</ul>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'NVC Check-In'
+"</div><div id='welcomeButtonImage'>"
+"<img src='iNVCCheckInNVCen.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'GfK Check-In'
+"</div><div id='welcomeButtonImage'>"
+"<img src='iNVCCheckInNVCde.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'Check-In CNV'
+"</div><div id='welcomeButtonImage'>"
+"<img src='iNVCCheckInNVCfr.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'iGCCheckIn'
+"</div><div id='welcomeButtonImage'>"
+"<img src='iNVCCheckInNVCnl.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'Any device English'
+"</div><div id='welcomeButtonImage'>"
+"<img src='i4ringEng.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"   onClick="getVCToolsLink(1);"'
+'><div id="welcomeButtonText">'
+'Any device Dutch'
+"</div><div id='welcomeButtonImage'>"
+"<img src='iVCBalansCheck.png'></img>"
+'</div></li>'
+'<li id="welcomeButton"  onClick="getVCToolsLink(1);"'
/*+ 'getVCToolsLink("http://www.vitaliserendcommuniceren.nl/school/tools.html");' 
*/
/*
 'alert("http://www.vitaliserendcommuniceren.nl/school/tools.html");'
*/ 
/*'openUrl("http://www.vitaliserendcommuniceren.nl/school/tools.html");'*/
/*   'window.location = "http://www.vitaliserendcommuniceren.nl/school/tools.html");' */
+'><div id="welcomeButtonText">'
+'Info on all apps'
+"</div>"
/* +"<img 
src='iNVCCheckInNVCnl.png'></img>" */
+'</li>'
+'</ul>'
+ 'The Check In Apps were created by Martijn Ceelen (developer and trainer at iConsultancy and the School voor Vitaliserend Communiceren), Martin van der Meulen (NVC Certified Trainer at Ai-opener) and Beatrice Nattermuller (NVC Trainer at 4Ring). All NVC apps  are based on the Nonviolent Communication (NVC) process developed by Marshall Rosenberg.'
+ '<br/>'
+'</div>'
);
// return (getHelpImg())
}

function getVCToolsLink(txt)
{ 
/*  alert(txt); */
/*  openUrl(txt); */
if (txt==1)
/*window.location = "http://www.vitaliserendcommuniceren.nl/school/tools.html";*/
	window.open("http://www.vitaliserendcommuniceren.nl/school/tools.html");	
if (txt==2)
/*window.location = "http://www.vitaliserendcommuniceren.nl/school/NVC-DanceFloors-Apps.html";*/
	window.open("http://www.vitaliserendcommuniceren.nl/school/NVC-DanceFloors-Apps.html");	
}







