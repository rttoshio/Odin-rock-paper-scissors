function computerPlay () {
    const randomPlay =  Math.floor(Math.random() * 3);
    if (randomPlay === 0) {
        return "Rock";
    } else if (randomPlay === 1) {
        return "Paper";
    } else if (randomPlay === 2) {
        return "Scissors";

}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let cpu = computerSelection;
    if (playerSelection == computerSelection) {
        return "Draw";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Paper"
    } else {
        return "You Win!" + player + " beats " cpu
    }
}