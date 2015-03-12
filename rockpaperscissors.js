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

function playToFive() {


function getPlayerMove() {
var move;
move = move || getInput();
 return move;
}
//getPlayerMove()


function getComputerMove() {
    var move;
move || randomPlay();
return randomPlay();
}
//getComputerMove()

var winner;

function getWinner(playerMove,computerMove) {

  if (playerMove === computerMove) {
    winner="tie";
  } else if (playerMove == "rock" && computerMove =="scissors") {
    winner="player";
  } else if (playerMove == "scissors" && computerMove =="paper") {
    winner="player";
  } else if (playerMove == "paper" && computerMove == "rock") {
    winner="player";
  } else if (computerMove == "rock" && playerMove =="scissors") {
    winner="Computer";
  } else if (computerMove == "scissors" && playerMove =="paper") {
    winner="Computer";
  } else if (computerMove == "paper" && playerMove == "rock") {
    winner="Computer";
  }
    // return winner;
}

    console.log("Let's play Rock, Paper, Scissors");

var playerMove=getPlayerMove();
var computerMove=getComputerMove();

getWinner(playerMove,computerMove)

console.log("Player chose " + playerMove + " while Computer chose " + computerMove) ; 
console.log("The winner for this game is"+" "+winner)

     var playerWins = playerWins || 0;
  // if (playerWins>0) {
    // playerWins;
    // } else {
    // playerWins = 0;
// }
   var computerWins = computerWins || 0;
  
 // if (computerWins>0) {
//     computerWins;
  //   } else {
    //  computerWins = 0;
//  }
    
    
    
    var x=5; 

    if (winner==="player") {
    playerWins = playerWins +1 ;  
    } else if (winner==="Computer") { 
    computerWins = computerWins +1;  
    } 
    
console.log("The score is currently " + playerWins + " to " + computerWins + "\n");


    for (var i=1; i<=x; i+=1 ) {

    if (playerWins <6 || computerWins <6) {
    playToFive();
    } else {
    return;
    }

    }

}
       //  return [playerWins, computerWins];

playToFive()

