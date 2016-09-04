appName="NVC Self Empathy Dance Floor";
var appTwitterTag="iNVCSelfEmpathyDanceFloor";

function getDanceHeaderText()
{
  return 'SELF EMPATHY DANCE';
}

function getDanceFloorPosition()
{
/* alert(navigator.userAgent.indexOf('iPad'));
*/
  if (navigator.userAgent.indexOf('iPad') >0)
  {
//  alert('iPad');
  return (''
+ "<div style='margin: -125px -300px;"
// + "width: 400px;" werkt niet voor crop
+ "'>");
  }
  return (''
+ "<div style='margin: -100px -300px;"
// + "width: 400px;" werkt niet voor crop
+ "'>");
}

function getDanceFloorColor()
{
  return 'rgb(108,1,153)';
  /* donkerpaars */
}

function getDanceFloor()
{
if (appLanguage == "en")
return 'dancefloorSelfEmpathy.jpg'
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
return "<img src='"+getDanceFloor()+"' width=100 height=100  onClick='gotoDanceFloor();'>";
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
var stateRM = {
   name: 'RM',
   go: 5
}
var stateRO = {
   name: 'RO',
   go: 5
}
var stateRA = {
   name: 'RA',
   go: 5
}
var stateRN = {
   name: 'RN',
   go: 5
}

var modeC = {
   name: 'C',
   index: 1,
   x1: 561, y1: 576, x2: 760, y2: 904,
// en org  x1: 590, y1: 580, x2: 750, y2: 950,
// nl 930
//   text: showModeConnectWithMyself(),
   nrOfTextShows: 0
}

var stepH = 98; 
var stepdH = 12;
var stepdH2 = -1;
var stepW = 159;
var stepdW = 14;
var offSetMarkerX = -300; 
var offSetMarkerY = -196; // was -39

var stepCI = {
    mode: modeC,
    state: stateI,
 x1: modeC.x1+197, y1: modeC.y2-25, 
 x2: modeC.x2+197, y2: modeC.y2+stepH-25,
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
 x2: modeC.x2, y2: modeC.y2-3*(stepH+stepdH)+5,
    text: textCN(),
    nrOfTextShows: 0
}
var stepCRM = {
    mode: modeC,
    state: stateRM,
 x1: modeC.x1-stepW-stepdW, y1: modeC.y2-5*(stepH+stepdH)+stepdH+stepdH2, 
 x2: modeC.x2-stepW-stepdW, y2: modeC.y2-4*(stepH+stepdH)+stepdH2,
    text: textCR(),
    nrOfTextShows: 0
}

var stepCRO = {
    mode: modeC,
    state: stateRO,
 x1: modeC.x1, y1: modeC.y2-5*(stepH+stepdH)+stepdH+stepdH2, 
 x2: modeC.x2, y2: modeC.y2-4*(stepH+stepdH)+stepdH2,
    text: textCR(),
    nrOfTextShows: 0
}

var stepCRA = {
    mode: modeC,
    state: stateRA,
 x1: modeC.x1+stepW+stepdW, y1: modeC.y2-5*(stepH+stepdH)+stepdH+stepdH2, 
 x2: modeC.x2+stepW+stepdW, y2: modeC.y2-4*(stepH+stepdH)+stepdH2,
    text: textCR(),
    nrOfTextShows: 0
}

var stepCRN = {
    mode: modeC,
    state: stateRN,
 x1: modeC.x1, y1: modeC.y2-6*(stepH+stepdH)+stepdH+stepdH2-2, 
 x2: modeC.x2, y2: modeC.y2-5*(stepH+stepdH)+stepdH2-2,
    text: textCR(),
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
(currentStep == stepIntention)) */
{   
   scrollTo(modeC.x1+35
      +getOffSetMarkerX(), 
      modeC.y2+100
      +getOffSetMarkerY());
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
 return ("<img src='"+ addPath("intention13step.png")+"' >"
*/
 return (
     "<img src='intentionselfempathy.png' >"
  + "<h1> <br/> <br/> </h1>");
}

function getAppTips()
{
 var images;
/*
  images = "<img src='"+ addPath("tips13step1.png")+"' >" */
 images = 
     "<img src='tipsselfempathy1.png' >"
  + "<h1> <br/> <br/> </h1>"
  +  "<img src='tipsselfempathy2.png' >"
  +  "<h1> <br/> <br/> </h1>";
  return images;
}

function showDanceOverviewText()
{
return("Self Empathy Dance overview: The Self Empathy Dance is designed for practicing NVC (Nonviolent Communication) to take self-empathy deeper than on the outer dances. To discover the beauty of fully experiencing what is alive within you. And to open your creativity to the full range of ways to meet your needs.");
}

function showModeConnectWithMyself()
{
scrollTo(modeC.x1-100,modeC.y2-50);
scrollTo(modeC.x1-100,modeC.y2-350);
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

function getMaps()
{
return(""
+"<map name='dancemap'>"
+"<area alt='testFrame' shape='rect' coords='0,0,40,40' href='noref' <onclick='testPrompt();'/>"
+"<area alt='intentionFrameTop' shape='rect' coords='350,210,960,250' href='javascript:showIntention();'/>"
+"<area alt='intentionFrameRight' shape='rect' coords='910,200,950,980' href='javascript:showIntention();'/>"
+"<area alt='intentionFrameLeft' shape='rect' coords='350,200,390,980' href='javascript:showIntention();'/>"
+"<area alt='IntentionFrameBottom' shape='rect' coords='350,920,960,960' href='javascript:showIntention();'/>"
+"<area alt='DanceOverviewFrame' shape='rect' coords='450,120,850,200' href='javascript:showDanceOverview();'/>"
/*+"<area alt='modeFrameConnectWithMyself' shape='rect' coords='590,580,750,930' href='javascript:showModeConnectWithMyself();'/>"*/
+getStepMap(stepCJ)
+getStepMap(stepCO)
+getStepMap(stepCF)
+getStepMap(stepCN)
+getStepMap(stepCRM)
+getStepMap(stepCRO)
+getStepMap(stepCRA)
+getStepMap(stepCRN)
+getStepMap(stepCI)
/* +"<area alt='leftIntentionFrame' shape='rect' coords='80,80,100,940' href='noref' onclick='showIntention();'/>" 
*/
+"</map>");
}

function getHelp()
{
   return('Welcome '
+ 'to the Nonviolent Communication Dance Floor coach ! '
+ 'Experience deep connection with yourself, and find resourceful creativity, through self-empathy, click and scroll:'
//+ '<br>'
+ '- The steps of the Self Empathy Dance Floor' //+'<br>'
+ getHelpImg()
);
// return (getHelpImg())
}

function getHelp()
{
   return(
getDFWelcomeHeader()
+getDFHeader()
+ '<div class="DFBody"><br/>'
+'Welcome! '
+ '<br/>'
+ '<br/>'
+ 'Are you ready for a Self Empathy Dance?'
+ '<br/>'
+ '<br/>'
+ 'Ready to experience deep connection with yourself, and find resourceful creativity?'
+'<br/>'
+ '<br/>'
+'</ul>'
		  +'<li id="welcomeButton"  onClick="go(1);"><div id="welcomeButtonText">'
+'Dance your Dance!'
+"</div><div id='welcomeButtonImage'><img src='iNVCSelfEmpathyChartOnly.jpg'></img></div>"
// + getHelpImg()
+'</li>'
+'<li id="welcomeButton" onClick="goPager(1)"'
+'><div id="welcomeButtonText">'
+'Info'
+"</div><div id='welcomeButtonImage'><!-- img src='info.png'></img--></div>"
+'</li>'
+'</ul></div>'
+ getDFWelcomeFooter()
);
// return (getHelpImg())
}

function getInfo()
{
   return ('' 
// + getHelp()
+ 'NVCSelfEmpathyDanceFloor <br/> <br/>' + 'App info: <br/>'+ '<br/>'
+ '<u>The Self Empathy Dance</u> is designed for practicing NVC (Nonviolent Communication) in the context of ....'
+ '<br/>'+ '<br/>'
+ '<u>Learning focus</u><br/>'
+'- practise the 13 basic steps of NVC<br/>'
+"- develop awareness of ..'<br/>"
+'- learn how to transform judgements through self-empathy'
+ '<br/>'+ '<br/>'
+ '<u>Flows well after learning</u><br/>'
+'- the key differentiations for each of the four ingredients: observations, feelings, needs, requests<br/>'
+'- the colour coding we use to represent the 4 ingredients (O = yellow, F = pink, N = blue, R = green)<br/>'
+'- the seven types of jackal language i.e. language that disconnects from life<br/>'
+"- for more information see page ... on <a style='color: blue; text-decoration: underline' href='http://www.nvcdancefloors.com/'>The NVC Dance Floors</a> facilitator's handbook"
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


