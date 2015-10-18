////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var answer = prompt();   
    return answer;
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


    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
function getPlayerMove(move) {    
    return move || getInput();
    }

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'paper'){
        winner = 'computer';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer';
    }
    else if (playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'computer';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'player';
    }
    else{
        winner = 'invalid entry';
    }   
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        if ((playerWins < 5) && (computerWins < 5)){
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            console.log ('Player choice ' + playerMove + 'Computer choice ' + computerMove);

        var winner = getWinner();
        if (winner === "player") {
                    computerWins += 1;
                }
                else if (winner ==="computer") {
                    computerWins += 1;
                }
                else if (winner === "tie"){
                    playerWins +=0;
                    computerWins +=0;
                }
        console.log('the score is ' + playerWins + 'to ' + computerWins);

        }




    return [playerWins, computerWins];
}
playToFive();

