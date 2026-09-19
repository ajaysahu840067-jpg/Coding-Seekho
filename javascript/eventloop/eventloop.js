
// let a = 5;
// {
//     console.log(a);
//     {
//         let a =6;
//         console.log(a);
//         {
//             let a = 7;
//             console.log(a);
//         }

//     }
// }



console.log("hello 1\n");  /// callstack 1

setTimeout(()=>{
    console.log("I am inside fun function\n")
},0) // callstack last me 

function fun(name){
    console.log("I am inside fun function\n")
    return `hello ${name} sir, test paper ka thoda hint de dijiye\n`
}

for(let i = 0; i < 4; i++){
    setTimeout(()=>{
     console.log("I am inside loop time out>>>", i);
    },2000);
}


function call(name){
    console.log("I am inside call function")

    setTimeout(()=>{
     console.log("I am inside loop time out");
    },1000);
    
    let message = fun(name);

    console.log(message);
}

call("Ajay"); /// callstack 2

console.log("aree sir kuch bata dijiye"); // callstack 3