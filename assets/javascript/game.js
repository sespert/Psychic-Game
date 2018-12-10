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

//Update the initial statistics
function updateStats() {
    winCount.textContent = "Wins: " + wins;
    lossesCount.textContent = "Losses: " + losses;
    guessesCount.textContent = "Guesses Left: " + guesses;
    userChoice.textContent = "Your Guesses so far: " + letterGuess + " ";
}

//When called, this function generates a new letter
function updateRandomLetter() {
    computerLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
}

//Game starts with computer picking a letter
updateRandomLetter();

// Then the user chooses a letter, and this function compares it to the computer one
document.onkeyup = function(event) {
    var key = event.key.toLowerCase();
    
    //The game keeps playing until number of guesses equals 0
    if (guesses > 0) {
        
        if (key === computerLetter) {
            wins++; 
            guesses = 9;      
            letterGuess = [];
            updateStats();
            updateRandomLetter();
            alert("Great job! The letter was indeed " + key + "!");

        } else if (key !== computerLetter) { 
            if (letterGuess.includes(key)) {
                alert("You've already picked that letter, please choose another one");
            } else {
                guesses--;        
                letterGuess.push(key);
                updateStats();
            }
        }

    } else if (guesses === 0) {
        losses++;
        guesses = 9;
        letterGuess = [];
        alert("Sorry! No more guesses. The letter I chose is " + computerLetter);
        updateStats();
        updateRandomLetter();
    }
}










