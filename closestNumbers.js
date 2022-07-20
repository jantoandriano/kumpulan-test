function closestNumbers(numbers) {
  // Write your code here
  numbers.sort(function (a, b) {
    return a - b;
  });

  var max = numbers[1] - numbers[0];
  var maxPairs = [numbers[0], numbers[1]];

  for (var i = 2; i < numbers.length; i++) {
    var prev = numbers[i - 1];
    var current = numbers[i];
    var diff = current - prev;

    if (diff < max) {
      max = diff;
      maxPairs = [prev, current];
    } else if (diff === max) {
      maxPairs = maxPairs.concat([prev, current]);
    }
  }
  var temp = maxPairs;
  for (var j = 0; j < temp.length; j++) {
    if (j % 2 === 0) {
      console.log(temp[j], temp[j + 1]);
    }
  }
}

closestNumbers([1, 3, 2, 4, 6, 5]);

function closestNumbers2(numbers) {
  // Write your code here
  numbers.sort(function (a, b) {
    return a - b;
  });

  var max = numbers[1] - numbers[0];
  var result = [];

  for (var i = 1; i < numbers.length; i++) {
    var prev = numbers[i - 1];
    var current = numbers[i];
    var diff = current - prev;

    if (diff < max) {
      max = diff;
      result.push([prev, current]);
    } else if (diff === max) {
      result.push([prev, current]);
    }
  }
  result.map((item) => console.log(item));
}
