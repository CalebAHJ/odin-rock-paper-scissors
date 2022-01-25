function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function win() {
    const roundCount = document.getElementById('round');
    let roundNum = +roundCount.textContent.charAt(6);
    roundNum++;
    roundCount.textContent = "Round " + roundNum;

    const score = document.getElementById('score');
    let playerScore = +score.textContent.charAt(6);
    playerScore++;
    let comScore = score.textContent.charAt(8);
    score.textContent = "Score " + playerScore + "-" + comScore;
}

function lose() {
    const roundCount = document.getElementById('round');
    let roundNum = +roundCount.textContent.charAt(6);
    roundNum++;
    roundCount.textContent = "Round " + roundNum;

    const score = document.getElementById('score');
    let playerScore = score.textContent.charAt(6);
    let comScore = +score.textContent.charAt(8);
    comScore++;
    score.textContent = "Score " + playerScore + "-" + comScore;
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
                 lose();
            }
            else {
                msg.textContent = "You Win! Rock beats Scissors";
                win();
            }
        }
        break;

        case "paper": {
            if (computerSelection === "rock") {
                msg.textContent = "You Win! Paper beats Rock";
                win();
            }
            else if (computerSelection === "paper") {
                msg.textContent = "Tie! Both Paper";
            }
            else {
                msg.textContent = "You Lose! Scissors beats Paper";
                lose();
            }
        }
        break;

        case "scissors": {
            if (computerSelection === "rock") {
                msg.textContent = "You Lose! Rock beats Scissors";
                lose();
            }
            else if (computerSelection === "paper") {
                msg.textContent = "You Win! Scissors beats Paper";
                win();
            }
            else {
                msg.textContent = "Tie! Both Scissors";
            }
        }
        break;
    }
}

function isDone() {
    const score = document.getElementById('score');
    const pScore = +score.textContent.charAt(6);
    const cScore = +score.textContent.charAt(8);

    if (pScore < 3 && cScore < 3) return;
    
    if (pScore === 3) document.getElementById('header').textContent = "Congrats! You Won!";
    else document.getElementById('header').textContent = "Aww! You Lost. ";

    window.addEventListener('click', () => window.location.reload());
}

function game() {

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', 
    () => round(button.id, computerPlay())));

    buttons.forEach((button) => button.addEventListener('click', isDone));
}

game()