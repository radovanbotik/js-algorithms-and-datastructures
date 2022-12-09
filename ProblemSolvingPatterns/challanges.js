/*
Write a function called sameFrequency.
Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (int1, int2) => {
  const string1 = String(int1);
  const string2 = String(int2);
  console.log(string1, string2);
  if (string1.length !== string2.length) return false;
  const integerobject1 = {};
  const integerobject2 = {};

  for (let i = 0; i < string1.length; i++) {
    integerobject1[string1[i]]
      ? ++integerobject1[string1[i]]
      : (integerobject1[string1[i]] = 1);
  }

  for (let j = 0; j < string2.length; j++) {
    integerobject2[string2[j]]
      ? ++integerobject2[string2[j]]
      : (integerobject2[string2[j]] = 1);
  }
  console.log(integerobject1, integerobject2);
  for (let key in integerobject1) {
    if (!(key in integerobject2)) {
      return false;
    }
    if (integerobject1[key] !== integerobject2[key]) {
      return false;
    }
  }
  return true;
};

/* 
Implement a function called areThereDuplicates 
which accepts a variable number of arguments
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

const areThereDuplicates = (...args) => {
  const object = {};
  for (let i = 0; i < args.length; i++) {
    object[args[i]] ? ++object[args[i]] : (object[args[i]] = 1);
  }
  if (Object.keys(object).length < args.length) {
    return true;
  }
  return false;
};
// console.log(
//   areThereDuplicates("a", "b", "c", "a") // true
// );

const areThereDuplicates2 = (...args) => {
  let argumentslength = [...new Set(args)].length;
  return argumentslength < args.length ? true : false;
};

// console.log(
//   areThereDuplicates2("a", "b", "c", "a") // true
// );

/*
Write a function called averagePair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

const averagePair = (array, average) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const avg = (array[start] + array[end]) / 2;
    if (avg === average) {
      return true;
    } else if (avg < average) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

// console.log(
//   averagePair([1, 2, 3], 2.5) // true
// );

/*
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a subsequence 
of the characters in the second string. 
In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

// console.log(
//   isSubsequence("abc", "abracadabra") // true
// );

/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array,
but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)

*/

const maxSubarraySum = (array, num) => {
  if (array.length < num) return null;
  let temporary = 0;
  let maxsum = 0;

  for (let i = 0; i < num; i++) {
    temporary = temporary + array[i];
  }
  maxsum = temporary;
  for (let j = num; j < array.length; j++) {
    temporary = temporary - array[j - num] + array[j];
    maxsum = Math.max(maxsum, temporary);
  }
  return maxsum;
};
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));

/*
Write a function called minSubArrayLen which accepts two parameters
an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray
of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)

*/

const minSubArrayLen = (array, int) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    /*
  If sum of numbers in window is smaller than provided integer while end of the window
  is smaller than length of the array, keep increasing end ( stretching window  to right )
  and keep summing values
  */
    if (total < int && end < array.length) {
      total += array[end];
      end++;
      /*
  If sum of numbers inside array exceeds provided integer
  set minLen to be the value of end - start 
  deduct the start from end which gives us a number that represents number of indices
  that the shortest subarray consist of
  increase start position of window
  (move window to the right), 
  */
    } else if (total >= int) {
      minLen = Math.min(minLen, end - start);
      total = total - array[start];
      start++;
    } else {
      /*
    current total less than required total but we reach the end
    this prevents infinite loop infinite loop 
    */
      break;
    }
  }
  /*
  If minLen === Infinity it we didnt find any subarray since it hasnt ever been redefined
  so we return 0, otherwise we return the length of the subarray
  */
  return minLen === Infinity ? 0 : minLen;
};

// console.log(
//   minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// );

const minSubArrayLen2 = (array, int) => {
  let left = 0;
  let right = 0;
  let total = 0;
  let max = Infinity;
  while (left < array.length) {
    if (total < int && right < array.length) {
      total = total + array[right];
      right++;
    } else if (total >= int) {
      let windowlength = right - left;
      max = Math.min(max, windowlength);
      total = total - array[left];
      left++;
    } else {
      break;
    }
  }
  return max === Infinity ? 0 : max;
};

// console.log(
//   minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
// );

/*
Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring 
with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

*/

function findLongestSubstring(str) {
  let longest = 0;
  let traversed = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (traversed[character]) {
      start = Math.max(start, traversed[character]);
    }
    longest = Math.max(longest, i - start + 1);
    traversed[character] = i + 1;
  }
  return longest;
}

console.log(
  findLongestSubstring("thecatinthehat") // 7
);
