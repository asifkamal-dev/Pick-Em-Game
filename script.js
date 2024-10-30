"use strict";

// Selecting Elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switch Player Function
const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(activePlayer, 'Player Switched');
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Roll Dice Functionality
function diceRoll() {
    // 1. Generate a random dice roll 
    const dice = Math.trunc(Math.random()*6)+1
    console.log(dice);
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    // 3. Check for rolled 1; if true, switch to next player
    if (dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    } else { switchPlayer() }
}

// Button Roll Event Listener
btnRoll.addEventListener('click',diceRoll)

// Hold Score Functionality
function holdScore () {
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    if (scores[activePlayer] >= 100) {
        playing === false;
        diceEl.classList.add('hidden')
        btnRoll.classList.add('hidden')
        btnHold.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
        switchPlayer()
    }
}
// Hold Score Event Listener
btnHold.addEventListener('click', holdScore)

// New Game Functionality

function newGame(){
    // 1. Zero Out Current Score
}