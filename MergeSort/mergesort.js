const mergeArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    //we are looking for smaller of the two
    //if arr[i] is smaller than arr[j] push arr[i] and increment i++
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    }
    //if arr[i] is bigger then arr[j] push arr[j] nad increment j++
    else {
      res.push(arr2[j]);
      j++;
    }
  }
  //if one of the remaining arrays still have elements inside after we finish comparison
  //push it into new array
  //ex: i is 3 after first round of loops, however length of arr1 is 5
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

console.log(mergeArrays([1, 5, 15], [2, 3, 8, 20]));

const mergeSort = array => {
  //base case
  if (array.length <= 1) return array;
  //we invoke the function that will recursively split arrays into 2
  //split array into 2
  let left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
  let right = mergeSort(array.slice(Math.floor(array.length / 2)));
  //SORT AND MERGE THE SPLIT ARRAYS USING mergeARRAYS
  return mergeArrays(left, right);
};
console.log(mergeSort([1, 5, 15, 2, 3, 8, 20]));

//splitting
// let arr = [1, 5, 15, 2, 3, 8, 20];
// console.log(arr.slice(0, Math.floor(arr.length / 2)));
// console.log(arr.slice(Math.floor(arr.length / 2)));
