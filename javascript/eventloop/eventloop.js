console.log("hello 1");

function fun(name){
    console.log("I am inside fun function")
    return `hello ${name} sir, test paper ka thoda hint de dijiye`
}

function call(name){
    console.log("I am inside call function")
    
    let message = fun(name);

    console.log(message);
}

call("Ajay");

console.log("aree sir kuch bata dijiye");