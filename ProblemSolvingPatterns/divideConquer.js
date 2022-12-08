//Naive
const search = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 6));

//Naive

const search1 = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < n) {
      min = middle + 1;
    } else if (arr[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
//                      M               N
//                         M            N
//
//                   0  1  2  3  4  5
console.log(search1([1, 2, 3, 4, 5, 6], 6));
