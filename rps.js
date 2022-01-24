function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function round(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    switch (playerChoice) {
        case "rock": {
            if (computerSelection === "rock") return "Tie! Both Rock";
            else if (computerSelection === "paper") return "You Lose! Paper beats Rock";
            else return "You Win! Rock beats Scissors";
        }
        case "paper": {
            if (computerSelection === "rock") return "You Win! Paper beats Rock";
            else if (computerSelection === "paper") return "Tie! Both Paper";
            else return "You Lose! Scissors beats Paper";
        }
        case "scissors": {
            if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
            else if (computerSelection === "paper") return "You Win! Scissors beats Paper";
            else return "Tie! Both Scissors";
        }
    }
}

function game() {

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => button.addEventListener('click', 
        () => alert(round(button.id, computerPlay()))));
}

game()