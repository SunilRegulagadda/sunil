const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("player-score");
const choices = ["rock","paper","scissors"];
let playerScore = 0;
function  Game(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    const getResult = (playerChoice , computerChoice) => 
        playerChoice === computerChoice ? "IT'S A TIE ☹️" : (playerChoice==="rock" && computerChoice==="scissors") || (playerChoice==="paper" && computerChoice === "rock" ) || (playerChoice==="scissors" && computerChoice==="paper") ? "YOU WIN! 😁" : "YOU LOOSE! 😭";

    const result = getResult(playerChoice,computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:${computerChoice}`;
    if(result==="YOU WIN! 😁"){
        playerScore++;
        scoreDisplay.textContent = `Score: ${playerScore}`;
    }


    resultDisplay.style.backgroundColor = 
    result=== "IT'S A TIE ☹️" 
    ? "blue"
    : result ==="YOU WIN! 😁"
    ? "green"
    :"red";
    resultDisplay.style.border="2px solid transparent"
    resultDisplay.style.color = "white";
}
