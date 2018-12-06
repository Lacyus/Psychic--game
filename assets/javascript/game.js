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

console.log(computerChoice);

// add a listener for the user to press a key
document.onkeyup = function(event) {
    var userChoice = event.key;

      // reset computer choice if the user loses
      if (triesCount <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount++;
        console.log("You lost!");
        alert("You lost!");
        triesCount = 10;
        playerGuesses = [];
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
        document.getElementById("triesCount").innerHTML = 10;
        randomIndex = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomIndex];
        console.log(computerChoice);
      }

      // compares the randomly selected computer choice and user choice
      if (computerChoice === userChoice) {
        console.log("You won!");
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount++;
        playerGuesses = [];
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
        randomIndex = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomIndex];
        console.log(computerChoice);
        triesCount = 10;
        document.getElementById("triesCount").innerHTML = 10;
      } 
      
      else {
        console.log("Guess again!");
        document.getElementById("triesCount").innerHTML = triesCount--;
        playerGuesses.push(userChoice);
        document.getElementById("playerGuesses").innerHTML = playerGuesses;
      }
  }