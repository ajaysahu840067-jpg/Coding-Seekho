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
// console.log(Boolean([])); // truthy--> true
// console.log([]==[]); // false--> because reference

let err=drr;
// console.log(err==drr);

// reference ::--->
// stack reference
// heap:: actual allocation

// Method 1 :: index accessing

// console.log(err[0])
// console.log(err[1])
// console.log(err[2])
// console.log(err[-1])  // undefine --> -1 index is not exist
// console.log(err.at(-1))   // backward indexing...

// Method 2:: with loops

// console.log(err); // this give return array object

for(let i=0;i<err.length;i++){
    // console.log(err[i]); // each elements which is present the index 
}

// console.log()
//for(let element  of err){
//     console.log(element);
// }

// Mutability :: insert , update , delete..................

// console.log(err);

// INSERTION / DELETION :: push, pop :: both will perform action to element to the end of the array
// err.push("hello");
// console.log(err);
// err.push("Good Morning");
// console.log(err);

// err.pop()
// console.log(err);
// console.log(err.pop()); // POP method will delete last element and return
// console.log(err);

// INSERTION / DELETION :: from the start of the array

// shift(): delete from the start
// unshift(): add at the start
// err.shift()
// console.log(err.shift()); // delete from the start and return it

err.unshift(1);
// console.log(err);


// let frr=[];
let frr=new Array();

frr.unshift(1,2,3,4,5,6);
console.log(frr);

// empty vs undefine
frr.length=10;
console.log(frr);
console.log(frr[6]);