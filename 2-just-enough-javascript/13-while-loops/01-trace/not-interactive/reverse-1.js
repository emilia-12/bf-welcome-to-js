'use strict';

// let word = 'racecar';
// let word = 'bike';
// let word = 'f';
// let word = ' i o u ';
let word = 'done.';

let reversed = '';

let index = 0;
while (word.length !== reversed.length) {
  let nextChar = word[index];
  reversed = nextChar + reversed;
  index++;
}

console.log(word, reversed);
