const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if (userInput === "paper" || userInput === "rock" || userInput === 'scissors' || userInput === 'bomb') {
    return userInput; 
  } else {
    console.log('error, you have to type : rock, paper or scissors !')
  }
};

// Test : 
// console.log(getUserChoice('rock'));
// console.log(getUserChoice('roc'))


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber) {
    case 0: 
      return "rock"; 
    case 1: 
      return "paper";
    case 2: 
      return "scissors";      
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie !";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won !";
    } else {
      return 'You won !';
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return 'Sorry, the computer won!'; 
    } else {
      return 'You won!';
    }
  }
if (userChoice === "scissors") {
  if (computerChoice === "rock") {
      return "Computer won!";
    } else if (computerChoice === "paper") {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
      return "Computer won!";
  } 
}; 

// Test : 
// console.log(determineWinner('rock', 'paper'));
// console.log(determineWinner('scissors', 'rock'));
// console.log(determineWinner('rock', 'rock'));


const playGame = () => {
  const userChoice = getUserChoice('bomb'); 
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame();




