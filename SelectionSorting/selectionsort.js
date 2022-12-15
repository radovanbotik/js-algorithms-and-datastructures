const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // i+1 is pushing it further
    for (let j = i + 1; j < arr.length; j++) {
      //is arr[1](arr[j]) less than arr[0](arr[min])?
      if (arr[j] < arr[min]) {
        //if it is update min to j
        min = j;
      }
    }
    //swap
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort([1, 2, 87, 3, 45, 5, 23, 6]));
/*

1.iteration
i   1
min 1
j   2 87 3 45 5 23 6

2.iteration
i   2
min 2
j   87 3 45 5 23 6

3.iteration
i   87      SWAP with min!  87=>3  
min 87      SWAP with i!    3 =>87     
j   3 j<min min=j 
*/
