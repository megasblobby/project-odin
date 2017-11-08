"use strict";

const NUMBER = 600851475143;

let divisors = [];
const largestPrimeFactor = getLargestPrimeFactor(NUMBER);

function getLargestPrimeFactor(number) {
  let largestPrimeFactor = 2;
  for (let index = 3; index < 10000; index += 2) {
    if (number % index === 0) {
      divisors.push(index);
      if (isPrimeNumber(index)) {
        largestPrimeFactor = index;
      }
    }
  }
  console.log(divisors);
  return largestPrimeFactor;
}


function isPrimeNumber(number) {
  for (var index = 2; index < number - 1; index += 2) {
      if (number % index === 0) {
        return false;
      }
  }
  return true;
}

console.log(largestPrimeFactor);
