appName="NVC Inner-Outer Dance Floor";
var appTwitterTag="iNVCInnerOuterDanceFloor";

function getDanceHeaderText()
{
  return '13 STEP DANCE';
}

function getDanceFloorOffSetX()
{	
	/* gebruikt voor steps op map en intentionFrame */
	return -317/*-317*/;
}

function getDanceFloorOffSetY()
{
	/* gebruikt voor steps op map en intentionFrame */
	return -20 /*-46 */;
}


function getDanceFloorOffSetMarkerX()
{	
/*	if ((navigator.userAgent.indexOf('iPad') >0) *//* ||
		(navigator.userAgent.indexOf('Android' eigenlijk alleen bij device width > 320/480 ) >0)*//*)
	{
	   return -300;
	}
*/																								
	return (/* -292 */ -308 ); /* -300 + 47/6 = -300 + 7.84 = -292 */
	return (/* -292 */ -300 + getDanceFloorZoom()/6 ); /* -300 + 47/6 = -300 + 7.84 = -292 */
}

function getDanceFloorOffSetMarkerY()
{
	/*	if ((navigator.userAgent.indexOf('iPad') >0) *//* ||
	{
		return -107; // was 50
	}*/
	return (/* -92 */ -101  ); /* -107 + 47/6 = -107 + 7.84 = -92 */
	return (/* -92 */ -107 + getDanceFloorZoom()/3 ); /* -107 + 47/6 = -107 + 7.84 = -92 */ /*orginele waarde */
}

function getScreenWidthZoomFactor()
{
	/* gebruikt voor device width vullen van scherm */
	var zoomFactor = 0.77;
	if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
		if (/OS [1-5](.*) like Mac OS X/i.test(navigator.userAgent)) {
			// iOS version is <= 5.
		} else {
			// iOS version is >= 6.
			zoomFactor = zoomFactor/2;
		}
	}
 if ( navigator.userAgent.indexOf('Android') >0)
 {
 //  alert('iPad || Android');
			zoomFactor = zoomFactor/2;
 }

	return zoomFactor; 
}	
	
function getCoordZoomFactor()
{
	/* 1/screenwidthzoom factor gebruikt voor intialisatie van map 
	 (steps en intentionFrame), omdat map niet meezoomt */

    var zoomFactor =1;
    zoomFactor = 1/getScreenWidthZoomFactor();
	
	/* Evt. aanpssen afh. van OS en device, nu overruled in laatste statement */
	
	if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
		if (/OS [1-3](.*) like Mac OS X/i.test(navigator.userAgent)) {
			// iOS version is <= 3.
			zoomFactor = getDanceFloorZoom()/100;
		} else {
			// iOS version is > 3.
		}
	}
	return zoomFactor; 
	
}

function getDanceFloorZoom()
{
	/* gebruikt bij initialisatie voor marker en image om relatief ten opzichte 
	 van oorspronkelijk DanceFloor groot coordinaten systeem te posioneren 
	 TODO: relatief maken tov devivewidth (hier of in combinatie met screenwidthzoomfactor */

	/*	if ((navigator.userAgent.indexOf('iPad') >0) *//* ||
	{
		return -100; // was 50
	}*/
	var imageWidth = 668/* 668 Org waarde */;

    return (100*screen.width/imageWidth);
	return 48;
	return 47; /*orginele waarde 47 */
}

function getDanceFloorPosition()
{
/* 
 alert(navigator.userAgent);
 alert(navigator.userAgent.indexOf('iPad'));
 if ((navigator.userAgent.indexOf('iPad') >0) ||
      (navigator.userAgent.indexOf('Android') >0))
  {
  alert('iPad || Android');
  return (''
+ "<div style='margin: -75px -300px;"
+ "width: 400px;" werkt niet voor crop
+ "'>");
  }
*/

 if ( navigator.userAgent.indexOf('Android') >0)
 {
  return (''
	+ "<div style='margin: -200px 0px; zoom:" + getScreenWidthZoomFactor() * getDanceFloorZoom() + "%;"
+ "'>");
 }

  return (''
/*	+ "<div style='margin: -50px -300px; zoom:" + getDanceFloorZoom() + "%;" */
	+ "<div style='margin: 0px 0px; zoom:" + getScreenWidthZoomFactor() * getDanceFloorZoom() + "%;"
// + "width: 400px;" werkt niet voor crop
+ "'>");
}

function getDanceFloorColor()
{
  return 'rgb(0,102,101)';
  /* donkergroen */
}

function getDanceFloor()
{
if (appLanguage == "en")
return 'dancefloor13steps.jpg'
else
return 'dancefloor13stappen.jpg';
}

function getPrepbodyImg()
{
//alert('getPrepBodyImg');
return "<img src='"+getDanceFloor()+"' width=100 height=100 onClick='go(12)'>";
}

function getHelpImg()
{
return "<img src='"+getDanceFloor()+"' width=100 height=100 onClick='gotoDanceFloor();'>";
}

var stateI = {
   name: 'I',
   go: 999
}
var stateJ = {
   name: 'J',
   go: 11
}
var stateO = {
   name: 'O',
   go: 2
}
var stateF = {
   name: 'F',
   go: 3
}
var stateN = {
   name: 'N',
   go: 4
}
var stateR = {
   name: 'R',
   go: 5
}

var stepH = 76; // nl 72 en org 76
var stepdH = -6;
var stepW = 140 /*140*/;
var offSetMarkerX = getDanceFloorOffSetMarkerX(); 
var offSetMarkerY = getDanceFloorOffSetMarkerY();
var offSetX = getDanceFloorOffSetX(); 
var offSetY = getDanceFloorOffSetY(); 

var modeC = {
   name: 'C',
   index: 1,
   x1: 570, 
   y1: (907-5*(stepH+stepdH)+stepdH) /*580*/, 
   x2: (570+stepW)/*750*/, 
   y2: 907/*917*/,
// en org  x1: 590, y1: 580, x2: 750, y2: 950,
// nl 930
//   text: showModeConnectWithMyself(),
   nrOfTextShows: 0
}
var modeR = {
   name: 'R',
   index: 2,
   x1: 419, y1: (514-4*(stepH+stepdH)+stepdH) /*210*/, x2: (419+stepW)/*600*/, y2: 514/*512*/,
//   x1: 430, y1: 210, x2: 600, y2: 540,
// nl : 535
// text: showModeReceivingOthersText(),
   nrOfTextShows: 0
}
var modeE = {
   name: 'E',
   index: 3, 
   x1: 716, y1: (514-4*(stepH+stepdH)+stepdH) /*210*/, x2: (715+stepW)/*900*/, y2: 514/*512*/,
// en org  x1: 740, y1: 210, x2: 900, y2: 540,
// nl : 535
//   text: showModeExpressingMyselfText(),
   nrOfTextShows: 0
}

var stepCI = {
    mode: modeC,
    state: stateI,
 x1: modeC.x1+182, y1: modeC.y2-5, 
 x2: modeC.x2+182, y2: modeC.y2+stepH-5,
    text: textCO(),
    nrOfTextShows: 0
}
var stepCJ = {
    mode: modeC,
    state: stateJ,
 x1: modeC.x1, y1: modeC.y2-stepH, 
 x2: modeC.x2, y2: modeC.y2,
    text: textCJ(),
    nrOfTextShows: 0
}
var stepCO = {
    mode: modeC,
    state: stateO,
 x1: modeC.x1, y1: modeC.y2-2*stepH-stepdH, 
 x2: modeC.x2, y2: modeC.y2-stepH -stepdH,
    text: textCO(),
    nrOfTextShows: 0
}
var stepCF = {
    mode: modeC,
    state: stateF,
 x1: modeC.x1, y1: modeC.y2-3*(stepH+stepdH)+stepdH, 
 x2: modeC.x2, y2: modeC.y2-2*(stepH+stepdH),
    text: textCF(),
    nrOfTextShows: 0
}
var stepCN = {
    mode: modeC,
    state: stateN,
 x1: modeC.x1, y1: modeC.y2-4*(stepH+stepdH)+stepdH, 
 x2: modeC.x2, y2: modeC.y2-3*(stepH+stepdH),
    text: textCN(),
    nrOfTextShows: 0
}
var stepCR = {
    mode: modeC,
    state: stateR,
 x1: modeC.x1, y1: modeC.y2-5*(stepH+stepdH)+stepdH, 
 x2: modeC.x2, y2: modeC.y2-4*(stepH+stepdH),
    text: textCR(),
    nrOfTextShows: 0
}
var stepRO = {
    mode: modeR,
    state: stateO,
 x1: modeR.x1, y1: modeR.y2-stepH, 
 x2: modeR.x2, y2: modeR.y2,
    text: textRO(),
    nrOfTextShows: 0
}
var stepRF = {
    mode: modeR,
    state: stateF,
 x1: modeR.x1, y1: modeR.y2-2*(stepH+stepdH)+stepdH, 
 x2: modeR.x2, y2: modeR.y2-(stepH+stepdH),
    text: textRF(),
    nrOfTextShows: 0
}
var stepRN = {
    mode: modeR,
    state: stateN,
 x1: modeR.x1, y1: modeR.y2-3*(stepH+stepdH)+stepdH, 
 x2: modeR.x2, y2: modeR.y2-2*(stepH+stepdH),
    text: textRN(),
    nrOfTextShows: 0
}
var stepRR = {
    mode: modeR,
    state: stateR,
 x1: modeR.x1, y1: modeR.y2-4*(stepH+stepdH)+stepdH, 
 x2: modeR.x2, y2: modeR.y2-3*(stepH+stepdH),
    text: textRR(),
    nrOfTextShows: 0
}
var stepEO = {
    mode: modeE,
    state: stateO,
    x1: modeE.x1, y1: modeE.y2-stepH, 
    x2: modeE.x2, y2: modeE.y2,
    text: textEO(),
    nrOfTextShows: 0
}
var stepEF = {
    mode: modeE,
    state: stateF,
 x1: modeE.x1, y1: modeE.y2-2*(stepH+stepdH)+stepdH, 
 x2: modeE.x2, y2: modeE.y2-(stepH+stepdH),
    text: textEF(),
    nrOfTextShows: 0
}
var stepEN = {
    mode: modeE,
    state: stateN,
 x1: modeE.x1, y1: modeE.y2-3*(stepH+stepdH)+stepdH, 
 x2: modeE.x2, y2: modeE.y2-2*(stepH+stepdH),
    text: textEN(),
    nrOfTextShows: 0
}
var stepER = {
    mode: modeE,
    state: stateR,
 x1: modeE.x1, y1: modeE.y2-4*(stepH+stepdH)+stepdH, 
 x2: modeE.x2, y2: modeE.y2-3*(stepH+stepdH),
    text: textER(),
    nrOfTextShows: 0
}

var previousIndexMode=indexMode;
var previousOFNRmode=-1;
var currentStep=stepCI;
var previousStep=stepCO;

function showIntention()
{
// alert('showIntention');
/*   if (DFReferenceVersion || DFAssistedVersion ||
(currentStep == stepCI)) */
{  
/* NIET MEER NODIG Door Default Full page Zoom Out 
   scrollTo(getDanceFloorZoom()/100*(modeC.x1+35
      +getOffSetMarkerX()), 
      getDanceFloorZoom()/100*(modeC.y2+100
      +getOffSetMarkerY()));
*/ 
      showStep(stepCI);
}
if (DFReferenceVersion ||  
    DFAssistedVersion)   
      alert(showIntentionText());
/* NB This is where we start only comment out for ChartOnly and put focus on frame */
}

function getIntentionPdf()
{
/*
 return ("<img src='"+ addPath("intention13step.png")+"'>");
*/
	var images;
	var imageWidth = 600;	
	
	images = "<div "
	images = images + "style='zoom: "+
 	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
	+ (
     "<img src='intention13step.png' >" 
      )
	+ "</div>";
	return images;
	
}

function getAppTips()
{
 var images;
/*
  images = "<img src='"+ addPath("tips13step1.png")+"' >" */
	var images;
	var imageWidth = 654;	
	
	images = "<div "
	images = images + "style='zoom: "+
 	(100*getOrientationWidth()/imageWidth)+"%; margin: "+10+"px "+0+"px;'>" 
	images = images	
  +      "<img src='tips13step1.png' >" 
  + "<h1> </h1>"
  +  "<img src='tips13step2.png' >"
  + "<h1> </h1>"
  + "</div>";
  return images;
}

function showDanceOverviewText()
{
return("13 step inner-outer dance stage 1 overview: The 13 Step Dance is designed for practicing NVC (Nonviolent Communication) in the context of a dialogue with another person. By practicing the 13 basic steps of NVC you develop an awareness of which mode you are in: 'expressing myself', 'receiving others' or 'connecting with myself");
}

function showModeReceivingOthers()
{
scrollTo(modeR.x1-100+getOffSetMarkerX(),
modeR.y2-250+getOffSetMarkerY());
alert(showModeReceivingOthersText());
//  indexMode = 2;
hideElement(document.getElementById('JButton'));
// setModePicture();
//  go(3);
// gotoOFNRButtons(3);
}

function showModeExpressingMyself()
{
scrollTo(modeE.x1-100+getOffSetMarkerX(),
modeE.y2-250+getOffSetMarkerY());
alert(showModeExpressingMyselfText());
//  indexMode = 3;
hideElement(document.getElementById('JButton'));
// setModePicture();
//  go(2);
}

function showModeConnectWithMyself()
{
scrollTo(modeC.x1-100+getOffSetMarkerX(),
modeC.y2-350+getOffSetMarkerY());
alert(showModeConnectWithMyselfText());
//  indexMode = 1;
displayElement(document.getElementById('JButton'));
// setModePicture();
//  go(2);
}

function textCJ()
{
   return("Listening to my judging and blaming: This is the place for judging and blaming oneself and/or others, and for all kinds of interpretations, labels, criticism and praise.");
}
function textCO()
{
   return("Connecting with my observation: This step is where the dancer stands to identify that which is triggering them. The dancer asks themselves 'What did I see or hear that is stimulating my judgemental thinking, or that is setting off my present feeling?'");
}
function textCF()
{
   return("Connecting with my feeling: Here the dancer senses within themselves to connect with their feelings, and might name those feelings.");
}
function textCN()
{
   return("Connecting with my need: On this step the dancer connects with the need or needs giving rise to their present feelings.");
}
function textCR()
{
   return("Connecting with my request; Here the dancer gets clear what they would like someone to do to meet their present need, and/or they choose which way to go next in their dance (also as a step to go towards their present need). So this is where they choose whether to go next to the 'expressing' steps, or to the 'receiving' steps, or to give themselves more empathy by continuing on the 'connecting with myself' steps.");
}
function textRO()
{
   return("Receiving your observation: This step is where the dancer connects with, and may ask about, what triggered or stimulated the role-player just now.");
}
function textRF()
{
   return("Receiving your feeling: Here the dancer seeks to connect with the role-player's present feeling and, if not sure they are connected, guesses aloud what the role-player might be feeling, e.g. 'Are you feeling overwhelmed?'");
}
function textRN()
{
   return("Receiving your need: On this step the dancer seeks to connect empathically with the role-player's present need, and enquires about it if that helps make the connection, e.g. the dancer might say 'Are you needing support?'");
}
function textRR()
{
   return("Receiving your Request: Here the dancer guesses what action the role-player would like someone to take to contribute to meeting their (the role- player's) present need.");
}
function textEO()
{
   return("Expressing my observation: This step is where the dancer says what they see or here now, and/or saw or heard in the past, and/or imagining seeing or hearing in the future.");
}
function textEF()
{
   return("Expressing my feeling: Here the dancer tells the role-player their present feeling.");
}
function textEN()
{
   return("Expressing my need: Here the dancer tells the role-player their present need.");
}
function textER()
{
   return("Expressing my request: Here the dancer tells the role-player something specific the role-player could do, to contribute to meeting the dancer's present need, and asks if they would be willing to do that.");
}

function getMaps()
{
return(""
+"<map name='dancemap'>"
+"<area alt='testFrame' shape='rect' coords='0,0,40,40' href='noref' <onclick='testPrompt();'/>"
+"<area alt='intentionFrameTop' shape='rect' coords='"
+getCoordStr(350,190,960,230)
+"' href='javascript:showIntention();'/>"
	   +"<area alt='intentionFrameRight' shape='rect' coords='"
	   +getCoordStr(910,200,950,980)
	   +"' href='javascript:showIntention();'/>"
	   +"<area alt='intentionFrameLeft' shape='rect' coords='"
	   +getCoordStr(350,200,390,980)
	   +"' href='javascript:showIntention();'/>"
	   +"<area alt='IntentionFrameBottom' shape='rect' coords='"
	   +getCoordStr(350,940,960,980)
	   +"' href='javascript:showIntention();'/>"
/*+"<area alt='DanceOverviewFrame' shape='rect' coords='450,120,850,180' href='javascript:showDanceOverview();'/>"*/
/*+"<area alt='CurtainFrame' shape='rect' coords='400,545,900,575' href='javascript:showCurtain();'/>"*/
/*+"<area alt='OuterFrame' shape='rect' coords='380,250,420,540' href='javascript:showOuter();'/>"*/
/*+"<area alt='InnerFrame' shape='rect' coords='380,620,420,900' href='javascript:showInner();'/>"*/
/* +"<area alt='modeFrameReceivingOthers' shape='rect' coords='450,250,600,540' href='javascript:showModeReceivingOthers();'/>" */
+getStepMap(stepRO)
+getStepMap(stepRF)
+getStepMap(stepRN)
+getStepMap(stepRR)
+getStepMap(stepCI)
/*+"<area alt='modeFrameExpressingMyself' shape='rect' coords='750,250,900,540' href='javascript:showModeExpressingMyself();'/>" */
+getStepMap(stepEO)
+getStepMap(stepEF)
+getStepMap(stepEN)
+getStepMap(stepER)
/*+"<area alt='modeFrameConnectWithMyself' shape='rect' coords='590,580,750,930' href='javascript:showModeConnectWithMyself();'/>"*/
+getStepMap(stepCJ)
+getStepMap(stepCO)
+getStepMap(stepCF)
+getStepMap(stepCN)
+getStepMap(stepCR)
/* +"<area alt='leftIntentionFrame' shape='rect' coords='80,80,100,940' href='noref' onclick='showIntention();'/>" 
*/
+"</map>");
}

function gogo()
{
  // alert("Just click on the steps to dance your dance !");
  go(1);
  
  showStep(stepCI); // Added for android

/* NIET MEER NODIG Door Default Full page Zoom Out 
	setTimeout( 
"scrollTo(getDanceFloorZoom()/100*(modeC.x1+35+getOffSetMarkerX()),getDanceFloorZoom()/100*(modeC.y2+100+getOffSetMarkerY()))", 0); 
*/
	
/* 
 // phonegap: 	
	navigator.notification.alert(
								 "This is my Alert text!",
								 callBackFunctionB, // Specify a function to be called 
								 'Alert Title',
								 "OK"
								 );
*/
// 	alert("Just click on the steps to dance your dance !");
}

function callBackFunctionB(){
    console.log('ok');
}

function getHelp()
{
	var strHelp = '';
	strHelp = strHelp
+getDFWelcomeHeader()
+getDFHeader()
		  + '<div class="DFBody" style="height:250 px;font-size: 110%;">'
/*+'<br/>' */
+'Welcome! '
+ '<br/>'
+ '<br/>'
+ 'Are you ready<li style="height: 18px;border: 0">for a 13 Step Dance?</li>'
/*+ '<br/>' */
+ '<br/>' 
+ 'Ready to connect<li style="height: 18px;border: 0">with empathy and honesty?</li>'
/*+'<br/>'
+ '<br/>' */
+'<li id="welcomeButton" style="width: 50px;margin: 30px 20px 30px 25px;float: left;" onClick="gogo()"'
+'><div id="welcomeButtonText" style="float: center;">'
+'Dance'
+"<!-- div id='welcomeButtonImage'><img src='iNVCInnerOuterChartOnly.jpg'></img></div -->"
// + getHelpImg()
+'</div>'
+'</li>';
	if ( navigator.userAgent.indexOf('Android') >0)
	{
		strHelp = strHelp	
		+'<li id="welcomeButton" style="width: 50px;margin: 30px 25px 30px 20px;float: right;" onClick="goPager(1)"'
		+'><div id="welcomeButtonText" style="float: center;">'
		+'Info'
		+"<!-- div id='welcomeButtonImage'><img src='info.png'></img--></div>"
		+'</div>'
		+'</li>';
	}
	else
	{	
		strHelp = strHelp	
		+'<li id="welcomeButton" style="width: 50px;margin: 30px 25px 30px 25px;float: left;" onClick="goPager(2)"'
		+'><div id="welcomeButtonText" style="float: center;">'
		+'Video'
		+'</div>'
		+'</li>';
		strHelp = strHelp	
		+'<li id="welcomeButton" style="width: 50px;margin: 30px 25px 30px 20px;float: left;" onClick="goPager(1)"'
		+'><div id="welcomeButtonText" style="float: center;">'
		+'Info'
		+"<!-- div id='welcomeButtonImage'><img src='info.png'></img--></div>"
		+'</div>'
		+'</li>';
	}	
+ getDFWelcomeFooter();

return(strHelp);
// return (getHelpImg())
}

function getHelpNL()
{
   alert('Welkom '
+ 'bij het Geweldloze Communicatie Dans Vloer coach ! '
+ 'Oefen een verbindend gesprek met iemand die je dierbaar is, klik en scroll:'
//+ '<br>'
+ '- De 13 stappen van de Dans Vloer ' //+'<br>'
);return ("<img src='dancefloor13stepsMedium.jpg' onClick='gotoDanceFloor();'>")
}

function getInfo()
{
   return ('' 
// + getHelp()
+ 'NVCInnerOuterDanceFloor <br/> <br/>' + 'App info: <br/>'+ '<br/>'
+ '<u>The 13 Step Dance</u> is designed for practicing NVC (Nonviolent Communication) in the context of a dialogue with another person.'
+ '<br/>'+ '<br/>'
+ '<u>Learning focus</u><br/>'
+'- practise the 13 basic steps of NVC<br/>'
+"- develop awareness of which mode you are in: 'expressing myself', 'receiving others' or 'connecting with myself'<br/>"
+'- learn how to transform judgements through self-empathy'
+ '<br/>'+ '<br/>'
+ '<u>Flows well after learning</u><br/>'
+'- the key differentiations for each of the four ingredients: observations, feelings, needs, requests<br/>'
+'- the colour coding we use to represent the 4 ingredients (O = yellow, F = pink, N = blue, R = green)<br/>'
+'- the seven types of jackal language i.e. language that disconnects from life<br/>'
+'- all 3 modes: i.e. connecting with myself, expressing myself and receiving others<br/>'
+"- for more information see page 13 on <a style='color: blue; text-decoration: underline' href='http://www.nvcdancefloors.com/'>The NVC Dance Floors</a> facilitator's handbook"
+ '<br/>'+ '<br/>'
+ '<u>What are the NVC Dance Floors ?</u><br/>'
+ "- They are spatial maps made up of large cards that place the NVC processes on the floor in various layouts called 'dances'.<br/>- Each card represents a step in the dance of communication.<br/>- People learn NVC stand up and 'dance' through the steps in role play, often with coaching from a trainer, or support from another participant.<br/>- Each dance is designed to help people develop awareness and skills in a particular area of NVC.<br/>"
+ '...<br/>'+ '<br/>'
+ '- Press Apps for other supporting apps based upon the model for Nonviolent Communication. '
+ '<br>'
+ '<br>'
+ '<br/>'+ '<br/>'
+ '...<br/>'+ '<br/>'
+ 'This NVC Dance Floor app is a '
+ '<br>' 
+ getCoProductionDFOf()
+ '<br/>'+ '<br/>'
+ '...<br/>'+ '<br/>'
)
}





