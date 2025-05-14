document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const scoreResult = document.getElementById('score-result');
    const scoreElement = document.getElementById('score');

    // Correct answers
    const correctAnswers = {
        q1: 'A',  // Capital of France is Paris
        q2: 'B'   // Capital of Japan is Tokyo
    };

    // Event listener for form submission
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload on form submission

        let score = 0;

        // Check answers
        const formData = new FormData(quizForm);
        
        // Check if the answer matches the correct answer for each question
        for (let [question, answer] of formData.entries()) {
            if (correctAnswers[question] === answer) {
                score++;
            }
        }

        // Display the score
        scoreElement.textContent = score;
        scoreResult.style.display = 'block';
    });
});
