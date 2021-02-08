'use strict';
//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let currentscore = 0;
let activePlayer = 0;
const switchplayer = function () {
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentscore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//rolling conditions
btnRoll.addEventListener('click', function () {
  //1.generate random number between 1 to 6 on rolling
  const dicer = Math.trunc(Math.random() * 6) + 1;

  //2.display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${dicer}.png`;

  //3.check if rolled value is 6 or not
  if (dicer !== 6) {
    //add dicer to current score
    currentscore += dicer;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentscore;
  } else {
    //switch to next player
    switchplayer();
  }
});
btnHold.addEventListener('click', function () {
  //add current score to active player score
  scores[activePlayer] += currentscore;
  console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //check if active player score >=100

  //finish the game
  //switch to next player player
  switchplayer();
});
