////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = getInput();// Write an expression that operates on a variable called `move`
    if (move === "rock"){
        move = "rock";
    } else if (move === "paper"){
        move = "paper";
    } else if (move === "scissors"){
        move = "scissors"
    } else {
         getInput();
    }
     // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`. /* Your Expression */;
}

function getComputerMove(move) {
    computerMove = randomPlay();


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
        winner= 'player';
    } else if (playerMove === computerMove){
        winner = 'tie';
    } else{
        winner = 'computer';
    }


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    getPlayerMove();
        getComputerMove();
        getWinner();
    for (var i = 0; i <=5; i+=1){
        if (playerWins === true){
            console.log("Yay! You won!");
            playerWins + 1;
        } else if (computerWins === true){
            console.log("Boo! The computer won!");
            computerWins + 1;
        } else {
            console.log("It's a tie! Try again!");
        }
        return console.log("The score is" + [playerWins, computerWins]);
    }


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

