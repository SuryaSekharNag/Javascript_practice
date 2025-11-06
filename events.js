/*let btn1 = document.querySelector("#btn1");

btn1.onClick = () => {
    console.log("btn1 was clicked");
    let a = 20;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You Are Inside Div");
};*/

// PQ2 

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode="light";

modeBtn.addEventListener("click", ()=>{
 if(currmode === "light"){
    currmode ="dark";
    body.classList.add("dark");
    body.classList.remove("light");
 }else{
    currmode ="light";
    body.classList.add("light");
    body.classList.remove("dark");
 }
 console.log(currmode);
});
