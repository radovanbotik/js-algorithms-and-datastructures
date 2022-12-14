const factorial = num => {
  if (num === 1) {
    return num;
  }
  return factorial(num - 1) * num;
};

console.log(factorial(4));
