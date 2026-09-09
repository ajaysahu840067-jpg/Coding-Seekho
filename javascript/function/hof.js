let arr=[1,2,24,5,6,7,88,99,77,55,44,0];

// name()
// function name() {}
// let a = function(){}

// arr.forEach((el)=>{console.log(el)});

// let a = arr.forEach(double)
// console.log(a);

// function double(el){
//     console.log(el*el);
// }

// let a = arr.map((el)=> el*el)
// console.log(a);
// console.log(arr);

// let a =  arr.filter((el)=> el %2 == 0);
// console.log(a);

// arr.reduce(callback, initial)

let a = arr.reduce((acc,el)=>acc +=el,0);
console.log(a);
