"use strict";

let str = "abbaca";

const duplicateCharacters = (word) => {
  let arr = word.split("");
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i - 1, 2);
      i -= 2;
    }
    i++;
  }

  return arr.join("");
};

console.log(duplicateCharacters(str));
