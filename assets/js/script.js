// code for questions and answers
var myQuestions = [
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
    },
    {
        question: "Name the famous Chocolate Brand?",
        answers: {
            a: 'Cadburys',
            b: 'Tadburs',
            c: 'Cadbars'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is a common household pet?",
        answers: {
            a: 'Ostrich',
            b: 'Cat',
            c: 'Giraffe'
        },
        correctAnswer: 'b'
    },
    {
        question: "What continent is Kenya in?",
        answers: {
            a: 'Asia',
            b: 'Europe',
            c: 'Africa'
        },
        correctAnswer: 'c'
    },
    {
        question: "Where was Elon Musk born?",
        answers: {
            a: 'Canada',
            b: 'USA',
            c: 'South Africa'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following is a commonly used apparatus for making coffee?",
        answers: {
            a: 'French press',
            b: 'Spainish door',
            c: 'Italian window'
        },
        correctAnswer: 'a'
    },
];

var tableContainer = document.getElementById('table');
var scoreContainer = document.getElementById('score');
var goButton = document.getElementById('go');

generateQuiz(myQuestions, tableContainer, scoreContainer, goButton);

function generateQuiz(questions, tableContainer, scoreContainer, goButton){

  function showQuestions(questions, tableContainer){
    // place for answer
    var output = [];
    var answers;

    // to show every question
    for(var i=0; i<questions.length; i++){
      
      // resets answers
      answers = [];

      // to accomadate for all answers
      for(letter in questions[i].answers){

        // adds interactable answer input
        answers.push(
          '<label>'+ '<input type="radio" name="question'+i+'" value="'+letter+'">' + letter + ': '+ questions[i].answers[letter]+ '</label>'
        );
      }

      // pushes question and answer
      output.push(
        '<div class="question">' + questions[i].question + '</div>'+ '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // combines strings into one to use
    tableContainer.innerHTML = output.join('');
  }


  function showResults(questions, tableContainer, scoreContainer){
    
    // gathers answers
    var answerContainers = tableContainer.querySelectorAll('.answers');
    
    // keeps track of answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for all questions
    for(var i=0; i<questions.length; i++){

      // find users answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if user is right
      if(userAnswer===questions[i].correctAnswer){
        // +1 to tally
        numCorrect++;
        
        // change to green
        answerContainers[i].style.color = 'green';
      }
      // if wrong answer
      else{
        // change to red
        answerContainers[i].style.color = 'red';
      }
    }

    // compare right to all answers
    scoreContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions upon loading page
  showQuestions(questions, tableContainer);
  
  // shows results when clicked
  goButton.onclick = function(){
    showResults(questions, tableContainer, scoreContainer);
  };

}
