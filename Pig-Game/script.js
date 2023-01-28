"use strict";

//Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Rolling Dice Function

btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.Display the dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`; //Changing the Image

    // 3. Check if rolled 1  if True

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //Add Current Score to active player score

    scores[activePlayer] += currentScore;
    // scores[1]= scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check if the score is >=100

    if (scores[activePlayer] >= 20) {
      //End the Game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //Id not switch to the next player
      switchPlayer();
    }
  }
});
