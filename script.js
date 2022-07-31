function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}
function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == computerChoice){
        return "It is a tie.";
    }
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "paper") {
                return "You lose! Paper beats rock.";
            }
            else{
                return "You win! Rock beats scissors.";
            }
        case "paper":
            if (computerChoice == "scissors") {
                return "You lose! Scissors beats paper.";
            }
            else{
                return "You win! Paper beats rock.";
            }
        case "scissors":
            if (computerChoice == "rock") {
                return "You lose! Rock beats scissors.";
            }
            else{
                return "You win! Scissors beats paper.";
            }
        default:
            break;
    }
}