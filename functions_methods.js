// Functions In JS

/*function myFunction(msg){
    // parameter -> input

    console.log(msg);
}
myFunction("Learning JS"); //arguments
*/

/*function sum(x,y){
    s=x+y;
    console.log(x);
    return s;
}*/


// Arrow Functions

/*function countVowels(str){
    let count = 0;
    for(let char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count ++;
        }
    }
    return count;
}*/

// for each

/*let nums = [20,55,10,30];

nums.forEach((num) => {
    console.log(num*num);
});*/

// for each loop in arrays

/*let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});*/

/*let arr = ["Pune","Mumbai","Delhi","Kolkata","Chennai","Bengaluru","Hydrabad"];
arr.forEach((val) => {
    console.log(val);
});*/

// Sum array methods
// 1. Map Methods[]

/*let nums = [67,52,39];
let newArr = nums.map((val) => {
    return val *2;
});
 console.log(newArr);

let calSquare = (num) =>{
    console.log(num * num);
};*/

// 2. Filter Methods

/*let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);*/


// 3. Reduce Methods

/*let arr = [5,6,2,1,101,3];

const output = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr; // ?  used for if statement
});
    console.log(output);*/


  
// Practice Questions
 // Q1

/*let marks = [97,98,74,85,98,98,94,93];
 let toppers = marks.filter((val) => {
    return val > 90;
 });

 console.log(toppers);*/


// Q2

/*let n = prompt("Enter a number :");

let arr = [];

for(let i = 1; i <= n; i++){
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
});

console.log("sum =", sum);

let fact = arr.reduce((res,curr) => {
    return res*curr;
});

console.log("factorial =", fact);*/