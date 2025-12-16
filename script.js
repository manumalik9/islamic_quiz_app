// =========================================================================
// 1. QUESTION BANK (3 Categories, 10 Questions Each)
// =========================================================================
const questionBank = {
    pillars: [ 
        {
            question: "How many pillars are there in Islam?",
            options: ["4", "5", "6", "7"],
            correct: 1, 
            explanation: "The five pillars of Islam are the foundation of Muslim life: Shahada, Salah, Zakat, Sawm, and Hajj."
        },
        {
            question: "Which pillar is the declaration of faith?",
            options: ["Salah", "Zakat", "Shahada", "Hajj"],
            correct: 2,
            explanation: "Shahada is the first pillar: 'There is no god but Allah, and Muhammad is the Messenger of Allah.'"
        },
        {
            question: "How many times a day are Muslims obliged to perform Salah (prayer)?",
            options: ["Three", "Five", "Seven", "Two"],
            correct: 1,
            explanation: "Muslims perform five obligatory prayers daily: Fajr, Dhuhr, Asr, Maghrib, and Isha."
        },
        {
            question: "What is the name of the annual pilgrimage to Mecca?",
            options: ["Umrah", "Jihad", "Hajj", "Sawm"],
            correct: 2,
            explanation: "Hajj is the fifth pillar, obligatory once in a lifetime for those who are physically and financially able."
        },
        {
            question: "Zakat is primarily a form of obligatory:",
            options: ["Fasting", "Charity", "Recitation", "Meditation"],
            correct: 1,
            explanation: "Zakat is obligatory charity, purification of wealth, typically 2.5% of one's accumulated wealth."
        },
        {
            question: "Which lunar month requires Muslims to perform Sawm (fasting)?",
            options: ["Shawwal", "Rabi' al-Awwal", "Ramadan", "Dhu al-Hijjah"],
            correct: 2,
            explanation: "Fasting (Sawm) is performed during the entire month of Ramadan."
        },
        {
            question: "In which direction do Muslims face during Salah?",
            options: ["East", "Jerusalem", "Qibla (Kaaba in Mecca)", "North"],
            correct: 2,
            explanation: "The direction is called Qibla, which points toward the Kaaba in Mecca."
        },
        {
            question: "Shahada must be recited with sincere belief to enter Islam. This sincerity is called:",
            options: ["Tawhid", "Ihsan", "Niyyah", "Iman"],
            correct: 3,
            explanation: "Iman refers to faith and sincere belief in the heart."
        },
        {
            question: "Which of these is NOT one of the pillars of Islam?",
            options: ["Salah", "Hajj", "Zakat", "Reading Quran"],
            correct: 3,
            explanation: "Reading Quran is highly recommended but not one of the five pillars."
        },
        {
            question: "The time for the morning prayer (Fajr) begins at:",
            options: ["Sunrise", "Midnight", "True Dawn", "Mid-day"],
            correct: 2,
            explanation: "Fajr begins at 'True Dawn' (Subh Sadiq) and ends at sunrise."
        }
    ],
    prophets: [ 
        {
            question: "Who is considered the first man and first prophet in Islam?",
            options: ["Nuh (Noah)", "Ibrahim (Abraham)", "Adam", "Musa (Moses)"],
            correct: 2,
            explanation: "Adam (peace be upon him) is revered as the father of mankind and the first prophet."
        },
        {
            question: "Which prophet was sent to the people of Thamud and given the miracle of a she-camel?",
            options: ["Isa (Jesus)", "Salih", "Yunus (Jonah)", "Hud"],
            correct: 1,
            explanation: "Prophet Salih (peace be upon him) was sent to the people of Thamud."
        },
        {
            question: "The Prophet Muhammad (PBUH) belonged to which tribe?",
            options: ["Banu Hashim", "Banu Qurayza", "Banu Khazraj", "Banu Aws"],
            correct: 0,
            explanation: "He belonged to the clan of Banu Hashim, within the larger Quraysh tribe."
        },
        {
            question: "Which prophet built the Kaaba along with his son Isma'il?",
            options: ["Dawud (David)", "Yaqub (Jacob)", "Ibrahim (Abraham)", "Yusuf (Joseph)"],
            correct: 2,
            explanation: "Ibrahim (peace be upon him) and his son Isma'il built the sacred structure in Mecca."
        },
        {
            question: "The migration of Prophet Muhammad (PBUH) from Mecca to Medina is known as:",
            options: ["Ghazwa", "Fatah", "Hijra", "Ziyara"],
            correct: 2,
            explanation: "The Hijra (migration) in 622 CE marks the beginning of the Islamic calendar."
        },
        {
            question: "Which prophet was swallowed by a large fish/whale?",
            options: ["Musa (Moses)", "Yunus (Jonah)", "Ilyas (Elias)", "Yahya (John)"],
            correct: 1,
            explanation: "Prophet Yunus (peace be upon him) is known as the 'Man of the Fish'."
        },
        {
            question: "Which title is often given to Prophet Musa (Moses) due to his direct speech with God?",
            options: ["Khalilullah", "Kalimullah", "Ruhullah", "Habibullah"],
            correct: 1,
            explanation: "Kalimullah means 'The one who spoke with God'."
        },
        {
            question: "Prophet Isa (Jesus) is known in Islam by which descriptive title?",
            options: ["Ruhullah (Spirit of God)", "Siddiq (Truthful)", "Al-Amin (Trustworthy)", "Imam"],
            correct: 0,
            explanation: "Isa (peace be upon him) is called Ruhullah and Kalimatullah (Word of God)."
        },
        {
            question: "The cave where Prophet Muhammad (PBUH) first received revelation was:",
            options: ["Cave of Thawr", "Cave of Hira", "Cave of Arafat", "Cave of Safa"],
            correct: 1,
            explanation: "The first revelation from Angel Jibreel occurred in the Cave of Hira."
        },
        {
            question: "What is the collective term for the five greatest messengers in Islam, including Muhammad (PBUH)?",
            options: ["Al-Khulafa", "Al-Muhajirun", "Ulul Azm", "Al-Ansar"],
            correct: 2,
            explanation: "Ulul Azm ('Those of strong resolve') are Nuh, Ibrahim, Musa, Isa, and Muhammad (peace be upon them all)."
        }
    ],
    quran: [ 
        {
            question: "How many chapters (Surahs) are there in the Quran?",
            options: ["66", "114", "100", "77"],
            correct: 1,
            explanation: "The Quran is composed of 114 Surahs."
        },
        {
            question: "What is the name of the longest Surah in the Quran?",
            options: ["Surah Ya-Sin", "Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Kahf"],
            correct: 2,
            explanation: "Surah Al-Baqarah (The Cow) is the second and longest Surah."
        },
        {
            question: "What does the word 'Quran' literally mean?",
            options: ["The Light", "The Guidance", "The Recitation", "The Book"],
            correct: 2,
            explanation: "Quran literally means 'the recitation' or 'that which is recited'."
        },
        {
            question: "What is the name of the opening Surah of the Quran, often called 'The Mother of the Book'?",
            options: ["Al-Ikhlas", "An-Nas", "Al-Fatiha", "Al-Kawthar"],
            correct: 2,
            explanation: "Surah Al-Fatiha is the first chapter."
        },
        {
            question: "The Quran was revealed to Prophet Muhammad (PBUH) over a period of approximately:",
            options: ["10 years", "23 years", "30 years", "40 years"],
            correct: 1,
            explanation: "The revelation took place over 23 years (610 CE to 632 CE)."
        },
        {
            question: "Where were the majority of the Surahs revealed?",
            options: ["Medina", "Mecca", "Jerusalem", "Ta'if"],
            correct: 1,
            explanation: "Surahs revealed before the Hijra are considered Meccan; they form the majority."
        },
        {
            question: "The final verse of the Quran to be revealed is generally considered to be in which Surah?",
            options: ["Al-Ma'idah", "Al-Nasr", "Al-Baqarah", "Al-Kafirun"],
            correct: 2,
            explanation: "The verse is found in Surah Al-Baqarah: 'And fear the Day when you shall be brought back to Allah...'"
        },
        {
            question: "The first word revealed to the Prophet Muhammad (PBUH) was:",
            options: ["Praise", "Worship", "Recite (Iqra)", "Believe"],
            correct: 2,
            explanation: "The first word of revelation was 'Iqra' (Recite/Read) from Surah Al-Alaq."
        },
        {
            question: "The Quran is divided into how many equal parts (Juz) for ease of recitation?",
            options: ["15", "20", "25", "30"],
            correct: 3,
            explanation: "The Quran is divided into 30 parts (Juz) to facilitate reading it within the month of Ramadan."
        },
        {
            question: "What does the phrase 'Bismillah ir-Rahman ir-Rahim' preceding most Surahs mean?",
            options: ["God is the Greatest", "In the Name of God, the Most Gracious, the Most Merciful", "Glory to God", "God is One"],
            correct: 1,
            explanation: "This phrase is known as the Basmala."
        }
    ]
};

// =========================================================================
// 2. QUIZ STATE VARIABLES (Task 4.2, Task 5.1, Timer Integration)
// =========================================================================
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = '';
let currentQuizData = [];

// Timer Variables
let intervalId;         // Stores the interval for the 15-second countdown
let totalTime = 0;      // Tracks the total time taken for the entire quiz (in seconds)
let questionStartTime;  // Tracks the start time of the current question (timestamp)
// Array to track time spent on each question (in seconds), undefined for unanswered, 15s for timeout, 0s for skipped (early submit)
let timeSpentPerQuestion = []; 


// =========================================================================
// 3. DOM ELEMENT REFERENCES
// =========================================================================
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');

const categoryTitle = document.getElementById('category-title');
const questionTracker = document.getElementById('question-tracker');
const progressBar = document.getElementById('quiz-progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackSection = document.getElementById('feedback-section');
const resultAlert = document.getElementById('result-alert');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const timeLeftEl = document.getElementById('time-left'); 

// Results Screen elements
const finalScoreEl = document.getElementById('final-score');
const percentageText = document.getElementById('percentage-text');
const highScoreSummary = document.getElementById('high-score-summary');
const highScoresDisplay = document.getElementById('high-scores-display');


// =========================================================================
// 4. LOCAL STORAGE (HIGH SCORE) FUNCTIONS (Task 4.1)
// =========================================================================

/** Loads high scores from localStorage */
function loadHighScores() {
    return JSON.parse(localStorage.getItem('islamicQuizHighScores')) || {};
}

/** Saves a new high score if it is better than the existing one for the category */
function saveHighScore(newScore, category) {
    const highScores = loadHighScores();
    
    if (!highScores[category] || newScore > highScores[category]) {
        highScores[category] = newScore;
        localStorage.setItem('islamicQuizHighScores', JSON.stringify(highScores));
        return true; // New high score achieved
    }
    return false;
}

/** Displays high scores on the welcome screen */
function displayHighScores() {
    const scores = loadHighScores();
    highScoresDisplay.innerHTML = '';
    
    const categoryTitles = {
        'pillars': 'Pillars of Islam',
        'prophets': 'Prophets in Islam',
        'quran': 'Quran Knowledge'
    };

    for (const key in scores) {
        if (scores.hasOwnProperty(key)) {
            const scoreHtml = `
                <div class="col-md-4 mt-2">
                    <span class="badge bg-info text-dark">${categoryTitles[key] || key.toUpperCase()}: ${scores[key]}/10</span>
                </div>
            `;
            highScoresDisplay.innerHTML += scoreHtml;
        }
    }
    if (highScoresDisplay.innerHTML === '') {
        highScoresDisplay.innerHTML = '<p class="text-muted">No scores recorded yet.</p>';
    }
}

// =========================================================================
// 5. TIMER FUNCTIONS 
// =========================================================================

/** Starts the 15-second countdown timer for the current question. */
function startTimer() {
    // 1. Clear any previous interval to prevent multiple timers running
    clearInterval(intervalId); 

    let timeLeft = 15;
    questionStartTime = Date.now(); // Record the exact start time

    // 2. Update the display immediately
    timeLeftEl.textContent = `Time Left: ${timeLeft}s`;

    intervalId = setInterval(() => {
        timeLeft--;
        timeLeftEl.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            
            // Automatically move to the next question
            handleTimeout(); 
        }
    }, 1000); // Update every second
}

/** Handles automatic timeout logic (user ran out of time). */
function handleTimeout() {
    // Disable options
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.setAttribute('disabled', 'true'));
    
    // Log the full 15 seconds for timeout if not already answered
    if (currentQuestionIndex < currentQuizData.length && timeSpentPerQuestion[currentQuestionIndex] === undefined) {
        timeSpentPerQuestion[currentQuestionIndex] = 15; 
    }

    // Visual feedback for timeout
    resultAlert.className = 'alert alert-warning';
    resultAlert.textContent = 'Time expired! Moving to the next question.';
    explanationText.textContent = `Explanation: ${currentQuizData[currentQuestionIndex].explanation}`;
    
    resultAlert.classList.remove('d-none');
    feedbackSection.classList.remove('d-none');
    
    // Automatically proceed after a short delay so the user sees the explanation
    setTimeout(() => {
        // Only proceed if the quiz hasn't ended during the timeout
        if (currentQuestionIndex < currentQuizData.length) {
            nextQuestion();
        }
    }, 3000); 
}


// =========================================================================
// 6. QUIZ FLOW FUNCTIONS (Task 2.2, Task 3.1)
// =========================================================================

/** Initialize quiz state and display the first question (Task 1.2) */
function startQuiz(category) {
    selectedCategory = category;
    currentQuizData = questionBank[category];
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 0; 
    timeSpentPerQuestion = []; // Reset the time tracking array
    clearInterval(intervalId); 
    
    // Reset/Hide screens
    welcomeScreen.classList.add('d-none');
    resultsScreen.classList.add('d-none');
    quizContainer.classList.remove('d-none');
    
    // Set category title
    categoryTitle.textContent = `Category: ${category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}`;
    
    displayQuestion();
}

/** Displays the current question and options (Task 2.2) */
function displayQuestion() {
    // Check if quiz has ended
    if (currentQuestionIndex >= currentQuizData.length) {
        endQuiz(false); // Quiz ended naturally
        return;
    }
    
    // Start the 15-second timer
    startTimer(); 
    
    // Reset UI for new question
    feedbackSection.classList.add('d-none');
    resultAlert.classList.add('d-none');
    nextBtn.setAttribute('disabled', 'true');
    optionsContainer.innerHTML = ''; // Clear previous options

    const currentQ = currentQuizData[currentQuestionIndex];
    
    // Update question text and tracker (Task 3.1)
    questionText.textContent = currentQ.question;
    questionTracker.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuizData.length}`;

    // Update progress bar (Task 3.1)
    const progressPercentage = (currentQuestionIndex / currentQuizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${Math.round(progressPercentage)}% Complete`;

    // Populate options (Bootstrap Buttons)
    currentQ.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-secondary option-btn';
        button.textContent = optionText;
        button.setAttribute('data-index', index);
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

/** Handles answer selection, checks correctness, and provides visual feedback (Task 2.2, Task 3.2) */
function selectAnswer(selectedIndex) {
    // Check if an answer has already been selected for this question to prevent double-logging
    if (timeSpentPerQuestion[currentQuestionIndex] !== undefined) {
        return; 
    }
    
    // 1. Stop the timer and calculate time taken
    clearInterval(intervalId); 
    const timeTakenForQuestion = Math.round((Date.now() - questionStartTime) / 1000);
    // Log the time taken for the *current* question index
    timeSpentPerQuestion[currentQuestionIndex] = timeTakenForQuestion; 

    const currentQ = currentQuizData[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.correct;
    
    // Disable all option buttons after selection
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.setAttribute('disabled', 'true'));
    
    // Visual Feedback (Task 3.2)
    const selectedButton = optionsContainer.querySelector(`[data-index="${selectedIndex}"]`);
    const correctButton = optionsContainer.querySelector(`[data-index="${currentQ.correct}"]`);

    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        resultAlert.className = 'alert alert-success';
        resultAlert.textContent = 'Correct Answer! SubhanAllah.';
    } else {
        selectedButton.classList.add('incorrect');
        correctButton.classList.add('correct'); // Highlight the correct one
        resultAlert.className = 'alert alert-danger';
        resultAlert.textContent = 'Incorrect. Try again next time.';
    }

    // Show explanation and feedback section (Task 3.2)
    explanationText.textContent = `Explanation: ${currentQ.explanation}`;
    resultAlert.classList.remove('d-none');
    feedbackSection.classList.remove('d-none');
    nextBtn.removeAttribute('disabled');
}

/** Moves to the next question (Task 2.2) */
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion(); // Calls displayQuestion, which handles moving to the next Q or ending the quiz
}

/** Calculates final score, saves high score, and shows results (Task 4.2) 
 * @param {boolean} isEarlySubmit - True if the user manually ended the quiz before all questions were finished.
*/
function endQuiz(isEarlySubmit = false) {
    // Ensure any running timer is stopped
    clearInterval(intervalId); 

    quizContainer.classList.add('d-none');
    resultsScreen.classList.remove('d-none');

    // --- Early Submission / Time Tracking Logic ---
    if (isEarlySubmit) {
        // 1. Handle the current question's time if it was active but not answered
        if (currentQuestionIndex < currentQuizData.length && timeSpentPerQuestion[currentQuestionIndex] === undefined) {
             const timeTakenForQuestion = Math.round((Date.now() - questionStartTime) / 1000);
             timeSpentPerQuestion[currentQuestionIndex] = timeTakenForQuestion;
        }
        
        // 2. Mark all remaining unanswered/unvisited questions as 0s spent
        for (let i = 0; i < currentQuizData.length; i++) {
            if (timeSpentPerQuestion[i] === undefined) {
                timeSpentPerQuestion[i] = 0; // Mark as 0s spent for unanswered/skipped
            }
        }
    } else {
         // Natural End: If the last question was displayed but timed out, ensure it's logged
         if (currentQuestionIndex === currentQuizData.length && timeSpentPerQuestion[currentQuestionIndex - 1] === undefined) {
             // This case should ideally be caught by handleTimeout or selectAnswer, 
             // but as a safeguard, log 15s if we reached the end without a time entry for the last Q.
             timeSpentPerQuestion[currentQuestionIndex - 1] = 15;
         }
    }
    // --- End Time Tracking Logic ---

    // Re-calculate totalTime based on the completed timeSpentPerQuestion array
    totalTime = timeSpentPerQuestion.reduce((sum, time) => sum + time, 0);

    // Final score calculation
    const totalQuestions = currentQuizData.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(1);

    // Convert totalTime (seconds) into minutes and seconds
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeDisplay = `${minutes} min ${seconds} sec`;

    // Update progress bar to 100%
    progressBar.style.width = '100%';
    progressBar.textContent = '100% Complete';
    
    // Display results (Task 4.2)
    finalScoreEl.textContent = `Score: ${score} / ${totalQuestions}`;
    
    // Add a note if the quiz was submitted early
    if (isEarlySubmit) {
        percentageText.innerHTML = `Percentage: ${percentage}% | Total Time: ${timeDisplay}<br><small class="text-danger">Quiz submitted early. Unanswered questions count as incorrect (0 points).</small>`;
    } else {
        percentageText.textContent = `Percentage: ${percentage}% | Total Time: ${timeDisplay}`;
    }

    // High Score Logic (Task 4.1)
    const isNewHighScore = saveHighScore(score, selectedCategory);
    const bestScore = loadHighScores()[selectedCategory] || 0;

    if (isNewHighScore) {
        highScoreSummary.className = 'alert alert-success';
        highScoreSummary.innerHTML = `**CONGRATULATIONS!** This is a new high score for the **${selectedCategory.toUpperCase()}** category! (${bestScore}/10)`;
    } else {
        highScoreSummary.className = 'alert alert-info';
        highScoreSummary.innerHTML = `Your highest score in this category is **${bestScore}** / 10.`;
    }
}

// =========================================================================
// 7. INITIALIZATION
// =========================================================================

// Runs when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the initial view is correct
    quizContainer.classList.add('d-none');
    resultsScreen.classList.add('d-none');
    welcomeScreen.classList.remove('d-none');
    
    // Load and display high scores on startup
    displayHighScores();
});