"use strict";

const MAX_NUMBER = 4000000;

let fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let sumOfEvenFibonacciTerms = getSumOfEvenFibonacciTerms(fibonacciSequence, MAX_NUMBER);

function getSumOfEvenFibonacciTerms(fibonacciTerms, maxNumber) {
  let sum = 0;
  for (var i = 0; i < fibonacciTerms.length; i++) {
    if (isDivisbleByTwo(fibonacciTerms[i])) {
      sum += fibonacciTerms[i];
    }
  }
  while(fibonacciTerms[fibonacciTerms.length - 1] < MAX_NUMBER) {
    let firstTerm = fibonacciTerms[fibonacciTerms.length - 1];
    let secondTerm = fibonacciTerms[fibonacciTerms.length - 2]
    fibonacciTerms.push(firstTerm + secondTerm);
    if (isDivisbleByTwo(fibonacciTerms[fibonacciTerms.length - 1])) {
      sum += fibonacciTerms[fibonacciTerms.length - 1];
    }
  }
  return sum;
}

function isDivisbleByTwo(number) {
  return number % 2 === 0;
}

console.log(sumOfEvenFibonacciTerms);
