
var questions = [
    {   
        question: "How many gallons of water does a tree drink a day?",
        answers: { a:"2,000 liters",
        b:"1,500 liters",
        c:"1,000 liters"
        },
        correctAnswer: "a",
    },
    {   
        question: "How many pounds of carbon can a tree absorb in a year?",
        answers: { a:"50 pounds",
        b:"115 pounds",
        c:"48 pounds"
        },
        correctAnswer: "a",
    },
    {   
        question: "Where are the oldest living trees thought to live?",
        answers: { a:"California",
        b:"Russia",
        c:"Argentina"
        },
        correctAnswer: "a",
    },
    {   
        question: "What is the largest species of tree in the world?",
        answers: { a:"Sequia",
        b:"Magnolia",
        c:"White Pine"
        },
        correctAnswer: "a",
    },
    {   
        question: "How is a trees age determined?",
        answers: { a:"by the number of leaves on the top branch",
        b:"by the number of rings from the middle",
        c:"by how many feet tall the tree is"
        },
        correctAnswer: "a",
    },
];
var rightAnswerCounter = 0;
var wrongAnswerCounter = 0;
var question = 0;
var questionCounter = 0;
var timerRunning = false;
var answer;
// timer object
var timer = {
    start : function() {
        if (!timerRunning) {
            timerRunning = true
            timerID= setInterval(timer.count,1000)
        }
    }

}

// function for the timer that counts down once the button is clicked, then if user doesnt answer in time they get it wrong and the next question is shown


function displayQuestion(questionNumber){
    console.log(questionNumber)
    questionCounter ++; // loads next question into variable for later load
    $(".prompt").html("<h2>"+questions[questionNumber].question+"</h2>")
    $(".answer-display").html("<p><button type='button' class='btn btn-primary btn-md' id='a'>"+questions[questionNumber].answers.a+"</button></p>")
    $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-md'id='b'>"+questions[questionNumber].answers.b+"</button></p>")
    $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-md' id='c'>"+questions[questionNumber].answers.c+"</button></p>")
};

console.log(questionCounter)
// need screen congratulating user if they get it right
var show = $("#btn-md").attr('id');

// document.getElementById("#btn"),onclick = userAnswer(this)
function userAnswer(){
   console.log(this.id)
};


// hides intro jumbotron while game is in progress
function hideIntro(){
    $(".btn-start").css("display","None")
}

// button click initiates gameplay
$(".btn-start").click(function(){
    gameOn = true
    hideIntro()
    answer = questions[questionCounter].correctAnswer
    displayQuestion(questionCounter)
});



