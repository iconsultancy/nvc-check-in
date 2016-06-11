var appName="NVC Check-In";
var appTwitterTag="iNVCcheckin";
var appLanguage="en";
var msgComingSoon=" test), coming soon to the App store!..................";

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

var modes=Array;
modes[1]="Clearly expressing how I AM without blaming or criticizing";
modes[2]="Empathically receiving how YOU ARE without hearing blame or criticism";
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
observations[startObservations]="Describe your observation as clearly and objectively as possible. What is going on?";
observations[startObservations+1]="see";
observations[startObservations+2]="hear";
observations[startObservations+3]="remember";
observations[startObservations+4]="notice";
observations[startObservations+5]="detect";
observations[startObservations+6]="observe";
observations[startObservations+7]="taste";
observations[startObservations+8]="smell";
observations[startObservations+9]="discover";
var nrOfObservations = 9;

var feelings=new Array;
feelings[startFeelings]="How do you feel at this moment, angry, sad, scared, glad or ...?";
feelings[startFeelings+1]="AFFECTIONATE";
feelings[startFeelings+2]="CONFIDENT";
feelings[startFeelings+3]="GRATEFUL";
feelings[startFeelings+4]="HOPEFUL";
feelings[startFeelings+5]="REFRESHED";
feelings[startFeelings+6]="ENGAGED";
feelings[startFeelings+7]="PEACEFUL";
feelings[startFeelings+8]="EXHILARATED";
feelings[startFeelings+9]="JOYFUL";
feelings[startFeelings+10]="EXCITED";
feelings[startFeelings+11]="INSPIRED";
var nrOfFeelings = 11;

var feelingsOkDetails=new Array;
feelingsOkDetails[0]="AFFECTIONATE";
feelingsOkDetails[1]="Compassionate";
feelingsOkDetails[2]="friendly";
feelingsOkDetails[3]="loving";
feelingsOkDetails[4]="open hearted";
feelingsOkDetails[5]="sympathetic";
feelingsOkDetails[6]="tender";
feelingsOkDetails[7]="warm";
feelingsOkDetails[8]="CONFIDENT";
feelingsOkDetails[9]="Empowered";
feelingsOkDetails[10]="open";
feelingsOkDetails[11]="proud";
feelingsOkDetails[12]="safe";
feelingsOkDetails[13]="secure";
feelingsOkDetails[14]="GRATEFUL";
feelingsOkDetails[15]="Appreciative";
feelingsOkDetails[16]="moved";
feelingsOkDetails[17]="thankful";
feelingsOkDetails[18]="touched";
feelingsOkDetails[19]="HOPEFUL";
feelingsOkDetails[20]="Expectant";
feelingsOkDetails[21]="encouraged";
feelingsOkDetails[22]="optimistic";
feelingsOkDetails[23]="REFRESHED";
feelingsOkDetails[24]="Enlivened";
feelingsOkDetails[25]="rejuvenated";
feelingsOkDetails[26]="renewed";
feelingsOkDetails[27]="rested";
feelingsOkDetails[28]="restored";
feelingsOkDetails[29]="revived";
feelingsOkDetails[30]="ENGAGED";
feelingsOkDetails[31]="Absorbed";
feelingsOkDetails[32]="alert";
feelingsOkDetails[33]="curious";
feelingsOkDetails[34]="engrossed";
feelingsOkDetails[35]="enchanted";
feelingsOkDetails[36]="entranced";
feelingsOkDetails[37]="fascinated";
feelingsOkDetails[38]="interested";
feelingsOkDetails[39]="intrigued";
feelingsOkDetails[40]="involved";
feelingsOkDetails[41]="spellbound";
feelingsOkDetails[42]="stimulated";
feelingsOkDetails[43]="PEACEFUL";
feelingsOkDetails[44]="Calm";
feelingsOkDetails[45]="clear headed";
feelingsOkDetails[46]="comfortable";
feelingsOkDetails[47]="centred";
feelingsOkDetails[48]="equanimous";
feelingsOkDetails[49]="fulfilled";
feelingsOkDetails[50]="mellow";
feelingsOkDetails[51]="quiet";
feelingsOkDetails[52]="relaxed";
feelingsOkDetails[53]="relieved";
feelingsOkDetails[54]="satisfied";
feelingsOkDetails[55]="serene";
feelingsOkDetails[56]="still";
feelingsOkDetails[57]="tranquil";
feelingsOkDetails[58]="trusting";
feelingsOkDetails[59]="EXHILARATED";
feelingsOkDetails[60]="Blissful";
feelingsOkDetails[61]="ecstatic";
feelingsOkDetails[62]="elated";
feelingsOkDetails[63]="enthralled";
feelingsOkDetails[64]="exuberant";
feelingsOkDetails[65]="radiant";
feelingsOkDetails[66]="rapturous";
feelingsOkDetails[67]="thrilled";
feelingsOkDetails[68]="JOYFUL";
feelingsOkDetails[69]="Amused";
feelingsOkDetails[70]="delighted";
feelingsOkDetails[71]="glad";
feelingsOkDetails[72]="happy";
feelingsOkDetails[73]="jubilant";
feelingsOkDetails[74]="pleased";
feelingsOkDetails[75]="tickled";
feelingsOkDetails[76]="EXCITED";
feelingsOkDetails[77]="Amazed";
feelingsOkDetails[78]="animated";
feelingsOkDetails[79]="ardent";
feelingsOkDetails[80]="aroused";
feelingsOkDetails[81]="astonished";
feelingsOkDetails[82]="dazzled";
feelingsOkDetails[83]="eager";
feelingsOkDetails[84]="energetic";
feelingsOkDetails[85]="enthusiastic";
feelingsOkDetails[86]="giddy";
feelingsOkDetails[87]="invigorated";
feelingsOkDetails[88]="lively";
feelingsOkDetails[89]="passionate";
feelingsOkDetails[90]="surprised";
feelingsOkDetails[91]="vibrant";
feelingsOkDetails[92]="INSPIRED";
feelingsOkDetails[93]="Amazed";
feelingsOkDetails[94]="awed";
feelingsOkDetails[95]="wonder";

var feelings2=new Array;
feelings2[startFeelings2]="How do you feel at this moment, angry, sad, scared or ...?";
feelings2[startFeelings2+1]="AFRAID";
feelings2[startFeelings2+2]="AVERSION";
feelings2[startFeelings2+3]="EMBARRASSED";
feelings2[startFeelings2+4]="FATIGUE";
feelings2[startFeelings2+5]="PAIN";
feelings2[startFeelings2+6]="DISQUIET";
feelings2[startFeelings2+7]="CONFUSED";
feelings2[startFeelings2+8]="ANNOYED";
feelings2[startFeelings2+9]="SAD";
feelings2[startFeelings2+10]="DISCONNECTED";
feelings2[startFeelings2+11]="ANGRY";
feelings2[startFeelings2+12]="TENSE";
feelings2[startFeelings2+13]="VULNERABLE";
feelings2[startFeelings2+14]="YEARNING";
var nrOfFeelings2 = 14;

var feelingsNotOkDetails=new Array;
feelingsNotOkDetails[0]="AFRAID";
feelingsNotOkDetails[1]="Apprehensive";
feelingsNotOkDetails[2]="dread";
feelingsNotOkDetails[3]="foreboding";
feelingsNotOkDetails[4]="frightened";
feelingsNotOkDetails[5]="mistrustful";
feelingsNotOkDetails[6]="panicked";
feelingsNotOkDetails[7]="petrified";
feelingsNotOkDetails[8]="scared";
feelingsNotOkDetails[9]="suspicious";
feelingsNotOkDetails[10]="terrified";
feelingsNotOkDetails[11]="wary";
feelingsNotOkDetails[12]="worried";
feelingsNotOkDetails[13]="AVERSION";
feelingsNotOkDetails[14]="Animosity";
feelingsNotOkDetails[15]="appalled";
feelingsNotOkDetails[16]="contempt";
feelingsNotOkDetails[17]="disgusted";
feelingsNotOkDetails[18]="dislike";
feelingsNotOkDetails[19]="hate";
feelingsNotOkDetails[20]="horrified";
feelingsNotOkDetails[21]="hostile";
feelingsNotOkDetails[22]="EMBARRASSED";
feelingsNotOkDetails[23]="Ashamed";
feelingsNotOkDetails[24]="chagrined";
feelingsNotOkDetails[25]="flustered";
feelingsNotOkDetails[26]="guilty";
feelingsNotOkDetails[27]="mortified";
feelingsNotOkDetails[28]="selfconscious";
feelingsNotOkDetails[29]="FATIGUE";
feelingsNotOkDetails[30]="Beat";
feelingsNotOkDetails[31]="burnt out";
feelingsNotOkDetails[32]="depleted";
feelingsNotOkDetails[33]="exhausted";
feelingsNotOkDetails[34]="lethargic";
feelingsNotOkDetails[35]="listless";
feelingsNotOkDetails[36]="sleepy";
feelingsNotOkDetails[37]="tired";
feelingsNotOkDetails[38]="weary";
feelingsNotOkDetails[39]="worn out";
feelingsNotOkDetails[40]="PAIN";
feelingsNotOkDetails[41]="Agony";
feelingsNotOkDetails[42]="anguished";
feelingsNotOkDetails[43]="bereaved";
feelingsNotOkDetails[44]="devastated";
feelingsNotOkDetails[45]="grief";
feelingsNotOkDetails[46]="heartbroken";
feelingsNotOkDetails[47]="hurt";
feelingsNotOkDetails[48]="lonely";
feelingsNotOkDetails[49]="miserable";
feelingsNotOkDetails[50]="regretful";
feelingsNotOkDetails[51]="remorseful";
feelingsNotOkDetails[52]="DISQUIET";
feelingsNotOkDetails[53]="Agitated";
feelingsNotOkDetails[54]="alarmed";
feelingsNotOkDetails[55]="disconcerted";
feelingsNotOkDetails[56]="disturbed";
feelingsNotOkDetails[57]="perturbed";
feelingsNotOkDetails[58]="rattled";
feelingsNotOkDetails[59]="restless";
feelingsNotOkDetails[60]="shocked";
feelingsNotOkDetails[61]="startled";
feelingsNotOkDetails[62]="surprised";
feelingsNotOkDetails[63]="troubled";
feelingsNotOkDetails[64]="turbulent";
feelingsNotOkDetails[65]="turmoil";
feelingsNotOkDetails[66]="uncomfortable";
feelingsNotOkDetails[67]="uneasy";
feelingsNotOkDetails[68]="unnerved";
feelingsNotOkDetails[69]="upset";
feelingsNotOkDetails[70]="CONFUSED";
feelingsNotOkDetails[71]="Ambivalent";
feelingsNotOkDetails[72]="baffled";
feelingsNotOkDetails[73]="bewildered";
feelingsNotOkDetails[74]="dazed";
feelingsNotOkDetails[75]="hesitant";
feelingsNotOkDetails[76]="lost";
feelingsNotOkDetails[77]="mystified";
feelingsNotOkDetails[78]="perplexed";
feelingsNotOkDetails[79]="puzzled";
feelingsNotOkDetails[80]="torn";
feelingsNotOkDetails[81]="ANNOYED";
feelingsNotOkDetails[82]="Aggravated";
feelingsNotOkDetails[83]="dismayed";
feelingsNotOkDetails[84]="disgruntled";
feelingsNotOkDetails[85]="displeased";
feelingsNotOkDetails[86]="exasperated";
feelingsNotOkDetails[87]="frustrated";
feelingsNotOkDetails[88]="impatient";
feelingsNotOkDetails[89]="irritated";
feelingsNotOkDetails[90]="irked";
feelingsNotOkDetails[91]="SAD";
feelingsNotOkDetails[92]="Depressed";
feelingsNotOkDetails[93]="dejected";
feelingsNotOkDetails[94]="despair";
feelingsNotOkDetails[95]="despondent";
feelingsNotOkDetails[96]="disappointed";
feelingsNotOkDetails[97]="discouraged";
feelingsNotOkDetails[98]="disheartened";
feelingsNotOkDetails[99]="gloomy";
feelingsNotOkDetails[100]="heavy hearted";
feelingsNotOkDetails[101]="hopeless";
feelingsNotOkDetails[102]="melancholy";
feelingsNotOkDetails[103]="unhappy";
feelingsNotOkDetails[104]="wretched";
feelingsNotOkDetails[105]="DISCONNECTED";
feelingsNotOkDetails[106]="Alienated";
feelingsNotOkDetails[107]="aloof";
feelingsNotOkDetails[108]="apathetic";
feelingsNotOkDetails[108]="bored ";
feelingsNotOkDetails[110]="cold";
feelingsNotOkDetails[111]="detached";
feelingsNotOkDetails[112]="distant";
feelingsNotOkDetails[113]="distracted";
feelingsNotOkDetails[114]="indifferent";
feelingsNotOkDetails[115]="numb";
feelingsNotOkDetails[116]="removed";
feelingsNotOkDetails[117]="uninterested";
feelingsNotOkDetails[118]="withdrawn";
feelingsNotOkDetails[119]="ANGRY";
feelingsNotOkDetails[120]="Enraged";
feelingsNotOkDetails[121]="furious";
feelingsNotOkDetails[122]="incensed";
feelingsNotOkDetails[123]="indignant";
feelingsNotOkDetails[124]="irate";
feelingsNotOkDetails[125]="livid";
feelingsNotOkDetails[126]="outraged";
feelingsNotOkDetails[127]="resentful";
feelingsNotOkDetails[128]="TENSE";
feelingsNotOkDetails[129]="Anxious";
feelingsNotOkDetails[130]="cranky";
feelingsNotOkDetails[131]="distressed";
feelingsNotOkDetails[132]="distraught";
feelingsNotOkDetails[133]="edgy";
feelingsNotOkDetails[134]="fidgety";
feelingsNotOkDetails[135]="frazzled";
feelingsNotOkDetails[136]="irritable";
feelingsNotOkDetails[137]="jittery";
feelingsNotOkDetails[138]="nervous";
feelingsNotOkDetails[139]="overwhelmed";
feelingsNotOkDetails[140]="restless";
feelingsNotOkDetails[141]="stressed out";
feelingsNotOkDetails[142]="VULNERABLE";
feelingsNotOkDetails[143]="Fragile";
feelingsNotOkDetails[144]="guarded";
feelingsNotOkDetails[145]="helpless";
feelingsNotOkDetails[146]="insecure";
feelingsNotOkDetails[147]="reserved";
feelingsNotOkDetails[148]="sensitive";
feelingsNotOkDetails[149]="shaky";
feelingsNotOkDetails[150]="YEARNING";
feelingsNotOkDetails[151]="Envious";
feelingsNotOkDetails[152]="jealous";
feelingsNotOkDetails[153]="longing";
feelingsNotOkDetails[154]="nostalgic";

var needs=new Array;
needs[startNeeds]="What do you want? Which need is/is not fulfilled?";
needs[startNeeds+1]="AUTONOMY";
needs[startNeeds+2]="CONNECTION";
needs[startNeeds+3]="HONNESTY";
needs[startNeeds+4]="MEANING";
needs[startNeeds+5]="PEACE";
needs[startNeeds+6]="PHYSICAL WELL BEING";
needs[startNeeds+7]="PLAY";
var nrOfNeeds = 7;

var needsDetails=new Array;
needsDetails[0]="AUTONOMY";
needsDetails[1]="Choice";
needsDetails[2]="freedom";
needsDetails[3]="independence";
needsDetails[4]="space";
needsDetails[5]="spontaneity";
needsDetails[6]="CONNECTION";
needsDetails[7]="Acceptance";
needsDetails[8]="affection";
needsDetails[9]="appreciation";
needsDetails[10]="belonging";
needsDetails[11]="cooperation";
needsDetails[12]="communication";
needsDetails[13]="closeness";
needsDetails[14]="community";
needsDetails[15]="companionship";
needsDetails[16]="compassion";
needsDetails[17]="consideration";
needsDetails[18]="consistency";
needsDetails[19]="empathy";
needsDetails[20]="inclusion";
needsDetails[21]="intimacy";
needsDetails[22]="love";
needsDetails[23]="mutuality";
needsDetails[24]="nurturing";
needsDetails[25]="respect/self respect";
needsDetails[26]="safety";
needsDetails[27]="security";
needsDetails[28]="support";
needsDetails[29]="to know and be known";
needsDetails[30]="to see and be seen";
needsDetails[31]="to understand and be understood";
needsDetails[32]="trust";
needsDetails[33]="warmth";
needsDetails[34]="HONNESTY";
needsDetails[35]="Authenticity";
needsDetails[36]="integrity";
needsDetails[37]="presence";
needsDetails[38]="MEANING";
needsDetails[39]="Awareness";
needsDetails[40]="celebration of life";
needsDetails[41]="challenge";
needsDetails[42]="clarity";
needsDetails[43]="competence";
needsDetails[44]="consciousness";
needsDetails[45]="contribution";
needsDetails[46]="creativity";
needsDetails[47]="discovery";
needsDetails[48]="efficacy";
needsDetails[49]="effectiveness";
needsDetails[50]="growth";
needsDetails[51]="hope";
needsDetails[52]="learning";
needsDetails[53]="mourning";
needsDetails[54]="participation";
needsDetails[55]="purpose";
needsDetails[56]="self-expression";
needsDetails[57]="stimulation";
needsDetails[58]="to matter";
needsDetails[59]="understanding";
needsDetails[60]="PEACE";
needsDetails[61]="Beauty";
needsDetails[62]="communion";
needsDetails[63]="ease";
needsDetails[64]="equality";
needsDetails[65]="harmony";
needsDetails[66]="inspiration";
needsDetails[67]="order";
needsDetails[68]="PHYSICAL WELL BEING";
needsDetails[69]="Air";
needsDetails[70]="food";
needsDetails[71]="movement/exercise";
needsDetails[72]="rest/sleep";
needsDetails[73]="sexual expression";
needsDetails[74]="safety";
needsDetails[75]="shelter";
needsDetails[76]="touch";
needsDetails[77]="water";
needsDetails[78]="PLAY";
needsDetails[79]="Joy";
needsDetails[80]="humour";

var requests=new Array;
requests[startRequests]="Enter a request to enrich life. What would you like to ask yourself or someone else to say/do right now?";
requests[startRequests+1]="How would it be for you ...?";
requests[startRequests+2]="And would you like ...?";
requests[startRequests+3]="I would like to know ...";
requests[startRequests+4]="Would you be willing to ...?";
requests[startRequests+5]="How do you feel about this?";
requests[startRequests+6]="Shall we ...?";
requests[startRequests+7]="Are you willing to listen to me?";
requests[startRequests+8]="Shall I make a cup of tea?";
requests[startRequests+9]="Are you willing to tell me ...?";
requests[startRequests+10]="I remain in connection with myself.";
requests[startRequests+11]="Can you tell me what you hear?";
requests[startRequests+12]="My longing is ...";
requests[startRequests+13]="What had you intended to do?";
requests[startRequests+14]="Would you like me to ...?";
requests[startRequests+15]="No request (Sometimes dropped when offering empathy)";
var nrOfRequests = 15;

var judgements=new Array;
judgements[startJudgements]="Express and welcome all judgements arising in you";
judgements[startJudgements+1]="JUDGEMENT";
judgements[startJudgements+2]="LABELS";
judgements[startJudgements+3]="BLAME";
judgements[startJudgements+4]="DESERVE";
judgements[startJudgements+5]="NO CHOICE";
judgements[startJudgements+6]="IMPOSING";
judgements[startJudgements+7]="DEMAND";
var nrOfJudgements = 7;

var judgementsDetails=new Array;
judgementsDetails[0]="JUDGEMENT";
judgementsDetails[1]="good";
judgementsDetails[2]="bad";
judgementsDetails[3]="right";
judgementsDetails[4]="wrong";
judgementsDetails[5]="LABELS";
judgementsDetails[6]="I am";
judgementsDetails[7]="you are";
judgementsDetails[8]="they are";
judgementsDetails[9]="he is";
judgementsDetails[10]="BLAME";
judgementsDetails[11]="my fault";
judgementsDetails[12]="your fault";
judgementsDetails[13]="his fault";
judgementsDetails[14]="her fault";
judgementsDetails[15]="their fault";
judgementsDetails[16]="DESERVE";
judgementsDetails[17]="punishment";
judgementsDetails[18]="reward";
judgementsDetails[19]="NO CHOICE";
judgementsDetails[20]="can't";
judgementsDetails[21]="have to";
judgementsDetails[22]="IMPOSING";
judgementsDetails[23]="should";
judgementsDetails[24]="ought to";
judgementsDetails[25]="DEMAND";
judgementsDetails[26]="threat";

function getObservationButtonText()
{
return "O";
}
function getFeelingButtonText()
{
return "F";
}
function getNeedButtonText()
{
return "N";
}
function getRequestButtonText()
{
return "R";
}
function getJudgementButtonText()
{
return "J";
}

function getNVCButtonText()
{
return "NVC";
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
return "[Observation]";
}

function getFeelingUndefinedText()
{
return "[Feeling]";
}

function getFeelingOkUndefinedText()
{
return "[Feeling ;=) ]";
}

function getFeelingNotOkUndefinedText()
{
return "[Feeling :=( ]";
}

function getNeedUndefinedText()
{
return "[Need]";
}

function getRequestUndefinedText()
{
return "[Request]";
}

function getJudgementUndefinedText()
{
return "[Judgement]";
}

function getStartObservation()
{
 if ( indexMode == 2) 
      return "When You "
   else
      return "When I ";
}

function getStartObservationValue()
{
return (' '); /* that */
}

function getStartFeeling()
{
  if ( indexMode == 2) 
      return "do You feel "
   else
      return "I feel ";
}

function getStartNeed()
{
  if ( indexMode == 2) 
      return "because You need/value "
   else
      return "because I need/value ";
}


function getMailToSubject()
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

function getWebMasterText()
{
  return ('Remark: ... '
+'                                                      '
+'Thank you for your feedback! We value your time and effort to share your fulfilled and/or unfulfilled needs with us. Your feedback contributes to our need for growth and connection. And inspires us to improve this app even more.                       ');
}

function getCoProductionText()
{
return 'co-production by';
}

function getUsingNVCText()
{
return "based on the model for Nonviolent Communication (NVC) by";
}

function getMailQuestionsText()
{
return "Please send your remarks, questions and suggestions for improvement by email to the";
}

function getHelp()
{
   return ('Welcome '
+ 'to the Nonviolent Communication (NVC) Check-In Coach! '
+ 'To find connection with yourself, press:'
+ '<br>'
+ '- O for your Observation<br>'
+ '- F for your Feeling<br>'
+ '- N for your Need<br>'
+ '- R for a Request to yourself<br>')
}

function getInfo()
{
   return ('' + getHelp()
+ '<br/>'
+'The NVC<sup>TM</sup> Check-In app helps you at the moments when you wish to connect with yourself or another. Using the model of Nonviolent Communication (NVC), you gradually become aware of what you observe, what you feel, what you need and what you could do (or ask others to do) to take steps towards meeting your need.'
+ '<br/>' + '<br/>'
+ 'Connecting with yourself is the key to effectively dealing with all the triggers that you encounter in everyday life -whether these triggers occur at work or at home, whether you experience them as being pleasant or unpleasant.'
+ '<br/>' + '<br/>'
+ 'Maybe your employer gives you so much work to do that you begin to feel stressed and unhappy; or someone says to you, - That is the way I am and you better get used to it... - or a car pulls out in front of you unexpectedly and you brake suddenly.'
+ '<br/>' + '<br/>' 
+'In all these situations you can choose to connect with yourself in order to transform struggle and stress into harmony and inner peace.'
+ '<br/>' + '<br/>' 
+'A Check-In is standing/sitting still in the moment, getting in touch with what is alive in you now and connecting with yourself. The creators of the NVC Check-In app would love to contribute to your connection at times when you want to:<br/>'
+ '- step out of a vicious circle of recurring thoughts<br/>'
+ '- clarify why a particular occurrence has such impact on you and what you can do about it<br/>'
+ '- translate judgements you have about yourself and others into feelings and needs - and experience how liberating this is!'
+ '<br/>' + '<br/>'
+ 'Using the colours of the NVC Dance Floors and pictures from the Giraffentraum (Giraffe Dream) Project, the NVC Check-In app gradually increases your awareness of what you observe, what feelings you experience, what needs (fulfilled or not fulfilled) are underlying those feelings and what you could do to move on and create something new. '
+ '<br/>' + '<br/>' 
+ 'The following buttons guide you. Press (repeatedly) on: '
+ '<br/>'
+ '- O for your Observation<br/>'
+ '- F for your Feelings<br/>'
+ '- N for your Needs<br/>'
+ '- R for a Request to oneself or another<br/>'
+ '<br/>'
+ 'At every step you are supported by a list of common observations, feelings, needs and requests.'
+ '<br/>'+ '<br/>'
+ 'From this list you can choose from some common Observations, Feelings, Needs and Requests (OFNR, listed in uppercase) by (repeatedly) pressing the buttons, or you can choose from a more expanded list by clicking the selection and scrolling through the small menus.'
+ '<br/>'+ '<br/>'
+ 'You can also enter your own words in the empty fields below the OFNR suggestions, using your keyboard.'
+ '<br/>'+ '<br/>'
+ 'The sentence you make is updated continually and will be shown on the display.'
+ '<br/>'
+ '<br/>'
+ 'For example, it might look like this:'
+ '<br/>'
+ '- O: When I see in my diary that my interview is tomorrow, <br/>'
+ '- F: I feel nervous, <br/>'
+ '- N: because I need trust and acceptance. <br/>'
+ '- R (to oneself): Would you be willing, when you notice this feeling in the interview, to reflect on the experience you have accumulated in recent years?<br/>'
+ '<br/>'
+ '<br/>'
+ 'Press Save to save the sentence. Here you can also use the phrase as a (nonviolent) tweet on Twitter or as a (connecting) status update / shared message on LinkedIn.'
+ '<br/>'+ '<br/>'
+ 'How to use the buttons at the bottom of your screen:'
+ '<br/>'
+ '- Press (repeatedly) NVC in order to address the sentence to yourself or another person.'
+ '<br/>'
+ '- Press Mail to email the sentence you have constructed to yourself or somebody else. An email screen will open in which you can customize and send the text. You might put a copy in your agenda app to have it sent to yourself every day at a specific time.'
+ '<br/>'
+ '- Press Log to scroll through your history so that you can see what you needed before and what has helped you in the past. Here you can also delete entries in the log and email the entire log in comma separated (csv, can be imported in Excel) format to yourself.'
+ '<br/>'
+ '- Press Apps for more supporting apps based on Nonviolent Communication.'
+ '<br/>'
+ '- Press ? for information about how to use the app, for info about its creators and to redisplay the initial supporting question for an OFNR button.'
+ '<br/>'
+ '<br/>'
+ 'We really hope that you experience a connection you enjoy while using the app and that the following sentence fulfills your need for inspiration.'
+ '<br/>'
+ '<br/>'
+ 'Welcome and settle into<br/>'
+ 'silence and inner peace,<br/>'
+ 'connect with yourself<br/>'
+ 'and what brings you here.<br/>'
+ 'Breathe slowly<br/>'
+ 'and try to really get in touch<br/>'
+ 'with what you feel now<br/>'
+ 'and what you need now.<br/>'
+ '<br/>'
+ '<br/>'
+ 'This Check-In app is a '
+ '<br/>' 
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


