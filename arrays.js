// Chapter 4 : Arrays

/*let marks = [97 , 88 , 98, 84, 92];
console.log(marks);
console.log(marks.length);

let heroes = ["SRK" , " SALLU BHAI" , "RK" , "KHILADI"];
console.log(heroes);
*/

///let heroes = ["SRK" , "SALLU BHAI" , "RK" , "KHILADI"];


//for loop 

/*for(let i = 0 ; i < heroes.length; i++){
    console.log(heroes[i]);
}
*/

// for of

/*for(let hero of heroes){
    console.log(hero);
}*/


/*let marks = [85 , 97 , 44 , 37, 76, 60];

let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);
*/

//Practice Question 2




 /*for(let i=0; i<items.length; i++) // normal for loop
 {
     let offer= items[i] /10;
     items[i] -= offer;
 }
console.log(items);
*/

// Array Methods

let companies = ["Boomberg" , "Google" , "Uber" , "Microsoft" , "IBM"];
console.log(companies);

// shift

//companies.splice(2,1,"Uber","OLA");

companies.push("Netflix");