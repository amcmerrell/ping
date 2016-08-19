function isValid(input) {
  var value = parseFloat(input);
  if (isNaN(value) === true || value <= 0) {
    return false;
  } else {
    return true;
  }
}
