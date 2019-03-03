// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// bool isPrime(5) = return true
// mov edi, 1
// call is_prime    ; EAX <- 0 (false)

// mov edi, 2
// call is_prime    ; EAX <- 1 (true)

// mov edi, -1
// call is_prime    ; EAX <- 0 (false)

function isPrime(num) {
  //TODO
  let ints = [];
  if (num > 0) {
    for (let i = num; i >= 1; i--) {
      if (Number.isInteger(num / i) || num / i == num) {
        ints.push(i);
      } else {
        continue;
      }
    }
  }
  return ints.length == 2 ? true : false;
}
