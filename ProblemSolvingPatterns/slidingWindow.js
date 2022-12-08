//Naive solution
function maxSubarraySum(arr, num) {
  //edge case if provided is bigger than length of array return null
  if (num > arr.length) {
    return null;
  }
  //negative infinity is lowest possible number
  //we set absolutemin to negative infinity because we want to also include
  //all the negative integers before before 0, so we cant initialize var with 0
  var absolutemin = -Infinity;
  //arr.length - num + 1 its set like this because we are always looking
  //for a window of 3 numbers so our last window starts 3 numbers from the end
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    // no matter what we do the result of the first iteration will be bigger than
    // negtive infinity
    if (temp > absolutemin) {
      absolutemin = temp;
    }
  }
  return absolutemin;
}

/*

MISSING THIRD ITERATION OF J!!!

first iteration of i
    index of i is 0, value is 2
    temp=0
first iteration of j
    index of j is 0
    temp = temp + arr[0+0], value of temp is 2
second iteration of j
    index of j is 1
    temp = 2 + arr[0+1], value of temp is 8
third iteration of j
    index of j is 2
    temp = 8 + arr[0+2],value of temp is 17    

*/
//-------------------------------------------------------------------------------------

// Refatored

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

//                          0  1  2  3  4  5  6  7  8
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/*

1.  First iteration
    - arr[i-num] + arr[i]
    - arr[0] + arr[3]
    we are deducting the first number and adding the fourth number

2.  Second iteration
    - arr[i-num] + arr[i]
    - arr[1] + arr[4]
    we are deducting the second number and adding the fifth number
*/
