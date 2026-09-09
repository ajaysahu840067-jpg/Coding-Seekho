//
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
//console.log(arr.includes(6)); // it return trye and false

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
//lice :: slice(st,end) //st is included and end is excluded

l//et crr = [1,2,3,4,5,6,7,8,10,0,2];
//let drr = crr.slice()
//let drr = crr.slice(2);
//let drr = crr.slice(2,6);
//drr[0]= 100
//console.log(drr);
//console.log(crr);



let grr=[1,2,3,4,5,6,[2,3,[2,6,4,5,6,7],5,6],[1,223,4,45]]

console.log(grr);
console.log(...grr.flat(Infinity))