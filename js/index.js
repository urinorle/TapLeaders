// JavaScript for index.js
document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    const userScoreElement = document.getElementById('user-score');
    const leaderScoreElement = document.getElementById('leader-score');
    const powerUpForm = document.getElementById('power-up-form');
    const powerUpSelect = document.getElementById('power-up');
    const currentMultiplierElement = document.getElementById('current-multiplier');
    let currentMultiplier = 1;
    let userScore = 0;

    clickButton.addEventListener('click', () => {
        userScore += currentMultiplier;
        userScoreElement.textContent = userScore;
        leaderScoreElement.textContent = userScore;
    });

    paypal.Buttons({
        createOrder: function(data, actions) {
            const selectedOption = powerUpSelect.options[powerUpSelect.selectedIndex];
            const price = selectedOption.getAttribute('data-price');
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                const selectedOption = powerUpSelect.options[powerUpSelect.selectedIndex];
                const multiplier = parseFloat(selectedOption.value);
                currentMultiplier = multiplier;
                currentMultiplierElement.textContent = currentMultiplier;
            });
        }
    }).render('#paypal-button-container');
});
