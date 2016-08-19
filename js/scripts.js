// Begin Business Logic
function isValid(entry) {
  number = parseInt(entry);
  if (isNaN(number) === true || number <= 0) {
    return false;
  } else {
    return number; // Input converted from string to number.
  }
}

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

function pingPong(entry) {
  numberArray = [];
  countUp(number);
  numberArray = replaceNumbers(numberArray);
}

// Begin UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    entry = $("input#value").val();
    function showResults(elements) {
      $("#results").text("");
      $(".error").hide();
      elements.forEach(function(element) {
        $("ul").append("<li>" + element + "</li>")
      });
    }

    if (!isValid(entry)) {
      $(".error").slideDown();
    } else {
      pingPong(entry);
      showResults(numberArray);
    }
    event.preventDefault();
  });
});
