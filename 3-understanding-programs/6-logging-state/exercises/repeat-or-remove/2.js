'use strict';

/*
  log the user's input
  log the every character, no matter what they confirmed
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');

  // log user input
  console.log(phrase);
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }

    // log characters
    console.log(character);
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;

    // log characters
    console.log(character);
  }
}

alert(newPhrase);
