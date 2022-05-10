'use strict';

console.log('Hello World');

let userName = prompt('What is your name?');
alert(`Welcome, ${userName}! Hope you're ready for a guessing game.`);

let answerOne = prompt('I live in Seattle, WA, right now, but do you think I am from Washington state originally?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('That\'s right! Born and raised in Washington!');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Believe it or not, I\'ve been a Washingtonian my whole life!');
}

let answerTwo = prompt('Have I always lived in Seattle?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('Nope! I grew up in Everett, which is about 20 miles North of Seattle.');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Correct! I actually grew up in a city about 20 miles North of Seattle called Everett.');
}

let answerThree = prompt('Do I have a car?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('Yup! Like most Seattleites, I own a Subaru.');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('Sorry, that\'s wrong, but I actually do prefer walking or taking public transportation rather than using my car.');
}

let answerFour = prompt('Do I have any tattoos?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('That\'s correct! I have several, mostly on my arms, but also a few in other random spots.');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('Actually, I do have several tattoos, mostly on my arms, but also a few in other random spots.');
}

let answerFive = prompt('Do I consider myself an outdoorsy person?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  alert('You\'re right! Though I love living in the big city, I do like to get away into nature sometimes.');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('Even though I love living in a big city, I actually do enjoy getting away into nature sometimes.');
}
