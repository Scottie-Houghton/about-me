'use strict';

console.log('Hello World');

let correctAns = 0;

let userName = prompt('What is your name?');
alert(`Welcome, ${userName}! Hope you're ready for a guessing game.`);

let answerOne = prompt('I live in Seattle, WA, right now, but do you think I am from Washington state originally?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('That\'s right! Born and raised in Washington!');
  correctAns++;
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Believe it or not, I\'ve been a Washingtonian my whole life!');
}

let answerTwo = prompt('Have I always lived in Seattle?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('Nope! I grew up in Everett, which is about 20 miles North of Seattle.');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Correct! I actually grew up in a city about 20 miles North of Seattle called Everett.');
  correctAns++;
}

let answerThree = prompt('Do I have a car?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('Yup! Like most Seattleites, I own a Subaru.');
  correctAns++;
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('Sorry, that\'s wrong, but I actually do prefer walking or taking public transportation rather than using my car.');
}

let answerFour = prompt('Do I have any tattoos?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('That\'s correct! I have several, mostly on my arms, but also a few in other random spots.');
  correctAns++;
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('Actually, I do have several tattoos, mostly on my arms, but also a few in other random spots.');
}

let answerFive = prompt('Do I consider myself an outdoorsy person?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  alert('You\'re right! Though I love living in the big city, I do like to get away into nature sometimes.');
  correctAns++;
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('Even though I love living in a big city, I actually do enjoy getting away into nature sometimes.');
}

let scottieNumber = 47;

let guesses = 4;

for(let i = 0; i < guesses; i++) {
  let userNumber = prompt('Can you guess the number I\'m thinking of?');
  if (Number(userNumber) === scottieNumber) {
    alert('Wow, that\'s right! Good guess!');
    correctAns++;
    break;
  }
  else if (scottieNumber < userNumber) {
    alert('Too high!');
  }
  else if (scottieNumber > userNumber) {
    alert('Too low!');
  }
  if (i === 3) {
    alert(`Nice try! My number was ${scottieNumber}.`);
  }
}

let tattooNumber = ['< 5', '<5', '< 10', '<10', '< 15', '<15', '< 20', '<20', '< 25', '<25', '< 30', '<30', '< 35', '<35', '< 40', '<40'];

let tattooGuesses = 6;

for(let i = 0; i < tattooGuesses; i++) {
  let userNumber = prompt('As mentioned in a previous question, I have tattoos. Can you guess how many I have? Guess a multiple of 5 tattoo range between 0 and 40 and use a less than symbol to indicate which range (ex: < 75 equals the range 71-75).');
  if (userNumber === tattooNumber[8]) {
    alert('Whoa, that\'s correct! I have 24 tattoos. Good guess!');
    correctAns++;
    break;
  }
  else if (userNumber === tattooNumber[9]) {
    alert('Whoa, that\'s correct! I have 24 tattoos. Good guess!');
    correctAns++;
    break;
  }
  else if (userNumber === tattooNumber[0]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[1]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[2]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[3]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[4]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[5]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[6]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[7]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[10]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[11]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[12]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[13]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[14]) {
    alert('Nope, try again!');
  }
  else if (userNumber === tattooNumber[15]) {
    alert('Nope, try again!');
  }
  if (i === 5) {
    alert(`Nice try! I have 24 tattoos, so you should've guessed ${tattooNumber[8]}.`);
  }
}

alert('Thanks for taking my quiz! You got ' + correctAns + ' answers correct!');
