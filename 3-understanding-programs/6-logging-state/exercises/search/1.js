'use strict';

/*
  log every invalid input the user provides
    and only the invalid inputs!
*/

let phrase = '';
const inValidInputs = [];

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    // add to inValidInputs
    inValidInputs.push(null);
    continue;
  }

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
  if (!userConfirmedPhrase) {
    inValidInputs.push(phrase);
  }
}

const caseSensitive = confirm('do you want a case-sensitive search?');

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );
  if (query === null) {
    // add to inValidInputs
    inValidInputs.push(null);
    continue;
  }

  userConfirmedQuery = confirm('is this correct: "' + query + '"');

  if (!userConfirmedQuery) {
    inValidInputs.push(query);
  }
}

let phraseIncludesQuery;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);
} else {
  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
} else {
  doesOrNot = 'does not';
}

alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive,
);

console.log(inValidInputs);
