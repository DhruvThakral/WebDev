// let btns = document.querySelectorAll('button');

// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("Dhruv");
// }

// for(btn of btns){
//     btn.addEventListener("click", sayHello);
//         btn.addEventListener("click",sayName);

//     btn.addEventListener("dbclick", function() { console.log("You double clicked me !"); });
// }


// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("This is a parah.");
// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside the box.");
// });



let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor="yellow";
};

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);