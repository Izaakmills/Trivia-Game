
var questions = {
    1 : {
        question:"How many gallons of water does a tree drink a day?",
        answer:"2,000 liters",
        option1:"1,500 liters",
        option2:"1,000 liters"
    },
    2 : {
        question:"How many pounds of carbon can a tree absorb in a year?",
        answer:"50 pounds",
        option1:"48 pounds",
        option2:"45 pounds"
    },
    3 : {
        question:"Where are the oldest living trees thought to live?",
        answer:"Russia",
        option1:"Greece",
        option2:"California"
    },
    4 : {
        question:"What is the largest species of tree in the world?",
        answer:"Pine",
        option1:"Magnolia",
        option2:"Sequoia"
    },
    5 : {
        question:"How is a trees age determined?",
        answer:" by the number of leaves on the top branch",
        option1:"by the number of rings from the middle",
        option2:"by how many feet tall the tree is"
    },
};
var rightAnswerCounter = 0;
var wrongAnswerCounter = 0;
var question = 0;
var questionCounter = 0;

// function for the timer that counts down once the button is clicked, then if user doesnt answer in time they get it wrong and the next question is shown
function countDown(){
    var timer = 120;
}

function displayQuestion(questionNumber){
    console.log(questionNumber)
    $(".answer-display").append("<h2>"+questions[questionNumber].question+"</h2>")
    $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-md btn-answer'>"+questions[questionNumber].option1+"</button></p>")
    $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-md btn-answer'>"+questions[questionNumber].option2+"</button></p>")
    $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-md btn-answer'>"+questions[questionNumber].answer+"</button></p>")
}


$(".btn-answer").click(function(){
    console.log(this)
});
// need screen congratulating user if they get it right
function userAnswer(guess){
    $(".btn-answer").click(function(){
        console.log(this)
    });
};


// hides intro jumbotron while game is in progress
function hideIntro(){
    $(".intro-jumbo").css("display","none")

}

// button click initiates gameplay
$(".btn-start").click(function(){
    gameOn = true
    hideIntro()
    questionCounter = 1;
    parseInt(questionCounter)
    console.log(questions[questionCounter].answer)
    displayQuestion(questionCounter)
});

$(".btn").click(function(){
    console.log(this)
    // userAnswer(guess);
})


