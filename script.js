function computerPlay() {
    let list = ["rock", "paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * list.length);
    let pick = list[randomNumber];
    console.log("The computer selected: " + pick);
    return pick;
}

let userPick = prompt("Please select rock, paper or scissors");

function playerPlay(userPick) {
    let userPickToLower = userPick.toLowerCase();
    if (userPickToLower == "rock" || userPickToLower == "paper" || userPickToLower == "scissors") {
        console.log("You entered: " + userPickToLower);
        return userPickToLower;
    } else {
        return "User entered an invalid input";
    }
}

let player = playerPlay(userPick);
let computer = computerPlay();

function playRound(player, computer) {
    if (player == "rock") {
        if (computer == "rock") {
            return "Play again! You both selected rock";
        } else if (computer == "paper") {
            return "The computer wins. Paper beats rock";
        } else {
            return "You win. Rock beats scissors";
        }
    }
    if (player == "paper") {
        if (computer == "paper") {
            return "Play again! You both selected paper";
        } else if (computer == "rock") {
            return "You win. Paper beats rock";
        } else {
            return "The computer wins. Scissors beat paper";
        }
    }
    if (player == "scissors") {
        if (computer == "scissors") {
            return "Play again! You both selected scissors";
        } else if (computer == "rock") {
            return "The computer wins. Rock beats scissors";
        } else {
            return "You win. Scissors beat paper";
        }
    }
}

function game(rounds) {
    for (let index = 0; index < rounds; index++) {
        userPick;
        console.log(playRound(player, computer));
    }
}

