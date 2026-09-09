//console.log(a)
// {
//     console.log(a);
//     let a=9;
//     console.log(a);
// }

function fun(){
    //console.log(a);
    var a=8;
    console.log(a);
}
//fun();

// function fun2(){
//     console.log("i am inside function 2");
//     function fun3(){
//         console.log("i am inside function 3");
//     }
//     console.log("ha ji bolo")

//     fun3()
// }

// fun2(); 


// Closure-----

let bankbalance=0;
function CSBFS(){
    
    return {
        deposite: function(amount){
            bankbalance += amount;
            console.log("your current amount is" + bankbalance)

        },
        
        withdrawl : function(amount){
            if(amount > bankbalance){
                console.log("insufficient amount");
                return;
            }
            bankbalance -+ amount;
            console.log("your remaining amount is " + bankbalance);
        }
    }
}

acc = new CSBFS(100);

acc.deposite(20);
acc.withdrawl(120);