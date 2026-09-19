const pr = new Promise((res, rej)=>{

    setTimeout(()=>{
        res("Yes ji khajana mil gaya");
    },2000);

    rej("bhaag bhai police aa gayi hai");

})

console.log(pr);

pr.
then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

const pr1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Yes ji khajana mil gaya");
        console.log("i am inside pr1");

    },2000)
});

console.log(pr1);

const pr2 = new Promise(()={
    setTimeout(()=>{
        console.log("I am inside pr2");
    },1000)

    //rej()
});

console.log(pr2);

