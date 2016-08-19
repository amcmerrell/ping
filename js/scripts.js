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

function replaceNumbers(numberArray) {
  var replacedNums = [15, 5, 3];
  var replacements = ["ping-pong", "pong", "ping"];

  for (j = 0; j < replacedNums.length; j++) {
    for (i = 0; i < numberArray.length; i++) {
      if (numberArray[i] % replacedNums[j] === 0) {
        numberArray.splice(i, 1, replacements[j]);
      }
    }
  }
  return numberArray;
}

// These functions have been replaced by refactored version
// function replaceThree(numberArray) {
//   for (i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 3 === 0) {
//       numberArray.splice(i, 1, "ping");
//     }
//   }
//   return numberArray;
// }
//
// function replaceFive(numberArray) {
//   for (i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 5 === 0) {
//       numberArray.splice(i, 1, "pong");
//     }
//   }
//   return numberArray;
// }
