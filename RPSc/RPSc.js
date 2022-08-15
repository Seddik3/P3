/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {computerScore: 0, playerScore: 0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice () {
const rpsChoices = ['Rock', 'Paper', 'Scissors']
const randomChoices = Math.floor(Math.random() * rpsChoices.length) 
return rpsChoices[randomChoices]
} 

// console.log(getComputerChoice(rpsChoices))

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let playerScore;
  let computerScore;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice){
    playerScore = 0
    computerScore = 0
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice== 'Rock' && computerChoice== 'Scissors'){
    playerScore = 1
    computerScore = 0
  }
  else if (playerChoice== 'Scissors' && computerChoice== 'Paper'){
    playerScore = 1
    computerScore = 0
  }
  else if (playerChoice== 'Paper' && computerChoice== 'Rock'){
    playerScore = 1
    computerScore = 0
  }

  // Otherwise human loses (aka set score to -1)
  else {
    playerScore = 0
    computerScore = 1
  }

  // return score
  return playerScore && computerScore
}
// console.log(getResult('Rock', 'Paper'))

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(playerScore, computerScore, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')
if (playerScore== 1 && computerScore== 0){
    resultDiv.innerText = 'You Won!'
}
else if (playerScore== 0 && computerScore== 0) {
    resultDiv.innerText = 'It is a tie!'
}
else {resultDiv.innerText = 'You Lose!'}
handsDiv.innerText = `👨${playerChoice} vs 🤖${computerChoice}`
playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
computerScoreDiv.innerText = `Computer Score: ${totalScore['computerScore']}`
}
// console.log(showResult(1, 'rock', 'scissors'))

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
 console.log(playerChoice)
 const computerChoice = getComputerChoice()
 const playerScore = getResult(playerChoice)
 const computerScore = getResult(computerChoice)
 totalScore['playerScore'] += playerScore
 totalScore['computerScore'] += computerScore
 showResult(playerScore, computerScore, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsButtons = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
 })

  // Add a click listener to the end game button that runs the endGame() function on click
   const endGameBtn = document.getElementById('endGameButton')
   endGameBtn.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
  computerScoreDiv.innerText = ''
}
// endGameBtn.onclick = () => endGame()
// console.log(endGame)

playGame()