function getComputerChoice()    {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomChoice= choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
    }

function gameResults(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Tie game!';
    }
    else if(
        (playerSelection == "Rock" && computerSelection) == "Scissors" ||
        (playerSelection == "Paper" && computerSelection) == "Rock" ||
        (playerSelection == "Scissors" && computerSelection) == "Paper"
    ){
        return 'You win!'; 
    } else {
        return 'Computer wins!';}
    }


const playerSelection = prompt('Choose Rock, Paper or Scissors','');
const computerSelection = getComputerChoice();
alert(gameResults(playerSelection,computerSelection));

// //a function that returns 1 of 3 values randomly to represent a computer opponent's choice

//  a function that will begin a game of rock papers scissors that will take a player's selection (case insensitive) and a computer's selection 

//  and then return the results of the round in a string

//  a function called game that will keep track of rounds, a score, and also report a winner or loser at the end