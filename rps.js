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

}function game() {
    console.log("You will play rock paper scissors vs a computer. (Best 3 out of 5)");
    let score = 0;
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}: Rock, Paper, or Scissors? `);
        const playerChoice = prompt();
        const comChoice = computerPlay();
        const turn = round(playerChoice, comChoice);

        if (turn.charAt(0) === "T") i--;
        else if (turn.charAt(4) === "W") score++;

        console.log(turn)
    }
    if (score < 3) console.log("You Lost! Better luck next time.");
    else console.log("Congratulations! You Won! ");
}

game()