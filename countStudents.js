function countStudents(height) {
  // To store a copy of the
  // original array
  let copy_arr = [];
  let count = 0;

  // Copy the elements of the given
  // array to the new array
  for (let i = 0; i < height.length; i++) {
    copy_arr[i] = height[i];
  }

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
