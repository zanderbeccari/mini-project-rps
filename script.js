//these are the global variables: an array to give computers possible choices, wins, losses, and ties
var choices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;
var userChoice;
var lastGameStatus;

//the user will make a choice and here we're sanitizing the user choice and validating it
while (userChoice !== "r" && userChoice !== "p" && userChoice !== "s") {
    userChoice = prompt("type r, p, or s ");

    userChoice = userChoice.toLowerCase();
}

//the computer chooses from its available options.
var computerChoice = choices[Math.floor(Math.random() * choices.length)];

//Determine a winner and show a confirmation showing the status of the last game, the user's stats, and asking whether the player wants to play again.
if (userChoice === computerChoice) {
    ties++;
    lastGameStatus = "tie";
} else if ((userChoice === "r" && computerChoice === "p") || (userChoice === "p" && computerChoice === "s") || (userChoice === "s" && computerChoice === "r")) {
    losses++;
    lastGameStatus = "loss";
} else {
    wins++;
    lastGameStatus = "win";
}
