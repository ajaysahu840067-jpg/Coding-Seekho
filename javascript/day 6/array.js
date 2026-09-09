//Creation ...
// Method 1
let array=[1,2,3,4,5,6,7,8];  // array literals
// console.log(array[1]);
// console.log(typeof array);

// Method 2
let brr=new Array(5);
// console.log(brr.length);
// console.log(typeof brr);

// console.log(brr[2]); // undefined

let crr=new Array(1,2,3,3,4,5,6);
// console.log(crr.length);


// Method 3... // Acessing phase 1
let drr=Array.from(crr);
// console.log(drr.length);

// Accessing- phase 2-----
// Method 1
console.log(Boolean([])); // truthy--> true
console.log([]==[]); // false--> because reference

// reference ::--->
// stack reference
// heap:: actual allocation
