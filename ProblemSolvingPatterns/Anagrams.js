const validAnagram = (str1, str2) => {
  //check the length
  if (str1.length !== str2.length) {
    return false;
  }
  //create objects for each string
  const string1Object = {};
  const string2Object = {};

  //add values to the objects
  for (let character of str1) {
    string1Object[character] = ++string1Object[character] || 1;
  }
  for (let character of str2) {
    string2Object[character] = ++string2Object[character] || 1;
  }
  console.log(string1Object, string2Object);

  //for each key in the first object
  for (let key in string1Object) {
    //check if the key is missing in the second object
    if (!(key in string2Object)) {
      return false;
    }
    //check if the value of current iteration,key is same on both objects
    if (string2Object[key] !== string1Object[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("awesome", "asomewe"));
