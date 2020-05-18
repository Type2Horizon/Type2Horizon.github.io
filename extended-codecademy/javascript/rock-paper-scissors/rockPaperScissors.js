let userScore = 0;

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('not a valid choice');
  }
};

function getComputerChoice() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  	};
}

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'bomb') {
    return 'You win!';
  }
};

function determineUserScore(userChoice,computerChoice,UserScore) {
  if (userChoice === computerChoice) {
    return userScore += 0;
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return userScore -= 1;
    } else {
      return userScore += 1;
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return userScore -= 1;
    } else {
      return userScore += 1;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return userScore -= 1;
    } else {
      return userScore += 1;
    }
  } else if (userChoice === 'bomb') {
    return userScore += 1;
  }
};

function playGame() {
  const userChoice = getUserChoice(document.getElementById('user_selection').value);
  const computerChoice = getComputerChoice()
  console.log(`you threw ${userChoice}`);
  console.log(`computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
  document.getElementById('announceWinner').innerHTML = determineWinner(userChoice,computerChoice);
  document.getElementById('announceScore').innerHTML = determineUserScore(userChoice,computerChoice,userScore);
  if (userChoice === 'rock') {
  document.getElementById('userPick').setAttribute("class", "far fa-hand-rock fa-10x p-3 align");
  } else if (userChoice === 'paper') {
  document.getElementById('userPick').setAttribute("class", "far fa-hand-paper fa-10x p-3");
  } else {
  document.getElementById('userPick').setAttribute("class", "far fa-hand-scissors fa-10x p-3");
  }
  if (computerChoice === 'rock') {
  document.getElementById('computerPick').setAttribute("class", "far fa-hand-rock fa-10x p-3");
  } else if (computerChoice === 'paper') {
  document.getElementById('computerPick').setAttribute("class", "far fa-hand-paper fa-10x p-3");
  } else {
  document.getElementById('computerPick').setAttribute("class", "far fa-hand-scissors fa-10x p-3");
  }
};
document.getElementById('duel').addEventListener('click', playGame);
