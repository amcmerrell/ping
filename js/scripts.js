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
}
