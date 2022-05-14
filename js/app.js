'use strict';

let correctAns = 0;

let userName = prompt('What is your name?');
alert(`Welcome, ${userName}! Hope you're ready for a guessing game.`);

function question1(){
  let answerOne = prompt('I live in Seattle, WA, right now, but do you think I am from Washington state originally?').toLowerCase();

  if(answerOne === 'yes' || answerOne === 'y'){
    alert('That\'s right! Born and raised in Washington!');
    correctAns++;
  } else if(answerOne === 'no' || answerOne === 'n'){
    alert('Believe it or not, I\'ve been a Washingtonian my whole life!');
  }
}

question1();

function question2(){

  let answerTwo = prompt('Have I always lived in Seattle?').toLowerCase();

  if(answerTwo === 'yes' || answerTwo === 'y'){
    alert('Nope! I grew up in Everett, which is about 20 miles North of Seattle.');
  } else if(answerTwo === 'no' || answerTwo === 'n'){
    alert('Correct! I actually grew up in a city about 20 miles North of Seattle called Everett.');
    correctAns++;
  }
}

question2();

function question3(){

  let answerThree = prompt('Do I have a car?').toLowerCase();

  if(answerThree === 'yes' || answerThree === 'y'){
    alert('Yup! Like most Seattleites, I own a Subaru.');
    correctAns++;
  } else if(answerThree === 'no' || answerThree === 'n'){
    alert('Sorry, that\'s wrong, but I actually do prefer walking or taking public transportation rather than using my car.');
  }
}

question3();

function question4(){
  let answerFour = prompt('Do I have any tattoos?').toLowerCase();

  if(answerFour === 'yes' || answerFour === 'y'){
    alert('That\'s correct! I have several, mostly on my arms, but also a few in other random spots.');
    correctAns++;
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert('Actually, I do have several tattoos, mostly on my arms, but also a few in other random spots.');
  }
}

question4();

function question5(){
  let answerFive = prompt('Do I consider myself an outdoorsy person?').toLowerCase();

  if(answerFive === 'yes' || answerFive === 'y'){
    alert('You\'re right! Though I love living in the big city, I do like to get away into nature sometimes.');
    correctAns++;
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert('Even though I love living in a big city, I actually do enjoy getting away into nature sometimes.');
  }
}

question5();


let scottieNumber = 47;

let guesses = 4;

function question6(){
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
}

question6();

let top10Bands = ['david bowie', 'robyn', 'talking heads', 'fleetwood mac', 'death cab for cutie', 'lcd soundsystem', 'these arms are snakes', 'phoebe bridgers', 'big thief', 'dehd'];

function question7(){
  for(let i = 0; i < 6; i++) {
    let bandGuess = prompt('Can you guess one of my top 10 favorite bands or musicians, as of right now?').toLowerCase();
    for(let j = 0; j < top10Bands.length; j++) {
      if(bandGuess === top10Bands[j]) {
        alert('Yup, that\'s one of them! You know me so well!!');
        correctAns++;
        i = 6;
        break;
      }
    }
  }
}

question7();

alert('Here are my top 10 favorite bands or musicians, as of right now: David Bowie, Robyn, Talking Heads, Fleetwood Mac, Death Cab For Cutie, LCD Soundsystem, These Arms Are Snakes, Phoebe Bridgers, Big Thief, Dehd.');

alert('Thanks for taking my quiz! You got ' + correctAns + ' answers correct!');
