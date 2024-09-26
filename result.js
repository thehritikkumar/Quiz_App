const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

// Function to show the result section
function showResult() {
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".result").style.display = "";

    correctCountElement.innerHTML = `Correct Answers: ${correctCount}`;
    incorrectCountElement.innerHTML = `Incorrect Answers: ${incorrectCount}`;
}
