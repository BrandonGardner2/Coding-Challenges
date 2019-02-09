// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  // TODO
  let row = [];
  let num = n;
  //define start of row
  row.push(num * (num - 1) + 1);
  //define the rest of the row
  while (num > 1) {
    row.push(row.slice(-1)[0] + 2);
    num--;
  }
  //add all numbers in row and return
  return row.reduce((a, b) => a + b, 0);
}
