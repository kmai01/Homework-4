var body = document.body;
var questionEl = document.querySelector("#question");

// var choiceA = document.querySelector("#A");
// var choiceB = document.querySelector("#B"); 
// var choiceC = document.querySelector("#C");
// var choiceD = document.querySelector("#D");
var introEl = document.querySelector('#introduction');
var startButton = document.querySelector('#start');
const answerButtonsElement = document.querySelector('#choices');
const choiceButtons = document.querySelector('#btn');

startButton.addEventListener('click', startquiz);

// var lastIndex = questions.length-1;
// var runningIndex = 0;

let shuffledQuestions, currentQuestionIndex;


function startquiz() {
    // introduction.style.display = "none";
    // start.style.display = "none";
    // console.log('here');
    introEl.classList.add('hide')
    startButton.classList.add('hide')

 shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionEl.classList.remove('hide')
    currentQuestionIndex = 0;
    setNextQuestion()


}

function setNextQuestion() {
    //resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    // var ql= questions[runningIndex];
    // question.innerHTML="<p>" + ql.title + "</p>";


}

// function resetState()
// {
//     choiceButtons.classList.add('hide')
//     while(answerButtonsElement.firstChild){
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }
// }

function showQuestion(question) {
    questionEl.innerText = question.title;
    question.choices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        console.log(questions.choices)
        button.classList.add('btn');
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct;
        // }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function selectAnswer(e) {

}



