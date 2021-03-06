function computerPlay () {
    const randomPlay =  Math.floor(Math.random() * 3);
    if (randomPlay === 0) {
        return "rock";
    } else if (randomPlay === 1) {
        return "paper";
    } else if (randomPlay === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
     let cpu = computerSelection;
   
       if (playerSelection == computerSelection) {
           return "Draw";
       } else if (playerSelection == "rock" && computerSelection == "paper") {
           return "You Lose! Paper beats Rock";
       } else if (playerSelection == "paper" && computerSelection == "scissors") {
           return "You Lose! Scissors beats Paper";
       } else if (playerSelection == "scissors" && computerSelection == "rock") {
           return "You Lose! Rock beats Paper";
       } else {
           return "You Win!" + playerSelection[0].toUpperCase()+playerSelection.slice(1) + " beats " + cpu[0].toUpperCase()+cpu.slice(1)
       }
   }
   

playerSelection[0].toUpperCase + playerSelection.slice(1).toLowerCase() // **case insensitive

let playerScore = 0;
let cpuScore = 0;

for (var i=0;i<5;i++){
    let playerSelection = (window.prompt("Jo-ken-Po", ""));
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }