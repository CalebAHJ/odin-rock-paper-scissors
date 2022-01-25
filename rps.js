function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function round(playerSelection, computerSelection) {
    const msg = document.getElementById("msg");

    switch (playerSelection) {
        case "rock": {
            if (computerSelection === "rock") {
                msg.textContent = "Tie! Both Rock";
            }
            else if (computerSelection === "paper") {
                 msg.textContent = "You Lose! Paper beats Rock";
            }
            else {
                msg.textContent = "You Win! Rock beats Scissors";
            }
        }
        break;

        case "paper": {
            if (computerSelection === "rock") {
                msg.textContent = "You Win! Paper beats Rock";
            }
            else if (computerSelection === "paper") {
                msg.textContent = "Tie! Both Paper";
            }
            else {
                msg.textContent = "You Lose! Scissors beats Paper";
            }
        }
        break;

        case "scissors": {
            if (computerSelection === "rock") {
                "You Lose! Rock beats Scissors";
            }
            else if (computerSelection === "paper") {
                "You Win! Scissors beats Paper";
            }
            else {
                "Tie! Both Scissors";
            }
        }
        break;
    }
}

function game() {

    let roundCount = 1;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', 
    () => round(button.id, computerPlay())));
}

game()