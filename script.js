function computerPlay() {
    let list = ["rock", "paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * list.length);
    let pick = list[randomNumber];
    console.log("The computer selected: " + pick);
    return pick;
}

let playerWins = "Player wins!";
let computerWins = "Computer wins!";
let equalGame = "You selected the same tool";
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return equalGame;
        } else if (computerSelection == "paper") {
            computerScore++;
            return computerWins;
        } else {
            playerScore++;
            return playerWins;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return equalGame;
        } else if (computerSelection == "rock") {
            playerScore++;
            return playerWins;
        } else {
            computerScore++;
            return computerWins;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return equalGame;
        } else if (computerSelection == "rock") {
            computerScore++;
            return computerWins;
        } else {
            playerScore++;
            return playerWins;
        }
    }
}

function winner(computerScore, playerScore){
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
    console.log(winner(computerScore, playerScore));
    console.log("Thanks for playing!");
}

game(3);
