const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== value && left <= right) {
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
};

console.log(binarySearch([1, 2, 5, 7, 13, 15, 16], 13));
