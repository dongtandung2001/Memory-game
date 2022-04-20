function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

// generate random patterns using Math.random
// getRandomInt(3)+1 return 1,2,3, or 4
var pattern = [
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
  getRandomInt(6) + 1,
];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var timer = 20; // 20 secs for each sequence guess
var chance = 3;
var myInterval; // ticking clock
var clueHoldTime = 1000;
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence



function startGame() {
  //initialize game variables
  progress = 0;
  // 3 chance when start theg game
  chance = 3;
  // clear previous intervals if exists
  clearInterval(myInterval);
  // Display chance at the begining of the play: 
  document.getElementById("chance").innerHTML = "Chance: " + 3;
  console.log(pattern);
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  myInterval = setInterval(myTimer, 1000); // start the clock when the games start

  // speed up on each turn
  clueHoldTime = 1000;
  cluePauseTime = 333; //how long to pause in between clues
  nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
  
  
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  // reset pattern for the next play
  pattern = [
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
    getRandomInt(6) + 1,
  ];
  clearInterval(myInterval); // stop the clock when game stop
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timer = 20; // reset timer for next sequence guess
  // speed up on each turn by decrease clueHoldTime, cluePauseTime and nextClueWaitTime
  clueHoldTime -= 100;
  cluePauseTime -= 30;
  nextClueWaitTime -= 100;
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
  
}

function winGame() {
  stopGame();
  clearInterval(myInterval);
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  clearInterval(myInterval);
  // clear interval otherwise the clock will speed up
  if (!gamePlaying) {
    return;
  }
  // add game logic here
  // guess correct
  if (btn == pattern[guessCounter]){
    // if guesses are same as sequence clue
    if(guessCounter == progress) {
      clearInterval(myInterval);
      // if guesses = pattern = win
      if (guessCounter == pattern.length - 1) {
        winGame();
      } else {
        // clear interval so that the clock won't speed up
        progress++;
        playClueSequence();
      }
    }
     else {
       // clear interval so that the clock won't speed up
       guessCounter++;
     }
  } else { // Wrong guess
    // check if the user still have chance to guess
    // 3 chance = 2 wrongs guess allowed
    if(chance >1) {
      chance--;
      // Edit chance on UI
      document.getElementById("chance").innerHTML = "Chance: " + chance;
    } else {
      chance--;
      document.getElementById("chance").innerHTML = "Chance: " + chance;
      loseGame();
    }
  }
  // start the clock for next guess
  myInterval = setInterval(myTimer, 1000);
}

// Sound Synthesis Functions
const freqMap = {
  1: 420,
  2: 440,
  3: 460,
  4: 480,
  5: 500,
  6: 520,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);


// ticking clock
function myTimer() {
  document.getElementById("timer").innerHTML = "Time left: " + timer;
  timer--;
  document.getElementById("timer").innerHTML = "Time left: " + timer;
  if (timer == 0) {
    loseGame();
  } 
  if (timer < 0){
    clearInterval(myInterval);
  }
}