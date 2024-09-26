// Selection functions

// Function to show the landing page and hide other sections
function showLandingPage() {
    document.querySelector(".landing-page").style.display = "";
    document.querySelector(".game-category").style.display = "none";
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".result").style.display = "none";
}

// Function to show the game category selection and hide other sections
function showGameCategory() {
    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".game-category").style.display = "";
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".result").style.display = "none";
}

// Function to show the quiz and hide other sections
function showQuiz() {
    const category = document.getElementById("category").value;
    const numOfQuestions = document.getElementById("numOfQuestions").value;
    const difficulty = document.getElementById("difficulty").value;
    const questionsType = document.getElementById("questionsType").value;

    document.querySelector(".landing-page").style.display = "none";
    document.querySelector(".game-category").style.display = "none";
    document.querySelector(".quiz").style.display = "";
    document.querySelector(".result").style.display = "none";

    // Load questions when quiz section is shown
    getQuestions(category, numOfQuestions, difficulty, questionsType);
}
