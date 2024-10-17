'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector(".message").textContent = "Correct Numer!";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 4;
// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 5;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    // When there is not an input
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No number!";

        // Guess Score functions

        // Checks if the guess diferent from secret number

    } else if (guess != secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess > secretNumber
                ? "📈Too High!" : "📉Too low!";
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('body').style.backgroundColor = '#ff6200';
            document.querySelector('.message').textContent = "🧨No Atempts Left!";
            highscore = 0;
        }


        // }
        // else if (guess > secretNumber) {
        //     if (score > 0) {
        //         document.querySelector('.message').textContent = "📈Too High!";
        //         score--;
        //         document.querySelector('.score').textContent = score;

        //     } else {
        //         document.querySelector('body').style.backgroundColor = '#ff6200';
        //         document.querySelector('.message').textContent = "🧨No Atempts Left!";
        //         highscore = 0;
        //     }
        //     // Checks if the guess is lower then the screct number
        // } else if (guess < secretNumber) {
        //     if (score > 0) {
        //         document.querySelector('.message').textContent = "📉Too low!";
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('body').style.backgroundColor = '#ff6200';
        //         document.querySelector('.message').textContent = "🧨No Atempts Left!";
        //         highscore = 0;

        //     }
        // Player guessed the secrect number correctly
    } else {
        document.querySelector('.message').textContent = "🎉Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highscore;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 3) + 1;

    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.highscore').textContent = highscore;




});


