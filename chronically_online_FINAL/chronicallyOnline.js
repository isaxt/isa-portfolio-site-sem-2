// local storage keys
const LS_INDEX_KEY = "quiz_currentQuestionIndex";
const LS_SCORE_KEY = "quiz_score";

// check if data exists in localStorage
let currentQuestionIndex = parseInt(localStorage.getItem(LS_INDEX_KEY)) || 0;
let score = parseInt(localStorage.getItem(LS_SCORE_KEY)) || 0;

const questions = [
    //assigning "values" to each response
    {
        question: "How often are you online for school daily?",
        options: [
            { text: "3 hrs", value: 1 },
            { text: "4-6 hrs", value: 2 },
            { text: "7-9 hrs", value: 3 },
            { text: "10+ hrs", value: 4 }
        ]
    },
    {
        question: "How often are you online (aside from school + work)?",
        options: [
            { text: "3 hrs", value: 1 },
            { text: "4-6 hrs", value: 2 },
            { text: "7-9 hrs", value: 3 },
            { text: "10+ hrs", value: 4 }
        ]
    },
    {
        question: "Do you unwind by watching videos or listening to music?",
        options: [
            { text: "nope", value: 1 },
            { text: "occasionally", value: 2 },
            { text: "yes", value: 3 }
        ]
    },
    {
        question: "Do you tend to reply to messages and notifications instantly?",
        options: [
            { text: "nope!", value: 1 },
            { text: "depends", value: 2 },
            { text: "yes...", value: 3 }
        ]
    },
    {
        question: "Do you have a high screen time?",
        options: [
            { text: "no i don’t think so", value: 1 },
            { text: "i think it’s ok!", value: 2 },
            { text: "how high is too high?", value: 3 }
        ]
    },
    {
        question: "Do you obsess over your online/digital presence?",
        options: [
            { text: "no", value: 1 },
            { text: "not really", value: 2 },
            { text: "mmm-- a bit", value: 3 },
            { text: "yes", value: 4 }
        ]
    },
    {
        question: "Do you tend to neglect your real-life responsibilities?",
        options: [
            { text: "nope!", value: 1 },
            { text: "occasionally", value: 2 },
            { text: "yes...", value: 3 }
        ]
    },
    {
        question: "Do you suffer from withdrawals when you are offline?",
        options: [
            { text: "nope!", value: 1 },
            { text: "sometimes...", value: 2 },
            { text: "maybe...", value: 3 },
            { text: "yes", value: 4 }
        ]
    }
];
// // starts at 0 and goes up with each response
// let currentQuestionIndex = 0;

// // total score based on values of the answers
// let score = 0;

//dom element references
//displays everything
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

//displays current question + options
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // gets current question
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.addEventListener("click", () => checkAnswer(option.value)); // when button is clicked--> calls with score value
        optionsElement.appendChild(button);
    });
}

// handles when the user clickers on an answer
function checkAnswer(value) {
    score += value; // adds the value to the total score
    currentQuestionIndex++; // moves on to the next question
   
   // Save to localStorage
   localStorage.setItem(LS_SCORE_KEY, score);
   localStorage.setItem(LS_INDEX_KEY, currentQuestionIndex);

    if (currentQuestionIndex < questions.length) {
        showQuestion(); // displays the next question, if there are more following it
    } else {
        showResult(); // last question--> finish
    }
}

// shows final result after all questions have been answered
function showResult() {

    //hides the question + answer elements
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";

    // Clear localStorage when quiz is done
    localStorage.removeItem(LS_SCORE_KEY);
    localStorage.removeItem(LS_INDEX_KEY);

    // score range--> respective message with the total score
    let message = "";
    if (score <= 12) { // "balanced" user
        message = "you seem to have a balanced digital life. yippee!";
    } else if (score <= 20) { // moderate user
        message = "you're a moderate user. consider more offline time.";
    } else { // addicted i fear
        message = "you might be too attached to the digital world. touch some grass!";
    }

    resultContainer.textContent = `final verdict: ${message}`;
}

// click handler for the "proceed" button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

showQuestion();

function showResult() {
    // saves final score to localStorage before redirect
    localStorage.setItem("quiz_score", score);
    
    // redirects to result page
    window.location.href = "result.html";
}
