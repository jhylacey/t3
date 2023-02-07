const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
const playerSelection = "rock";
const compSelection = getComputerChoice();
function playRound(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        alert("It's a tie!");
        return("It's a tie!");

    } else if (playerSelection == "rock" && compSelection == "paper" ||
     playerSelection == "paper" && compSelection == "scissors" ||
     playerSelection == "scissors" && compSelection == "rock") {
        alert("You lose!");
        return("You lose!");

     } else {
        alert("You win!");
        return("You win!");
     }
}



function game() {
    let playerScore = 0; 
    let computerScore = 0; 
let roundResult;

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Choose rock, paper, or scissors, best of 5!", "").toLowerCase();
        const compSelection = getComputerChoice();
        roundResult = playRound(playerSelection, compSelection);
        if (roundResult == "You win!") {
            playerScore++;
        } else if (roundResult == "You lose!") {
            computerScore++;
        }
    }


    if (playerScore > computerScore) {
        alert(`You won! ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        alert(`You lost! ${playerScore} - ${computerScore}`);
    } else {
        alert(`Tie game!`);
    }
}





console.log(game());
// // a function that keeps a score for a 5 round game betweeen two players 
// // that returns a winne ror loser at the end 