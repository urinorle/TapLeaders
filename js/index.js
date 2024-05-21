// JavaScript for index.js
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    const userScoreElement = document.getElementById('user-score');
    const leaderScoreElement = document.getElementById('leader-score');
    const secondScoreElement = document.getElementById('second-score');
    const thirdScoreElement = document.getElementById('third-score');

    let userScore = 0;

    clickButton.addEventListener('click', () => {
        userScore++;
        userScoreElement.textContent = userScore;
        updateScores();
    });

    function updateScores() {
        let scores = [
            { name: 'User', score: userScore },
            { name: 'Leader', score: parseInt(leaderScoreElement.textContent) },
            { name: 'Second', score: parseInt(secondScoreElement.textContent) },
            { name: 'Third', score: parseInt(thirdScoreElement.textContent) }
        ];

        scores.sort((a, b) => b.score - a.score);

        leaderScoreElement.textContent = scores[0].score;
        secondScoreElement.textContent = scores[1].score;
        thirdScoreElement.textContent = scores[2].score;
    }
});
