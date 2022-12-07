function charCount(string) {
  //make object to return at end
  let res = {};
  //loop over string
  for (i = 0; i < string.length; i++) {
    let count = 1;
    if (res.hasOwnProperty([string[i]])) {
      res = { ...res, [string[i]]: count++ };
    }
    res = { ...res, [string[i]]: count };
  }
  return res;
  //if the char is number/letter AND a key in obj add 1 to the count
  //if the char is number/letter AND not a key add it and set the count
  //if the char is something else dont do anything
  //return object
}
console.log(charCount("hello i am  rado"));

function charCount2(string) {
  //make object to return at end
  let result = {};
  //loop over string
  for (i = 0; i < string.length; i++) {
    let character = string[i].toLowerCase();
    //if character is alphanumeric value //regex//array of alphanumeric values //
    if (/[a-z0-9]/.test(character)) {
      //if the char is number/letter AND a key in obj add 1 to the count
      if (result[character] > 0) {
        result[character]++;
        //if the char is number/letter AND not a key add it and set the count
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
}
console.log(charCount2("hello Hi!"));

const isAlphaNumeric = character => {
  const code = character.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha A-Z
    !(code > 96 && code < 123) // lower alpha a-z
  ) {
    return false;
  }
  return true;
};

const charCount3 = string => {
  const result = {};
  //swapping for loop with for of loop
  for (character of string) {
    if (isAlphaNumeric(character)) {
      character = character.toLowerCase();
      //if its truthy increase by 1 otherwise set to 1
      result[character] = ++result[character] || 1;
    }
  }
  return result;
};

console.log(charCount3("hello!"));
