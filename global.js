// global.js

// Import functions from selection.js
import { showGameCategory, showLandingPage, showQuiz } from './selection.js';
import { displayQuestion, selectOption } from './question.js';
import { displayResult } from './result.js';

// Ensure functions are available globally
window.showGameCategory = showGameCategory;
window.showLandingPage = showLandingPage;
window.showQuiz = showQuiz;
window.displayQuestion = displayQuestion;
window.selectOption = selectOption;
window.displayResult = displayResult;
