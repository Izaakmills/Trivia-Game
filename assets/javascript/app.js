
var questions = [
    {
        question: "How many gallons of water does a tree drink a day?",
        answers: {
            a: "2,000 liters",
            b: "1,500 liters",
            c: "1,000 liters"
        },
        correctAnswer: "a",
    },
    {
        question: "How many pounds of carbon can a tree absorb in a year?",
        answers: {
            a: "50 pounds",
            b: "115 pounds",
            c: "48 pounds"
        },
        correctAnswer: "a",
    },
    {
        question: "Where are the oldest living trees thought to live?",
        answers: {
            a: "California",
            b: "Russia",
            c: "Argentina"
        },
        correctAnswer: "a",
    },
    {
        question: "What is the largest species of tree in the world?",
        answers: {
            a: "Sequia",
            b: "Magnolia",
            c: "White Pine"
        },
        correctAnswer: "a",
    },
    {
        question: "How is a trees age determined?",
        answers: {
            a: "by the number of leaves on the top branch",
            b: "by the number of rings from the middle",
            c: "by how many feet tall the tree is"
        },
        correctAnswer: "a",
    },
];
var rightAnswerCounter = 0;
var wrongAnswerCounter = 0;
var question = 0;
var questionCounter = 0;
var timerRunning = false;
var answer = "";
var answerLogged = false;
var numCorrect = 0
var gameOn = false;
// timer object
var timer = {
    start: function () {
        if (!timerRunning) {
            timerRunning = true
            timerID = setInterval(timer.count, 1000)
        }
    }
}
var num= Object.keys(questions)
var numQuestions = num.length
$(window).on("load", function () {

    // start button click initiates gameplay
    $(".btn-start").click(function () {
        var gameOn = true
        hideIntro()
        answer = questions[questionCounter].correctAnswer
        displayQuestion(questionCounter)

        // function for the timer that counts down once the button is clicked, then if user doesnt answer in time they get it wrong and the next question is shown

        function displayQuestion(questionNumber) {
            if (questionNumber < numQuestions){
                answer = questions[questionNumber].correctAnswer
                $(".prompt").html("<h2>" + questions[questionNumber].question + "</h2>")
                $(".answer-display").html("<p><button type='button' class='btn btn-primary btn-lg' id='a'>" + questions[questionNumber].answers.a + "</button></p>")
                $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-lg'id='b'>" + questions[questionNumber].answers.b + "</button></p>")
                $(".answer-display").append("<p><button type='button' class='btn btn-primary btn-lg' id='c'>" + questions[questionNumber].answers.c + "</button></p>")
                answerLogged = false
            } else {
                finalScreen()
            }
        };
        // document.getElementById("#a/b/c"),onclick = userAnswer(this)
        $(".btn").click(function(){
            guess = this.id
            switch  (guess) {

            case "a":
                userAnswer("a")
                break;
            case "b":
                userAnswer("b")
                break;
            case "c":
                userAnswer("c")
                break;
            default :
                break;
            }
        });

        function userAnswer(guess) {
                if (gameOn) {
                    if (guess == answer) {
                        numCorrect = numCorrect + 1
                        setTimeout(showResult("won"),5000)
                    }
                    else {
                        setTimeout(showResult("lost"),5000)
                    }
                    questionCounter = questionCounter + 1;
                    displayQuestion(questionCounter)
                }
        };

        // hides start button when game is in progress
        function hideIntro() {
            $(".btn-start").css("display", "None")
        }

        // timeout function to show before moving to next question
        function showResult(result){
            $(".prompt").html("<div class='alert alert-success' role='alert'> You "+ result+"(</div>")
        }

        function finalScreen(){
            $(".prompt").html("<h2> You have completed the tree quiz good job</h2>")
            $(".answer-display").html("<p> Correct Answers:" + numCorrect+"</p>")
            $(".answer-display").append("<p>/p>")
            $(".answer-display").append("<p></p>")
        }
    });//btn start closing tag

});//On load closing tag


