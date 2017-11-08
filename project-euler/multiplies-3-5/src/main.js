"use strict";

const MAX_NUMBER = 1000;

const sumOfMultipies = getSumOfMultiplies(3, 5, MAX_NUMBER);

function getSumOfMultiplies(numberA, numberB, maxNumber) {
  let sumOfMultipliesOf = 0;
  for (let index = 1; index < MAX_NUMBER; index++) {
    if (index % numberA === 0 || index % numberB === 0) {
      sumOfMultipliesOf += index;
    }
  }
  return sumOfMultipliesOf;
}

console.log(sumOfMultipies);
