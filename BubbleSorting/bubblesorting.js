//Non optimized, naive solution:

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //if the current number is larger than the number ahaed, swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([10, 21, 4, 14, 230, 56]));

//Or

const bubbleSort2 = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort2([10, 21, 4, 14, 230, 56]));

//Or

const bubbleSort3 = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort3([10, 2, 4, 14, 230, 56]));

//OPTIMIZATION:

const bubbleSort4 = arr => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};
console.log(bubbleSort4([10, 2, 4, 14, 230, 56]));
