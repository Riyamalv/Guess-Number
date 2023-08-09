'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// document.querySelector('.again').textContent = 'Play Again'

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreNumber = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no guess
  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number !!')
    );

    // Correct Guess
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Correct Number!!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textcontent = highScore;
    }

    // high Guess
  } else if (guess > secretNumber) {
    if (scoreNumber > 0) {
      document.querySelector('.message').textContent = ' Too High !!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = ' You lost this Game!!';
    }

    // Low Guess
  } else if (guess < secretNumber) {
    if (scoreNumber > 0) {
      document.querySelector('.message').textContent = ' Too Low !!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = ' You lost this Game!!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
