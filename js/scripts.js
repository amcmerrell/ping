function isValid(maxValue) {
  maxValue = parseInt(maxValue);
  if (isNaN(maxValue) === true || maxValue <= 0) {
    return false;
  } else {
    return maxValue; // Input converted from string to number.
  }
}

var numberArray = [];
function countUp(maxValue) {
  for (i = 1; i <= maxValue; i++) {
    var number = i;
    numberArray.push(number);
  }
  return numberArray
}

function replaceThree(numberArray) {
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 3 === 0) {
      numberArray.splice(i, 1, "ping");
    }
  }
  return numberArray;
}

function replaceFive(numberArray) {
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 5 === 0) {
      numberArray.splice(i, 1, "pong");
    }
  }
  return numberArray;
}
