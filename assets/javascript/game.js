// VARIABLES
// ==========================================================================
//Computer is going to generate a letter randomly
var computerLetter = null;

//The game starts with wins and losses in 0
var wins = 0;
var losses = 0;

//We have a counter to show how many guesses the user has left, starting from 9
var guesses = 9;

//The letters the user chose that didn't match the computer are displayed
var letterGuess = [];

//Write the stats to the screen
var winCount = document.getElementById("wins");
var lossesCount = document.getElementById("losses");
var guessesCount = document.getElementById("guessesLeft");
var userChoice = document.getElementById("guessLetter");



// ==========================================================================

// FUNCTIONS
// ==============================================================================

//Update number of wins
function updateWins() {
    winCount.textContent = "Wins: " + wins;
}
//Update number of losses
function updateLosses() {
    lossesCount.textContent = "Losses: " + losses;
}
//Update guesses left
function updateGuess() {
    guessesCount.textContent = "Guesses Left: " + guesses;
}
//Update the guesses of the user
function updateLettersChosen() {
    userChoice.textContent = "Your Guesses so far: " + letterGuess + " ";
}

//When called, this function generates new letter
function updateRandomLetter() {
    computerLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
}

// This is the function to listen to the user key pressed and .....

updateRandomLetter();

document.onkeyup = function(event) {
    var key = event.key.toLowerCase();
    //var userWin = false;
    if (guesses > 0) {
        if (key === computerLetter) {
            wins++;  
            updateWins();
            updateLosses();         
            guesses = 9; 
            updateGuess();          
            letterGuess = [];
            updateLettersChosen();
            updateRandomLetter();

            } else if (key !== computerLetter) {
            updateWins();
            updateLosses();      
            guesses--;
            updateGuess();          
            letterGuess.push(key);
            updateLettersChosen();
        }
    } else if (guesses === 0) {
        updateWins();
        losses++;
        updateLosses();
        guesses = 9;
        updateGuess();
        letterGuess = [];
        updateLettersChosen();
        updateRandomLetter();
    }
    console.log(computerLetter);
    console.log(wins);
    console.log(losses);
    console.log(guesses);
    console.log(key);
    console.log(letterGuess);
}


  







