// Write a function which counts the number of vowels in a given string. Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.

function vowelCount(str) {
  let result = str.match(/a|e|i|o|u/gi);
  return result ? result.length : 0;
}
