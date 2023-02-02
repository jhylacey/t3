function getComputerChoice()    {
    const choices = ["Rock", "Paper", "Scissors"];
    var randomChoice= choices[Math.floor(Math.random() * choices.length)];
    }

const playerSelection = prompt('Make a move','');
const ComputerSelection = getComputerChoice();


function playRound(PlayerSelection, ComputerSelection){
}else {
        return(`You lose! ${} beats ${}!`)
    }
console.log(playRound);

function game(){
    playRound
}


// //a function that returns 1 of 3 values randomly to represent a computer opponent's choice

//  a function that will begin a game of rock papers scissors that will take a player's selection (case insensitive) and a computer's selection 

//  and then return the results of the round in a string

//  a function called game that will keep track of rounds, a score, and also report a winner or loser at the end