// Implement four functions called multiply, divide, modulo, and negCheck. The first three functions should multiply, divide, or return the remainder of two arguments after invoking negCheck upon the two numbers.

// Now for the tricky part: you can only use + and - to implement these functions.
// Do not use the JavaScript operators for multiply, divide and modulo: * / %

// The negCheck function needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative. Use a Boolean value to indicate this (you can use the not operator ! to toggle the Boolean value.) negCheck should return an array with that Boolean having converted num1 and num2 into positive integers.

function negCheck(num1, num2) {
  let positives = [];
  if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
    positives.push(false);
  } else {
    positives.push(true);
  }
  positives.push(Math.abs(num1));
  positives.push(Math.abs(num2));
  return positives;
}

function multiply(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  while (arr[2] > 1) {
    first += arr[1];
    arr[2]--;
  }
  if (arr[0]) {
    if (first === 0) {
      return 0;
    }
    return -first;
  } else {
    return first;
  }
}

function divide(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  let counter = 0;
  while (first >= arr[2]) {
    first -= arr[2];
    counter++;
  }
  if (arr[0]) {
    return -counter;
  } else {
    return counter;
  }
}

function modulo(x, y) {
  const arr = negCheck(x, y);
  let first = arr[1];
  let counter = 0;
  while (first >= arr[2]) {
    first -= arr[2];
    counter++;
  }
  if (arr[0]) {
    return -first;
  } else {
    return first;
  }
}
