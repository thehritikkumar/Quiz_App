const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");

let currentQuestionIndex = 0;
let questions = [];
let correctCount = 0;
let incorrectCount = 0;

// Function to fetch questions from the Open Trivia Database API
async function getQuestions(category, numOfQuestions, difficulty, questionsType) {
    const API_URL = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${encodeURIComponent(category)}&difficulty=${difficulty}&type=${questionsType}`;
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Check if the question property exists
        if (data.results && data.results.length > 0 && data.results[0].question) {
            questions = data.results;
            displayQuestion();
        } else {
            console.error("Invalid data format:", data);
        }
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Function to display the current question
function displayQuestion() {
    optionsContainer.style.display = '';
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the currentQuestion object and its question property exist
    if (currentQuestion && currentQuestion.question) {
        questionElement.innerHTML = currentQuestion.question;

        optionsContainer.innerHTML = "";
        currentQuestion.incorrect_answers.forEach((option) => {
            addOption(option, false);
        });

        addOption(currentQuestion.correct_answer, true);
    } else {
        console.error("Invalid question format:", currentQuestion);
    }
}

// Function to add option buttons to the options container
function addOption(text, isCorrect) {
    const optionElement = document.createElement("button");
    optionElement.innerHTML = text;
    optionElement.classList.add("option");
    optionElement.dataset.correct = isCorrect;
    optionElement.addEventListener("click", selectOption);
    optionsContainer.appendChild(optionElement);
}

// Function to handle option selection
async function selectOption(event) {
    const selectedOption = event.target;
    const isCorrect = selectedOption.dataset.correct === "true";

    if (isCorrect) {
        questionElement.innerHTML = "Correct!";
        correctCount++;
    } else {
        questionElement.innerHTML = "Incorrect!";
        incorrectCount++;
    }

    optionsContainer.style.display = 'none';

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Wait for 0.5 seconds before showing the next question
        await new Promise(resolve => setTimeout(resolve, 500));
        displayQuestion();
    } else {
        // Quiz completed, show results
        await new Promise(resolve => setTimeout(resolve, 500));
        showResult();
    }
}
