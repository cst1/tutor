// Sample code that doesn't work as you think it should
// ----------------------------------------------------
let foo;

console.log(`\nflipArray()...`);
function flipArray(arr) {
  for (let i; i < arr.length; i++) {
    arr[i] = !arr[i];
  }
}

foo = [true, false, true, true];
console.log(`>> foo before: ${foo}`);
flipArray(foo);
console.log(`>> foo after : ${foo}`);

// ----------------------------------------------------
console.log(`\nflipArrayTwo()...`);
function flipArrayTwo(arr) {
  arr.forEach(x => {
    x = !x;
  });
}

foo = [true, false, true, true];
console.log(`>> foo before: ${foo}`);
flipArrayTwo(foo);
console.log(`>> foo after : ${foo}`);

// ----------------------------------------------------
