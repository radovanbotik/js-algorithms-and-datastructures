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
console.log(
  areThereDuplicates("a", "b", "c", "a") // true
);

const areThereDuplicates2 = (...args) => {
  let argumentslength = [...new Set(args)].length;
  return argumentslength < args.length ? true : false;
};

console.log(
  areThereDuplicates2("a", "b", "c", "a") // true
);
