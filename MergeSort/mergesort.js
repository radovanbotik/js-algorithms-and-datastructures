const mergeSort = (arr1, arr2) => {
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

console.log(mergeSort([1, 5, 15], [2, 3, 8, 20]));
