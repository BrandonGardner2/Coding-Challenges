// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable) {
  //your code here - remember iterable can be a string or an array
  let a = iterable;
  let b = [];
  if (typeof iterable === "string") {
    a = iterable.split("");
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      continue;
    } else {
      b.push(a[i]);
    }
  }
  return b;
};
