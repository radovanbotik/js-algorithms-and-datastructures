//Timing Code
//[1,2,3,4,5,6] = 21
const addupto = n => {
  let total = 0;
  for (i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};
console.log(addupto(6));

// VS //
const addupto2 = n => {
  return (n * (n + 1)) / 2;
};
console.log(addupto2(6));

let t1 = performance.now();
addupto2(1000000000);
let t2 = performance.now();
console.log(`time elapsed:${(t2 - t1) / 1000} seconds`);
