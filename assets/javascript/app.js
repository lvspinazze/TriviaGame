//Create a timer that starts at 60 seconds and counts down to 0
//Create 10 different questions
//Each question has an array of answers to choose from
//Each answer has a selection bubble next to it
//Each question can only have one answer
//Create "Done" button at bottom of screen to submit answers
//When the timer hits 0 or done button is clicked, score is tallied
//Score is displayed for Correct Answers, Incorrect Answers, and Unanswered questions


//creates click events
$('#start').click(startGame);

var timer = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


var questions = [{
  question: "1 . In Disney's Beauty and the Beast, what household object is Lumiere?",
  answers: ["A chandelier", "A clock", "A candelabra", "A teapot"],
  correctAnswer: "A candelabra"
}, {
  question: "2 . What is the name of Mulan's horse?",
  answers: ["Mushu", "Khan", "Silver", "Spirit"],
  correctAnswer: "Khan"
}, {
  question: "3 . Which is NOT a name of one of the Seven Dwarfs?",
  answers: ["Sleepy", "Doc", "Dopey", "Angry"],
  correctAnswer: "Angry"
}, {
  question: "4 . Where does Peter Pan live?",
  answers: ["The Netherlands", "Neverland", "Middle earth", "The Lost Lagoon"],
  correctAnswer: "Neverland"
}, {
  question: "5 . Which is NOT a name of the three good fairies from Sleeping Beauty?",
  answers: ["Flora", "Fauna", "Tulip", "Merryweather"],
  correctAnswer: "Tulip"
}, {
  question:  "6 . In Disney's Lion King, what is Zazu's official title?",
  answers: ["Butler", "Steward", "Majordomo", "Secretary"],
  correctAnswer: "Majordomo"
}, {
  question: "7 . Who said \"Sometimes we only see how people are different from us. But if you look hard enough, you can see how much we're all alike\"?",
  answers: ["Jasmine in Aladdin", "Rafiki in The Lion King", "Mushu in Mulan", "Pocahontas in Pocahontas"],
  correctAnswer: "Jasmine in Aladdin"
}, {
  question: "8 . Woody says all of these phrases when you pull his string EXCEPT:",
  answers: ["There's a snake in my boot", "Reach for the Sky", "You're my favorite deputy!", "Howdy, little lady!"],
  correctAnswer: "Howdy little lady"
}];

function startGame() {
	
	//Creates a var to hold the setInterval function
	intervalId = setInterval(decrement, 1000);
	$('#start').remove();

	for (var i = 0; i < questions.length; i++) {
      $('#questions').append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#questions').append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
}

//assigns a numver value to each second in order to create a timer
function decrement() {
	timer--;
	//displays the timer in the time-left div
	$('#time-left').html('<h2>Time Remaining: ' + timer + '</h2>');
	//run the gameOver function when the timer hits 0
	if (timer === 0) {
		gameOver();
	}
}

function gameOver(){
	clearInterval(intervalId);
	$('#questions').html('Correct Answers: ' + correct);
	$('#questions').append('<br>Incorrect Answers: ' + incorrect);
	$('#questions').append('<br>Unanswered: ' + unanswered);
}
