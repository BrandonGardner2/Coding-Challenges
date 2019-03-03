// Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:

// toBinaryString(6) should return "110" (no leading 0).

// Use of the native method number.toString(2);  is disallowed.

function toBinaryString(number) {
  if (number === 0) {
    return "0";
  }
  let result = [];
  while (number > 0) {
    result.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return result.join("");
}

console.log(toBinaryString(13));
