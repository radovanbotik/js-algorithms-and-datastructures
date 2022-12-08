//set solution
// function countUniqueValues(arr) {
//   return [...new Set(arr)].length;
// }

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   let j = 1;

//   for (j; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

//  if arr[i] and arr[j] doesnt match we increase i++ and
//  set value of arr[i] to whatever is stored in arr[j]

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  for (j; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

const arr = [-2, -2, -1, -1, 0, 1];

//first iteration
//arr[i] index is 0, value is - 2
//arr[j] index is 1, value - 2
//arr[i] == arr[j] we take no action and we move further

//second iteration
//arr[i] index is 0, value is -2
//arr[j] index is 2, value is -1
//arr[i] !== arr[j] we increase i so arr[i] index is 1, and value is arr[j] so -1
//array looks like this now [-2,-1,-1,0,1]

//third iteration
//arr[i] index is 1 and value is -1
//arr[j] index is 3 and value is -1
//arr[i] == arr[j] no action

//fourth iteration
//arr[i] index is 1 and value is -1
//arr[j] index 4 and value is 0
//arr[i] !== arr[j] we incraese i so arr[i] index is 2, and value is 0
//array looks like this [-2,1,0,1]

//fifth iteration
//arr[i] index is 2, and value is 0
//arr[j] index is 5, and value is 1
//arr[i] !== arr[j], we increase i so arr[i] index is 3 and value is 1
//array looks like this [-2,1,0,1]

//i is at index of 3 however that means the length of array is 4
//so we have 4 unique values in this array
