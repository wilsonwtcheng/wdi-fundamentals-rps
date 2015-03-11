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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
var move =;
move = move || getInput();

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
var move =;
move = move || randomPlay();


}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

var winner;
var computerMove='scissors';
var playerMove='paper';



  if (playerMove === computerMove) {
    winner='tie';
  } else if (playerMove == 'rock' && computerMove =='scissors') {
    winner='player';
  } else if (playerMove == 'scissors' && computerMove =='paper') {
    winner='player';
  } else if (playerMove == 'paper' && computerMove == 'rock') {
    winner='player';
  } else {
    winner='computer';
  }


    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */





    console.log("Let's play Rock Paper Scissors");
    var playerWins=5;
    var computerWins=0;
var winner;
var computerMove='scissors';
var playerMove='paper';
var x=5; 

    for (var i=1; i<=x; i+=1 ) {

if (playerWins >=5 || computerWins >=5) {
x=5;
}
else {
   x=0;
}


  if (playerMove === computerMove) {
    winner='tie';
  } else if (playerMove == 'rock' && computerMove =='scissors') {
    winner='Player' ; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
  } else if (playerMove == 'scissors' && computerMove =='paper') {
    winner='Player'; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
  } else if (playerMove == 'paper' && computerMove == 'rock') {
    winner='Player'; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
  } else if (computerMove == 'rock' && playerMove =='scissors') {
    winner='Computer' ; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
  } else if (computerMove == 'scissors' && playerMove =='paper') {
    winner='Computer'; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
  } else if (computerMove == 'paper' && playerMove == 'rock') {
    winner='Computer'; console.log("Player chose " + playerMove + " while Computer chose " + computerMove)
    
  } else {
    console.log='Invalid moves';
  }
console.log("The winner for this game is "+ winner)

console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

}
     



   
   
    
//  }
  //      TELL IT TO CONTINUE THE GAME UNTIL X=5
  // SHOULD PLAY UNTIL SOMEONE GETS FIVE WINS!
  
  
        
        
            // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

        
 // function fizzbuzz(num) {}
    // fizzbuzz(15)
    
    
/*  function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    } */


    return [playerWins, computerWins];
}

