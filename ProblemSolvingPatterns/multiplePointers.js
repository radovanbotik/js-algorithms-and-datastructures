function sumZero(arr) {
  //looping through array
  for (let i = 0; i < arr.length; i++) {
    //looping through array except the current iteration of i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

//In the first iteration arr[i] is -4 and arr[j+i] will run once for each
//entry inside the array so i=-4,j=-3,j=-2,j=-1,j=0,j=1,j=2,j=5
//if we find a match we retuns [arr[i],arr[j]]
//if not we increase i so arr[i] is -3 and arr[j+i] is -2,-1,0,1,2,5...
//if we dont find any match we dont return anything from function and we get undefined

//  1.
//  i[0] = -4

//  j[1] = -3
//  j[2] = -2
//  j[3] = -1
//  j[4] =  0
//....

//  2.
//  i[1] = -3

//  j[2] = -2
//  j[3] = -1
//  j[4] =  0
//...

//  3.
//  i[2] = -2

//  j[3] = -1
//  j[4] =  0
//  j[5] =  1
//  j[6] =  2

//  i[2] + j[6] === 0
//     if i+j === 0 return [arr[i],arr[j]]

//#   Refactor to Multiple Pointer Pattern:

function sumZero1(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end++;
    } else {
      start++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
