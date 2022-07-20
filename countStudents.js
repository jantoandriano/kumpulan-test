function countStudents(height) {
  // To store a copy of the
  // original array
  let copy_arr = height.map((item) => item);
  let count = 0;

  // Sort the original array
  height.sort((a, b) => a - b);

  for (let i = 0; i < height.length; i++) {
    // If current element was not
    // at the right position
    if (height[i] != copy_arr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countStudents([1, 2, 4, 3, 5]));
