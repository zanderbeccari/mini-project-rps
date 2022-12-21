//these are the global variables: an array to give computers possible choices, wins, losses, and ties
var choices = ["r", "p", "s"];
var win = 0;
var losses = 0;
var ties = 0;

//the user will make a choice and here we're sanitizing the user choice and validating it
var userChoice = prompt("type r, p, or s ");

userChoice = userChoice.toLowerCase();
console.log(userChoice);


