obj={
    name:"Coding Seekho",
    age:100,
    contact:1010101010,
    address:{
        city:"Lucknow",
        pin:12125
    }


}


//loop over the Object
//for(let item of Object.entries(obj)){
    // console.log(item[0])
    // console.log(item[1])
//}
//for(let x of Object.keys(obj)){
    // console.log(obj[x]);
//}



// console.log(obj.name);
// console.log(obj["name"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


//for(let x in  obj){
//     console.log(x);
//     console.log(obj[x]);
// }

// Object.keys(obj);
// Object.values(obj);
// Object.entries(obj);


// copy 
// method 1

// obj2={...obj}
// obj2.name="Coding Seekho sab ka saathi"
// obj2.age=1999

// obj2.address={city:"pune",pincode:5678}
// console.log(obj)
// console.log(obj2)

// method 2
// obj2=Object.assign(obj);
// obj2.name="Coding Seekho sab ka saathi"
// obj2.age=1999
// obj2.address.city="Pune";

// Method 3
// obj2={...Object.entries(obj)}
// obj2['3'][1].city="Pune";
// console.log(obj);
// console.log(obj2);

// Deep copy...
// Method 1
// obj2=structuredClone(obj);
// obj2.name="Coding Seekho sab ka saathi"
// obj2.age=1999
// obj2.address.city="Pune";


// Method 2
arr=[1,2,3,4,5]
//obj2=console.log(typeof JSON.stringify(arr));
// obj2=JSON.parse(JSON.stringify(obj));

// console.log(obj)
// console.log(obj2)
// console.log( typeof obj2);

[x,y,...z] = [...obj]
console.log(x)
console.log(y)
console.log(z)