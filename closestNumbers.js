function closestNumbers(numbers) {
  // Write your code here
  numbers.sort(function (a, b) {
    return a - b;
  });

  var max = numbers[1] - numbers[0];
  var maxPairs = [numbers[0], numbers[1]];

  for (var i = 2; i < numbers.length; i++) {
    var prev = numbers[i - 1];
    var next = numbers[i];
    var diff = next - prev;

    if (diff < max) {
      max = diff;
      maxPairs = [prev, next];
    } else if (diff === max) {
      maxPairs = maxPairs.concat([prev, next]);
    }
  }
  var temp = maxPairs;
  for (var j = 0; j < temp.length; j++) {
    if (j % 2 === 0) {
      console.log(temp[j], temp[j + 1]);
    }
  }
}
