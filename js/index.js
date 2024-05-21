// JavaScript for index.js
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    const userScoreElement = document.getElementById('user-score');
    const leaderScoreElement = document.getElementById('leader-score');

    let userScore = 0;

    clickButton.addEventListener('click', () => {
        userScore++;
        userScoreElement.textContent = userScore;
        updateScores();
    });

    function updateScores() {
        let scores = [
            { name: 'User', score: userScore },
            { name: 'Leader', score: parseInt(leaderScoreElement.textContent) }
        ];

        scores.sort((a, b) => b.score - a.score);

        leaderScoreElement.textContent = scores[0].score;
    }
});
