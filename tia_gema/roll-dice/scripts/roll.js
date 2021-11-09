'use strict';

window.onload = function() {

  const ROLL_DELAY_MS = 250;

  const rollButton = document.querySelector("#rollButton");
  const dieElement = document.querySelector("#mainDie");

  rollButton.addEventListener("click", rollDie);

  function rollDie() {
    startRoll();

    wait(ROLL_DELAY_MS)
    .then( () => shakeDie() )
    .then( () => wait(ROLL_DELAY_MS) )
    .then( () => shakeDie() )
    .then( () => wait(ROLL_DELAY_MS) )
    .then( () => shakeDie() )
    .then( () => wait(ROLL_DELAY_MS) )
    .then( () => shakeDie() )
    .then( () => stopRoll() );
  }

  function shakeDie() {
    // random number 1 through 6
    let randomRoll = Math.floor(Math.random() * (6)) + 1;

    // set the die element to the current number
    dieElement.src = "images/die_" + randomRoll + ".png";
    dieElement.alt = randomRoll;
  }

  function startRoll() {
    rollButton.innerHTML = "Rolling...";
    rollButton.disabled = true;

    dieElement.classList.add('rolling');
  };

  function stopRoll() {
    rollButton.innerHTML = "Roll!";
    rollButton.disabled = false;

    dieElement.classList.remove('rolling');
  };

};
