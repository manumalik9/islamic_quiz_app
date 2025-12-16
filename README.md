# islamic_quiz_app

##  Project Overview

This is an interactive web-based quiz application designed to test and enhance knowledge of core Islamic topics. The app is built entirely using front-end technologies and features dynamic question rendering, visual feedback, and a persistent high-score tracking system.

This project meets the requirements for the **Excellent Implementation (Grade A)** level, including advanced features like timed questions and data persistence via `localStorage`.

###  Key Features

* **Three Core Categories:** Pillars of Islam, Prophets in Islam, and Quran Knowledge.
* **Visual Enhancements:** Includes a custom favicon (browser tab icon) and unique thematic images for each category to enhance the user experience.
* **Dynamic UI:** Uses Bootstrap 5 for a fully responsive and clean layout.
* **Progress Tracking:** Includes a visual progress bar that updates as the user advances through the questions.
* **Visual Feedback:** Answers are immediately color-coded (green for correct, red for incorrect) upon selection.
* **Detailed Explanations:** Shows a detailed explanation for each answer after submission.
* **Timed Questions (15s):** Each question has a **15-second time limit**; running out of time automatically moves to the next question and logs the full 15 seconds.
* **Early Submission:** Users can submit the quiz at any time via the "Submit Quiz Early" button. Unanswered questions are marked as incorrect, and time taken is calculated accurately up to the point of submission.
* **High Score Persistence (Grade A):** High scores for each category are saved locally using **`localStorage`** and displayed on the welcome screen.
* **Total Time Tracking:** Calculates and displays the total time taken to complete the entire quiz.

##  Technologies Used

* **HTML5:** Structure and content
* **CSS3:** Custom styling
* **Bootstrap 5.3:** Responsive UI components and styling
* **JavaScript (ES6):** All core logic, DOM manipulation, state management, and timer functionality

##  Installation and Usage

Since this is a purely front-end application, no server or database setup is required.

1.  **Download the Files:** Ensure you have the following files in your root directory: `index.html`, `style.css`, `script.js`, and the `images` folder.
2.  **Add Images:** The `images` folder must contain the following:
    * `favicon.ico` (The browser tab icon)
    * `pillars.png`
    * `prophets.png`
    * `quran.png`
3.  **Run the Application:**
    Open the `index.html` file directly in your preferred web browser (Chrome, Firefox, etc.).
4.  **Start Quiz:** Select one of the three category buttons on the welcome screen to begin the 10-question quiz.

##  Project Structure
