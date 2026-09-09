
// funName();

function funName(){
    console.log("I am inside normal function")
}


// function expression
let funName2 = function(){
    console.log("I am inside anonymous function2")
}
// funName2();


let funName3=()=>{
    console.log(" I am inside arrow function")
}
//funName3();

function operation(a, b) {
    // return {
    //     add: a + b,
    //     sub: a - b,
    //     multi: a * b
    //};
}

//let { add, sub, multi } = operation(5, 3);

// console.log(add);
// console.log(sub);
// console.log(multi);

function add(x,y,...lis) {
    let sum = 0;

    for (let x of lis)sum += x;

    return sum;
}

//let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// console.log(add(2,3,33,44,56,34));
// console.log(add(2,3,33,55,56,34));
// console.log(add(2,3,33,66,56,34));

function fun(){
    return()=>{"hello Bhai"};
}

// arr=fun()
// console.log(typeof arr);
// console.log(arr);

function papa_ji(child){
    console.log("yes");      //  output- yes i  am child no
    child();
    console.log("no")
}
// let chillar= ()=>{console.log("i am child")}
// papa_ji(chillar)


let obj={
    name:"pushpa ji",
    greet:function(name){
        return `hello goodmorning ${this.name= name} Didi` ;
    }
}

// console.log(obj.greet("kallu bhaiya"));
// console.log(obj.name);

