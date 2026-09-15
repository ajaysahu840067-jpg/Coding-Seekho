let btn = document.querySelector('#btn');
let dada = document.querySelector('#dada');
let papa = document.querySelector('#papa');
let child = document.querySelector('#child');

let counter = 0;

// btn.onclick = ()=>{
//      console.log('counter1 = ${counter++}'); // string literal || format string
// }


// btn.addEventListener('click', (event_object)=>{
//     console.log('counter2 = ${counter++}'); // string literal || format string
//     console.log(event_object);

// });


dada.addEventListener('click',hello);
function hello(event_object){
    console.log('counter2 = ${counter++}'); // string literal || format string
    console.log(event_object.target);
    console.log(event_object.currentTarget);
};

papa.addEventListener('click',hello1);
function hello1(event_object){
    console.log('counter2 = ${counter++}'); // string literal || format string
    console.log(event_object.target);
    console.log(event_object.currentTarget);
};

btn.addEventListener('click',hello2);
function hello2(event_object){
    console.log('counter2 = ${counter++}'); // string literal || format string
    console.log(event_object.target);
    console.log(event_object.currentTarget);
};

child.addEventListener('click',hello3);
function hello3(event_object){
    console.log('counter2 = ${counter++}'); // string literal || format string
    console.log(event_object.target);
    console.log(event_object.currentTarget);
    event_object.stopPropagation();
};