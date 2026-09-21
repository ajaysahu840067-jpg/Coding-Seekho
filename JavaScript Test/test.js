// Name- AJAY GUPTA          Batch- Zero to Hero Premium
// Date- 21/09/026           time- 5:00 to 6:30 PM


                     // (Answer no- 3)

// let sentence = "JavaScript makes web development interesting";

// let words = sentence.split(" ");

// let longest = words[0];

// for (let i = 1; i < words.length; i++) {

//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }

// console.log(longest);


//                      // (Answer no- 4)

// let str = "Java Script";

// str = str.toLowerCase();

// let frequency = {};

// for (let i = 0; i < str.length; i++) {

//     let ch = str[i];

//     if (ch === " ") {
//         continue;
//     }

//     if (frequency[ch] === undefined) {
//         frequency[ch] = 1;
//     } else {
//         frequency[ch]++;
//     }
// }

// console.log(frequency);   

//                //(Answer no: 5)

// let arr = [4, 2, 4, 5, 2, 7, 5, 8];

// let result = [];

// for (let i = 0; i < arr.length; i++) {

//     if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);


//                  // (Answer no:6)

// function missingNumber(arr) {
//     let n = arr.length + 1;
//     let total = n * (n + 1) / 2;

//     for (let x of arr) {
//         total -= x;
//     }

//     return total;
// }

// console.log(missingNumber([1, 2, 3, 5, 6]));


                // (Answer no: 7)

let student = {
    name: "Rahul",
    marks: [78, 85, 92, 67, 88]
};

function result(student) {
    let total = 0;

    for (let mark of student.marks) {
        total += mark;
    }

    let avg = total / student.marks.length;
    let grade;

    if (avg >= 90)
        grade = "A";
    else if (avg >= 75)
        grade = "B";
    else if (avg >= 60)
        grade = "C";
    else if (avg >= 40)
        grade = "D";
    else
        grade = "F";

    console.log("Name:", student.name);
    console.log("Total:", total);
    console.log("Average:", avg);
    console.log("Grade:", grade);
}

result(student);


                        //(Answer no:8)

function palindrome(str) {
    str = str.toLowerCase().replaceAll(" ", "");

    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    if (str == rev)
        return "Palindrome";
    else
        return "Not Palindrome";
}

console.log(palindrome("Madam"));
console.log(palindrome("nurses run"));


              (Answer no: 10)

const employees = [
    { name: "Amit", department: "IT", salary: 45000 },
    { name: "Neha", department: "HR", salary: 38000 },
    { name: "Raj", department: "IT", salary: 52000 },
    { name: "Priya", department: "Finance", salary: 48000 }
];

function department(arr, dept) {
    let total = 0;
    let names = [];
    let highest = null;

    for (let emp of arr) {

        if (emp.department == dept) {

            names.push(emp.name);
            total += emp.salary;

            if (highest == null || emp.salary > highest.salary) {
                highest = emp;
            }
        }
    }

    console.log("Employees:", names.join(", "));
    console.log("Total Salary:", total);
    console.log("Average Salary:", total / names.length);
    console.log("Highest Salary:", highest.name);
}

department(employees, "IT");