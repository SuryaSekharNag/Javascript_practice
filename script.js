// Arithmatic Operators

// let a = 7;
// let b = 3;

// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b); // modulus use for remainder 
//console.log("a ** b = ",a ** b); // double  astric use for power values

// unary operator

/*let a = 7;
let b = 3;

console.log("a = ",a,"& b =",b);
a++;
console.log("a++ =",a);
b--;
console.log("b-- =",b);*/


// Assignment Operator

/*let a = 10;
let b = 5;

a += 4;
console.log("a =",a);

b -= 2;
console.log("b =",b);*/



//Comparison Operators

/*let a = 5;
let b = "5";

console.log("a == b",a == b);
console.log("a != b",a != b);
console.log("a === b",a === b); // === strict version of equals to
console.log("a !== b",a !== b); // === strict version of not equals to
console.log("a <= b",a <= b);
console.log("a >= b",a >= b);
console.log("a > b",a > b);
console.log("a < b",a < b);*/


// Logical Operators


/*let a = 10;
let b = 5;

let cond1 = a >b;
let cond2 = a ===b;

console.log("cond1 && cond2 =" ,cond1 && cond2);

let cond3 = a < b;
let cond4 = a === b;

console.log("cond3 && cond4 =" , cond3 && cond4);

console.log("cond3 || cond4 =", cond3 < cond4);

console.log("cond1 || cond2 =" , cond1 > cond2);
console.log("!(10<5)",(a < b));*/



// Conditional Statement


// using If Statement

/*let mode = "Dark";
let color;

if (mode == "Dark"){
    console.log("The color is Dark");
}

if (mode == "Light"){
    console.log("The color is Light");
}

let age = 18;
if(age >= 18){
    console.log("Eligible For Vote");
}

if(age < 18){
    console.log("Not Eligible For Vote");
}*/

// If Else

/*let num = 10;
if(num % 2 === 0){
    console.log("Number ",num,"is = Even");
} else{
    console.log("Number ",num,"is = Odd");
}*/


// else-if Statement

/*let mode = "Dark";
let color;

if(mode === "Dark"){
    color = "black";
}
else if(mode === "blue"){
    color = "blue";
}
else if(mode === "pink"){
    color ="pink";

}
else{
    color = "white";
}
console.log(color);*/


// Ternary Operators

/*let age = 22;

let result = age > 18 ? "Adult " : "not Adult";
console.log(result);*/

// MDN Docs

// Practice Questions


// I. Number Is Multiplied By 5 OR NOT

/*let num = prompt("Enter A Number");

if(num % 5 === 0){
    console.log(num , "Is Multiple of 5");
}
else{
    console.log(num , "Is Not Multiple of 5");
}*/


// II. Grading System 

let score = 100;

if(score >= 90 && score <=100){
    console.log(score,"Grade A");
} else if (score >= 70 && score <=89){
    console.log(score,"Grade B");
} else if(score >= 60 && score <=69){
    console.log(score,"Grade C");
} else if(score >= 50 && score <=59){
    console.log(score,"Grade D");
} else if(score >= 40 && score <=49){
    console.log(score,"Grade E");
}
if(score >= 30 && score <=39){
    console.log(score,"Grade F");
} 

