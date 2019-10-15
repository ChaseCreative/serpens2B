var nomPE1 = "a";
var genPE1 = "ae";
var datPE1 = "ae";
var accPE1 = "am";
var ablPE1 = "ā";
var vocPE1 = "a";

var nomPE2 = "ae";
var genPE2 = "ārum";
var datPE2 = "īs";
var accPE2 = "ās";
var ablPE2 = "īs";
var vocPE2 = "ae";


		var pres1stSing = "o";
		var pres2ndSing = "s";
		var pres3rdSing = "t";
		var pres1stPl = "mus";
		var pres2ndPl = "tis";
		var pres3rdPl = "nt";

var randomNounIndex = 0;
var randomObjectIndex = 0;
var randomVerbIndex = 0;
var ranIndex = 0;




var randomSerpensAIndex = 0;
var correctAnswer = 0;
var wrongAnswer = 0;




var randomSerpensBIndex = 0;
var correctAnswer1 = 0;
var wrongAnswer1 = 0;



var randomSerpensCIndex = 0;
var correctAnswer2 = 0;
var wrongAnswer2 = 0;

var num_questions = 5;
var count = 0;

var subjectArray = [["Is", "est", "He is a ", "Tu", "es"], ["Ego", "sum", "I am a ", "Is", "est"], ["Ea", "est", "She is a ", "Ego", "sum"], ["Tu", "es", "You are a ", "Ea", "est"], ["Id", "est", "It is a ", "Tu", "es"]];

//var subjectArray = [["Nos", "sumus", "We are ", "Vos", "estis"], ["Vos", "estis", "You are ", "Ei", "sunt"], ["Eae", "sunt", "The girls are ", "Nos", "sumus"], ["Ei", "sunt", "The boys are ", "Is", "est"], ["Ea", "sunt", "The things are ", "Ei", "est"]];


function incrementCount(){
	count++;
}

function setRandomSerpIndices(){

	randomSerpensAIndex = Math.floor(Math.random() * 2);
	correctAnswer = randomSerpensAIndex;
	wrongAnswer = randomSerpensAIndex;

	randomSerpensBIndex = Math.floor(Math.random() * 2);
	correctAnswer1 = randomSerpensBIndex;
	wrongAnswer1 = randomSerpensBIndex;

	randomSerpensCIndex = Math.floor(Math.random() * 2);
	correctAnswer2 = randomSerpensCIndex;
	wrongAnswer2 = randomSerpensCIndex;
}



//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var serBtnA = get("serBtnA");
    var serBtnB = get("serBtnB");
    var serBtnC = get("serBtnC");

    var serBtnA1 = get("serBtnA1");
    var serBtnB2 = get("serBtnB2");
    var serBtnC3 = get("serBtnC3");



    var responseButton = get("responseButton");
    var responseNext = get("responseNext");





//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "Serpens2B";}

function gameTitle() {get("startButton").innerHTML = "Start the Game!";}





//This loads the names of the games

    appName();
    //gameTitle();


function resetColors(){

		serBtnA.style.backgroundColor = "white";
		serBtnA.style.border = "white";
		serBtnA.style.color = "black";
		serBtnA.disabled =false;
		document.getElementById("serpensA").style.backgroundColor = "white";

		serBtnA1.style.color = "black";
		serBtnA1.style.backgroundColor = "white";
		serBtnA1.style.border = "white";
		serBtnA1.disabled = false;
		document.getElementById("serpensA1").style.backgroundColor = "white";



		serBtnB.style.backgroundColor = "white";
		serBtnB.style.border = "white";
		serBtnB.style.color = "black";
		serBtnB.disabled =false;
		document.getElementById("serpensB").style.backgroundColor = "white";

		serBtnB2.style.color = "black";
		serBtnB2.style.backgroundColor = "white";
		serBtnB2.style.border = "white";
		serBtnB2.disabled = false;
		document.getElementById("serpensB2").style.backgroundColor = "white";


		serBtnC.style.backgroundColor = "white";
		serBtnC.style.border = "white";
		serBtnC.style.color = "black";
		serBtnC.disabled =false;
		document.getElementById("serpensC").style.backgroundColor = "white";

		serBtnC3.style.color = "black";
		serBtnC3.style.backgroundColor = "white";
		serBtnC3.style.border = "white";
		serBtnC3.disabled = false;
		document.getElementById("serpensC3").style.backgroundColor = "white";

		responseButton.innerHTML = "";
		responseButton.style.color = "";

}


var correctAns = 0;
var correctAnswerTotal = 1;








//Score variables and functions



    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }


 //Timer variables
	var timeleft = 20;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			resetColors();
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
    			correctAns = 0;


  }

}



function stopTimer() {


	clearInterval(countdown);


}


function resetTimer(){

	if (correctAns >= 3){
	resetColors();
	stopTimer();
	timeleft = 20;
	document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;

    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Optime!"
    			responseButton.style.color = "yellow";
    			serBtnA.innerHTML = "";
    			serBtnB.innerHTML = "";
    			serBtnC.innerHTML = "";
    			serBtnA1.innerHTML = "";
    			serBtnB2.innerHTML = "";
    			serBtnC3.innerHTML = "";
	correctAns = 0;
}
}



function enableButtons(){

	serBtnA.disabled = false;
	serBtnB.disabled = false;
	serBtnC.disabled = false;

	serBtnA1.disabled = false;
	serBtnB2.disabled = false;
	serBtnC3.disabled = false;


}

function disableButtons(){
	serBtnA.disabled = true;
	serBtnB.disabled = true;
	serBtnC.disabled = true;

	serBtnA1.disabled = true;
	serBtnB2.disabled = true;
	serBtnC3.disabled = true;
}




function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }




 function serpens() {

 countDownTimer();
 timeleft = 20;
countdown = setInterval(countDownTimer,1000);


 resetColors();
 setRandomSerpIndices();
 enableButtons();
 startButton.disabled = true;



 class Noun{

 	constructor(nounForms){
 	this.nounForm = nounForms;
 	}
 }




//This sets the correct subject in serpensA

var randomNounIndex = Math.floor(Math.random() * subjectArray.length);
newSubject = new Noun(subjectArray[randomNounIndex][0]);
var subject = subjectArray[randomNounIndex][0];


//This sets the false subject in serpensA1
falseSubject = new Noun(subjectArray[randomNounIndex][1]);
var fakeSubject = subjectArray[randomNounIndex][3]
//get("serBtnA1").innerHTML = fakeSubject;

//This randomizes the serpensA and serpensA1



if (randomSerpensAIndex == 0) {
	get("serBtnA").innerHTML = subject;
	get("serBtnA1").innerHTML = fakeSubject;

} else {
	get("serBtnA1").innerHTML = subject;
	get("serBtnA").innerHTML = fakeSubject;

}





//This sets the correct subject in serpensB
//var subjectArray = [["Is", "est", "He is a "], ["ego", "sum", "I am a "], ["Ea", "est", "She is a "], ["tu", "es", "You are a "], ["Id", "est", "It is a "]];

//var objectArray = [["puella", "puell", "girl"], ["agricola", "agricol", "farmer"], ["filia", "fili", "daughter"], ["ancilla", "ancill", "maid servant"], ["nauta", "naut", "sailor"]];
//var randomObjectIndex = Math.floor(Math.random() * objectArray.length);
//newObject = new Noun(objectArray[randomObjectIndex][1]);
//object = newObject.nounForm +accPE1;
var verb2B = subjectArray[randomNounIndex][1]
get("serBtnB").innerHTML = verb2B;


//This sets the fake object in serpensB2
//falseObject = new Noun(objectArray[randomObjectIndex][0]);
//fakeObject = falseObject.nounForm;
var fakeVerb2B = subjectArray[randomNounIndex][4]
get("serBtnB2").innerHTML = fakeVerb2B;


//This randomizes serpensB and serpensB2


if (randomSerpensBIndex == 0) {
	get("serBtnB").innerHTML = verb2B;
	get("serBtnB2").innerHTML = fakeVerb2B;
} else {
	get("serBtnB2").innerHTML = verb2B;
	get("serBtnB").innerHTML = fakeVerb2B;
}


var objectArray = [["puella", "puell", "girl", "girls"], ["femina", "femin", "woman", "women"], ["agricola", "agricol", "farmer", "farmers"], ["filia", "fili", "daughter", "daughters"], ["ancilla", "ancill", "maid servant", "maid servants"], ["nauta", "naut", "sailor", "sailors"]];
var randomObjectIndex = Math.floor(Math.random() * objectArray.length);

falseObject = new Noun(objectArray[randomObjectIndex][1]);
var predNom = objectArray[randomObjectIndex][0];
//var predNom = falseObject.nounForm + nomPE2;
get ("serBtnC").innerHTML = predNom;
object = falseObject.nounForm + accPE1;
//object = falseObject.nounForm + accPE2;
get ("serBtnC3").innerHTML = object;

if (randomSerpensCIndex == 0) {
 get("serBtnC3").innerHTML = object;
 get("serBtnC").innerHTML = predNom;
} else {
 get("serBtnC").innerHTML = object;
 get("serBtnC3").innerHTML = predNom;
}







//This prints the correct subject in the sentence

var subjectTranslation = subjectArray[randomNounIndex][2];


//This sets the correc verb translaiton in the sentence


//This prints the direct object in the sentence

var objectTranslation = objectArray[randomObjectIndex][2];
//var objectTranslation = objectArray[randomObjectIndex][3];








function sentence(){
	get("startButton").innerHTML = subjectTranslation + " " + objectTranslation + ".";
}

sentence();

incrementCount();



//responseButton.innerHTML = count;

if (count > num_questions) {
	resetColors();
	serBtnA.innerHTML = "";
	serBtnB.innerHTML = "";
	serBtnC.innerHTML = "";

	serBtnA1.innerHTML = "";
	serBtnB2.innerHTML = "";
	serBtnC3.innerHTML = "";


	startButton.innerHTML = "Click to play again!"
	startButton.disabled = false;
	count = 0;
	document.getElementById("boxThree").innerHTML = "Score";
	responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		points = 0;

	stopTimer();
	document.getElementById("boxOne").innerHTML = "Timer";

}




}













function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}











function clickedButton1(){


	if (correctAnswer == 0){
		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnA.style.backgroundColor = "yellow";
		serBtnA.style.border = "yellow";
		document.getElementById("serpensA").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";

		resetTimer();


	}

if (wrongAnswer == 1){

		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";


	}





}


function clickedButton2(){

	if (wrongAnswer == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnA1.style.color = "red";
		serBtnA1.style.backgroundColor = "black";
		serBtnA1.style.border = "black";
		serBtnA1.disabled = true;
		document.getElementById("serpensA1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		responseButton.innerHTML = correctAns;
		document.getElementById("boxThree").innerHTML = points;


		serBtnA1.style.backgroundColor = "yellow";
		serBtnA1.style.border = "yellow";
		document.getElementById("serpensA1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnA.style.color = "red";
		serBtnA.style.backgroundColor = "black";
		serBtnA.style.border = "black";
		serBtnA.disabled = true;
		document.getElementById("serpensA").style.backgroundColor = "black";

		resetTimer();

	}


}






function clickedButton3(){

	if (correctAnswer1 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB.style.backgroundColor = "yellow";
		serBtnB.style.border = "yellow";
		document.getElementById("serpensB").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";

		resetTimer();

	}

if (wrongAnswer1 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton4(){

	if (wrongAnswer1 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;


		serBtnB2.style.color = "red";
		serBtnB2.style.backgroundColor = "black";
		serBtnB2.style.border = "black";
		serBtnB2.disabled = true;
		document.getElementById("serpensB2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer1 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;
		document.getElementById("boxThree").innerHTML = points;

		serBtnB2.style.backgroundColor = "yellow";
		serBtnB2.style.border = "yellow";
		document.getElementById("serpensB2").style.backgroundColor = "yellow";

		//responseButton.innerHTML = correctAns;
		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";


		serBtnB.style.color = "red";
		serBtnB.style.backgroundColor = "black";
		serBtnB.style.border = "black";
		serBtnB.disabled = true;
		document.getElementById("serpensB").style.backgroundColor = "black";

		resetTimer();
	}


}







function clickedButton5(){

	if (correctAnswer2 == 0){

		correctAnswerAudio();
		//clickedCorrectAnswerFiveAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;

		document.getElementById("boxThree").innerHTML = points;

		serBtnC.style.backgroundColor = "yellow";
		serBtnC.style.border = "yellow";
		document.getElementById("serpensC").style.backgroundColor = "yellow";


		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";

		resetTimer();
	}

if (wrongAnswer2 == 1){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}


function clickedButton6(){

	if (wrongAnswer2 == 0){
		wrongAnswerAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;



		serBtnC3.style.color = "red";
		serBtnC3.style.backgroundColor = "black";
		serBtnC3.style.border = "black";
		serBtnC3.disabled = true;
		document.getElementById("serpensC3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

if (correctAnswer2 == 1){

		correctAnswerAudio();
		//clickedCorrectAnswerSixAudio();
		points += pointsPerCorrectAnswer;
		correctAns += correctAnswerTotal;


		document.getElementById("boxThree").innerHTML = points;

		serBtnC3.style.backgroundColor = "yellow";
		serBtnC3.style.border = "yellow";
		document.getElementById("serpensC3").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Bene!";
		responseButton.style.color = "yellow";



		serBtnC.style.color = "red";
		serBtnC.style.backgroundColor = "black";
		serBtnC.style.border = "black";
		serBtnC.disabled = true;
		document.getElementById("serpensC").style.backgroundColor = "black";

		resetTimer();
	}


}
