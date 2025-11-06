// Chapter 3 (Loops & Strings)

// for loop

/* for(let i = 1 ; i <= 5; i++){
    console.log("Surya");
}

let sum = 0;
for(let i = 0 ; i <= 5 ; i ++){
    sum = sum+1;
}
     console.log("Sum Is",sum);
     console.log("Session Timed Out");*/


     
// Infinite Loop

// Dont try in system

//while loop

/*let i = 1;
while(i <= 5){
    console.log("Surya");
    i++;
}*/

// do while loop

/*let i = 1;
do{
    console.log("I'm The Gangstar");
    i++;
}while(i <= 5);*/


// for of loop

/*let str = "Surya";
for(let i of str){
    console.log("i =", i)
}*/

/*let str = "Surya";
let size = 0;
for(let i of str){
    console.log("i =",i);
    size ++;
}
    console.log("String Size",size);*/

// for in loop

/*let student ={
    name : "Surya",
    age  : 22,
    cgpa : 8.34,
    isPass : true,
};

for(let key in student){
    console.log("key =",key,"value =", student[key]);
}*/


//Practice Question

// i

/*for(let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log("Num =",num);
    }
}*/

// ii


/*let gameNum = 25;
let userNum = prompt("Guess The Game Nuber : ");

while(userNum != gameNum){
    userNum = prompt("You Entered Wrong Number");
}

    console.log("You Guess Right Number");
*/


// Strings


// Template Laterals

/*let obj = {
    item : "pen",
    price : 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees` ;
console.log(output);

*/

// String Methods


//let str = "Hello Ji";
//console.log(str.replace("H","Y"))
//console.log(str.slice(1,3));
//console.log(str.trim());

//let str1 = "Hello";
//let str2 = "Ji";
//let res = str1.concat(str2);
//console.log(res);

//str = str.toUpperCase();
//console.log(str);


//let str = "I Love Me" ;
//str = str.replace("I","S")

//console.log(str.charAt(2));



// Practice Question

// i 


let fullName = prompt("Enter Your Full Name Without Spaces :");
let username = "@" + fullName + fullName.length;
console.log(username);
