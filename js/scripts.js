// Begin Business Logic
var number = "";
function isValid(number) {
  number = parseInt(number);
  if (isNaN(number) === true || number <= 0) {
    return false;
  } else {
    return number; // Input converted from string to number.
  }
}

var numberArray = [];
function countUp(number) {
  for (n = 1; n <= number; n++) {
    numberArray.push(n);
  }
  return numberArray; // Output is now an array.
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
  return numberArray; // Output now includes numbers and strings.
}

function pingPong(number) {
  countUp(number);
  numberArray = replaceNumbers(numberArray);
}

// Begin UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    number = $("input#value").val();

    if (!isValid(number)) {
      alert("Not valid!");
    } else {
      $("#results").text("")
      numberArray = [];
      pingPong(number);
      numberArray.forEach(function(entry) {
        $("ul").append("<li>" + entry + "</li>")
      });
    }

    event.preventDefault();
  });
});

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
