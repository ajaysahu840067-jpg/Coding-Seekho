// let name = "xyz"



// let arr = ["apple", "banana", "orange", "papaya"];
// arr[0] = arr[0] + 'a'
// console.log(arr);




// repeate
// *
// **
// ***
// ****
// *****
    //console.log("*".repeat(4))
    for(let i = 1; i < 6; i++){
       // console.log("*".repeat(0));
    }

//to uppercase() // touppercase()  ::: they do not change 
{
 let name = "Coding Seekho"; 
 //console.log(name);
 //console.log(name.toLowerCase());
 // console.log(name);
  name = name.toUpperCase();
 //console.log(name);
}


// trim :: string ke starting (left) aur ending (right) ke extra spaces ko remove karta hai.
{  
 let name = "    Coding Seekho    ";
//  console.log(name.trim().repeat(2))
//  name = name.trim()
//  console.log(name.repeat(2))
}


// replace -->> :: ka use string ke kisi specific part ko kisi dusre string se replace karne ke liye hota hai.

{
   let name = "Coding Seekho";
   //console.log(name.replace("Coding", "").trim());
   //console.log(name.replaceAll("Coding", "").trim());
   //console.log(name);


}


//slice || substring, substr ->>
{
    let name="Coding Seekho";
    //console.log(name.slice(1,7))
    //console.log(name.substring(1,7))

    // puri reverse
    // console.log(name.split("").reverse().join(""))

    // each word 
    let arr = name.split(" "); // ["Coding", "Seekho"]
    for(let i = 0; i < arr.length ; i++){
        arr[i] =  arr[i].split("").reverse().join("");
    }

    //starting character of each word should be capital
    for(let i = 0 ; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    name = arr.join(" ")
    // gnidoCohkeeS
    // Gnidoc Ohkees 
    // console.log(name);

    

}



// concat :: addition of two string
{
    let first = "Coding";
    let last = "Seekho";
    first = first.concat(" ",last);
   // console.log(first.match("CoDing"));
}



// padStart :: add padding
    let age = "26";
    //console.log(age.padStart(5))


// number to string
// string to number
{
     let a = 55.5;
    let b = String(a);
  //  console.log(typeof b);
  //  console.log(b);

   let c = parseInt("442a",10);
//    console.log(typeof c);
//    console.log(c);
}


