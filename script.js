var body = document.body;
var questionEl = document.querySelector('#question');
var choice = [];

choice[0] = document.querySelector('#A');
choice[1] = document.querySelector('#B');
choice[2] = document.querySelector('#C');
choice[3] = document.querySelector('#D');

var introEl = document.querySelector('#introduction');
var startButton = document.querySelector('#start');
const answerButtonsElement = document.querySelector('#choices');
const choiceButtons = document.querySelector('#btn');

var lastIndex = 4;

var RunningIndex = 0;

function showQuestion() {

    let q = questions[RunningIndex];
    console.log(q.title)
    questionEl.innerHTML = "<p>" + q.title + "</p>";

    for (var i = 0; i < q.choices.length; i++) {
        choice[i].innerHTML = q.choices[i];
        console.log(choice[i]);



    }

}

startButton.addEventListener("click", startQuiz);

function startQuiz() {
showQuestion();

}


function checkAnswer(answer) {

    if ( answer = questions.answer) {
    // answer is correct , no time substract
    console.log(question.answer);
    console.log(answer);

}

else {

    // answer is incorrect, time subtract


}
 
if ( RunningIndex < lastIndex){

      RunningIndex++;
      showQuestion();

}
 else {
    
    // end the quiz and store highscore

 }


}
