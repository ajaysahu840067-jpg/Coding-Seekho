// create ->>
// 1. Literals
// access ->> dot vs []  mutable or immutable
obj = {
    name : "Coding Seekho",
    age: 24,
    address :{
        city : "Delhi",
        pincode : 2222
    }
} 

obj.age = 24;
// console.log(typeof obj.age);
// console.log(obj.age);


// 2. Object Constructor

obj2 = new Object();
obj2.name = "Ajay"

//console.log(typeof obj2)
//console.log(obj2.name)


// 3. functions
function Students(name, age){
    this.name= name;
    this.age= age;
    // console.log(this.name);
    // console.log(this.age);

}

st=new Students("Chintu", 1000);
st2 = new Students("chinti", 1100);
// console.log(typeof st)
// console.log(st)
// console.log(typeof st2)
// console.log(st2)

const obj3 = {
    name: "Pushpa ji",
    age: 100,
    address :{
        city: "Lucknow",
        pincode: "100"
    }
}
//console.log(obj3);
// delete obj3.name;
// console.log(obj3);

// let [z,x,...c]=[1,2,23,43,4,5,1];
// console.log(z)
// console.log(x)
// console.log(c)

let {age:newage, name="Ajay", x = 10} = obj3;
// console.log(name);
// console.log(newage);
// console.log(x);


//console.log({} =={})