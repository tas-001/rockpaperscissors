//TODO: Cleanup unused stuff.
function computerPlay() {
    let list = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * list.length);
    let randomPick = list[randomNumber];
    console.log("The computer selected: " + randomPick);
    return randomPick;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerScore++;
        } else {
            playerScore++;
        }
    }
    if (playerSelection == "paper") {
         if (computerSelection == "rock") {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
        } else {
            playerScore++;
        }
    }
}

function setWinner(computerScore, playerScore){
    if (computerScore > playerScore) {
        return "Computer is the winner. Try again!";
    } else if (computerScore < playerScore) {
        return "You won! Congrats!";
    } else {
        return "Equal game. Maybe try another time.";
    }
}

function game(rounds) {
    for (let index = 0; index < rounds; index++) {
        console.log("ROUND " + (Number(index) + Number(1)));
        let playerSelection = prompt("Rock Paper Scissors");
        if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
            console.log("You entered invalid game input");
        }
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("RESULT: ");
    console.log("Computer " + computerScore + " : " + playerScore + " Player");
    console.log(setWinner(computerScore, playerScore));
    console.log("Thanks for playing!");
}

game(3);
