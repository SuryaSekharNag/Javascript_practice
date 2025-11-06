/*let parahs = document.getElementsByTagName("p");
console.dir(parahs);*/

// Practice

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "Kaya re tere baap ka naukar nahi hun";      

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     divs.innertext=`"new unique value ${idx}`;
//     idx++;
// }

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (let div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color ="white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);







