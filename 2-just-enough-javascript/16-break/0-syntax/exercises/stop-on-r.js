'use strict';

// ::::: don't forget to trace the program! :::::

let animal = 'horse';

for (let char of animal) {
  if (char === 'r') {
    break; // <-- a keyword
  }

  console.log(char);
}
