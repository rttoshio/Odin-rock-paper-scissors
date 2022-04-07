function computerPlay () {
    const randomPlay =  Math.floor(Math.random() * 3);
    if (randomPlay === 0) {
        return "Rock";
    } else if (randomPlay === 1) {
        return "Paper";
    } else if (randomPlay === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase()
  let cpu = computerSelection;

    if (playerSelection == computerSelection) {
        return "Draw";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        cpuScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        cpuScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        cpuScore++;
        return "You Lose! Rock beats Paper";
    } else {
        return "You Win!" + player + " beats " + cpu;
        playerScore++;
    }
}

playerSelection[0].toUpperCase + playerSelection.slice(1).toLowerCase() // **case insensitive

let playerScore = 0;
let cpuScore = 0;

for(var i=0;i<5;i++){
    let playerSelection = (window.prompt("Jo-ken-Po", ""));
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }