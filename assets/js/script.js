// code for questions and answers
var questions = [
    {
        question: "What is the capital of Ireland?",
        answers: {
            a:'Tibet',
            b:'Melbourne',
            c:'Dublin'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is the current Prime Minister of the UK?",
        answers: {
            a: 'David Cameron',
            b: 'Boris Johnson',
            c: 'Teresa May'
        },
        correctAnswer: 'b'
    }
    {
        question: "Name the famous Chocolate Brand",
        answers: {
            a: 'Cadburys',
            b: 'Tadburs',
            c: 'CadBars'
        },
        correctAnswer: 'a'
    }
    {
        question: "What is a common household pet",
        answers: {
            a: 'Ostrich',
            b: 'Cat',
            c: 'Giraffe'
        },
        correctAnswer: 'b'
    }
];
//link between html & script
var tableContainer = document.getElementById('table');
var scoreContainer = document.getElementById('score');
var goButton = document.getElementById('go');

generateTable(questions, tableContainer, scoreContainer, goButton);

//generating quiz

function generateTable(questions, tableContainer) {
//For output of quiz
    var output = [];
    var answers;
    for (var i=0; i<questions.length;i++) {
        //So answer starts as blank by default
        answers = [];
        //Link to correct answer
        for(letter in questions[i].answers) {
            // radio button to select answers
            answers.push(
                '<label>'
                  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                  + letter + ': '
                  + questions[i].answers[letter]
                + '</label>'
              );
        }
        // adds questions and answers to output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">'+ answers.join('') + '</div>'
        );
    }
    //combining into one string to put onto page
    tableContainer.innerHTML = output.join('');
}

function showResults(questions, tableContainer, scoreContainer) {
    // for gathering answers
    var answerContainers = tableContainer.querySelectorAll('.answers');
    //for keeping track of answers
    var playerAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++){
        //to find answer
        playerAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||
    {}).value;

    // answer is right
    if(playeranswer===questions[i].correctAnswer){
        // +1 to number of right answers
        numCorrect++;

        //adds a green color to right answers
        answerContainers[i].style.color = 'green';
    }
    //adds a red color if wrong answer
    else {
        answerContainers[i].style.color = 'red';
    }
    }
    //compares right answers from total amount of questions
    scoreContainer.innerHTML = numCorrect + 'out of' + questions.length;
}
// show questions as page loads
showQuestions(questions, tableContainer);

//show right and wrong answers upon submitting
submitButton.onClick = function() {
    showResults(questions, tableContainer, scoreContainer);
}