const balancedIndex = (array) => {
  let total = array.reduce((a, b) => a + b);
  let sumLeft = 0;

  for (let i = 0; i < array.length; i++) {
    total = total - array[i];
    //compares the sum to the left of current index against total
    if (sumLeft === total) {
      // if the sums match, the current index will be returned
      return i;
    }
    sumLeft += array[i];
  }
  return -1;
};

// Driver code
let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(ballancedArray(arr));
