// variables for playing and array of letters for computer
var winCount = 1
var lossCount = 0
var triesCount = 10;
var playerGuesses = [];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

// random pick from array for computer
var randomIndex = Math.floor(Math.random() * letters.length);
var computerChoice = letters[randomIndex];


// listener for the user key press
document.onkeyup = function(event) {
    var userChoice = event.key;

      // resets computer choice when user loses
      if (triesCount <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount++;
        alert("You lost!");
        triesCount = 10;
        playerGuesses = [];
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
        document.getElementById("triesCount").innerHTML = 10;
        randomIndex = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomIndex];
      }

      // compares computer choice and user choice
      if (computerChoice === userChoice) {
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount++;
        playerGuesses = [];
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
        randomIndex = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomIndex];
        triesCount = 10;
        document.getElementById("triesCount").innerHTML = 10;
      } 
      
      else {
        document.getElementById("triesCount").innerHTML = triesCount--;
        playerGuesses.push(userChoice);
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
      }
  }