// Adds values to listed variables when Magic Eight Ball is shaken
function shake_ball() {
    const firstName = document.getElementById('first_name').value;
    const question = document.getElementById('question').value;
    const userAsked = `${firstName} asks ${question}`;

// Writes user name and question to userAsked ID
    document.getElementById('userAsked').innerHTML = userAsked;

// Writes Eight Ball Answer to answer ID
		document.getElementById('answer').innerHTML = eightBall;
}

// Generates answer on click
document.getElementById('shaken').addEventListener('click', shake_ball);

// Generates random output for the Magic Eight Ball
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = ' ';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
  default:
    eightBall = 'Signs point to yes';
    break;
}
