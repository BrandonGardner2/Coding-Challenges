// For your emulation functions, you limited to only using the deep equality operator === and if (conditional) {statements}
// Do not use !, &&, or ||.
// Do not use the functions you have created to emulate any of the other logic gates, e.g. don't use your NOT() function in the NAND() function.

// Your NOT() function only takes one parameter.
// Your other functions will take two inputs and return a Boolean value which corresponds to the conditions satisfied by their logical operator.
// To illustrate this behavior, refer to the truth tables below.
// As an example, your AND() function should implement the following behavior:
// console.log(AND(true, true));   // ---> true
// console.log(AND(true, false));  // ---> false
// console.log(AND(false, true));  // ---> false
// console.log(AND(false, false)); // ---> false

function NOT(b) {
  if (b === true) {
    return false;
  } else {
    return true;
  }
}

function AND(x, y) {
  if (x === y) {
    if (x === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function NAND(x, y) {
  if (x === y) {
    if (x === true) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}

function OR(x, y) {
  if (x === true) {
    return true;
  } else if (y === true) {
    return true;
  } else {
    return false;
  }
}

function XOR(x, y) {
  if (x === true) {
    if (y === true) {
      return false;
    } else {
      return true;
    }
  } else if (y === true) {
    return true;
  } else {
    return false;
  }
}
