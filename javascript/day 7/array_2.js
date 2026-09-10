/* 1 sep-2026
update
acess-searching
sorting
slice vs splice
destructing
spread
flatter:: imp
*/


// topic 1  searching:: indexof() lastindexof() includes()

//let arr=[1,2,6,5,4,8,100,2,6];
//console.log(arr);

//arr[0]=1000
//console.log(arr);

// all those value which are put in arr -- >

//for(let i=0 ;i < arr.length; i++){
    //arr[i]=arr[i]**2;
//} 
//console.log(arr);

//console.log(arr.indexOf(6)); // if the val is present it will
//console.log(arr.lastIndexOf(6)); // same as above once
//console.log(arr.includes(6)); // it return true and false

//console.log(arr.findLastIndex(6));
//console.log(arr.findIndex())

//
// topic 3 : Sorting 

//1,2,3,4,5,9=yes  ascending

//1,1,2,3,3,4,5=yes 

//9,8,7,6,64=yes  descending

//let brr =[1,2,3,6,7,9,10,1100,12,5,'aa']
//let brr = ["mango", "apple", "banana", "papaya",'aa'];

//console.log(brr);
// brr.sort((a,b)=> b-a)

//brr.sort();

//console.log();

//
// topic slice vs splice
//
//slice :: slice(st,end) //st is included and end is excluded

//let crr = [1,2,3,4,5,6,7,8,10,0,2];
//let drr = crr.slice()
//let drr = crr.slice(2);
//let drr = crr.slice(2,6);
//drr[0]= 100
//console.log(drr);
//console.log(crr);


// splice:: it is work over the original array or (it will mutate original array in place)
// splice(stIdx, deleteCount, items, items, items)

let err=[86, 45, 3, 5, 8, 99, 49, 2];

err.splice(3,2,"Ajay","Abhay","RAj");
// console.log(err);


// destructing
let frr=[1,2,3,5,6,7,8,8];
let[x,...y]=frr;
console.log(x)
console.log(y)
console.log(...frr)


