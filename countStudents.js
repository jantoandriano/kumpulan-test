function countStudents(height) {
  // To store a copy of the
  // original array
  let copy_arr = height.map((item) => item).sort();
  let n = height.length;

  // Copy the elements of the given
  // array to the new array
  for (let i = 0; i < n; i++) copy_arr[i] = height[i];

  // To store the required count
  let count = 0;

  // Sort the original array
  height.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    // If current element was not
    // at the right position
    if (height[i] != copy_arr[i]) {
      count++;
    }
  }
  return count;
}
