'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  
  word = word.trim().toLowerCase();

  word = document.getElementById('input').value;
 
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = "";
  // if statement checks to see if the word starts with a vowel, if so "yay" is added to the end of the word and outputted.
    if (vowels.indexOf(word[0]) > -1) {
        newString = word + "yay";
        return newString;
    } else { // if the word is a consonant and does not start with a vowel. It goes through a series of expressions.
        let firstVowelIndex = word.match(/[aeiou]/g) || 0; // firstVowelIndex uses match(), which returns an array of all the character indexes that match our regular expression, in this case "a, e, i, o, u", if no vowels are found, then firstVowelIndex is assigned 0.
        let vowel = word.indexOf(firstVowelIndex[0]); // Vowel will give us the index of the first vowel found in the string using indexOf().
        newString = word.substring(vowel) + word.substring(0, vowel) + "ay"; // At this point we have the index of the first occurring vowel, we use that number in our substring argument. The first part of the expression represents the part of the word without the consonant beginning, while the second part of the expression represents the consonant. We concate both the strings together and finally add "ay" at the end.
        return newString;
    } 
}
document.getElementById('output').value = newString;




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    pigLatin(answer);
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex or consonant word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.