'use strict';

let name = prompt('what is your name?');

let greeting = '';

if (name) {
  greeting = 'hello ' + name + '!';
} else {
  greeting = 'no name?!';
}

alert(greeting);
