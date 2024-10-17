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



// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="yellow";
// };

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);




// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("Key: ",event.key);
//     console.log("Code: ",event.code);
//     console.log("Key was pressed");
// });

// inp.addEventListener("keydown",function(event){
//     console.log("code: ",event.code);
//     if(event.code == "KeyU"){
//         console.log("Character moves Up");
//     }
//     else if(event.code == "KeyD"){
//         console.log("Character moves Down");
//     }
//     else if(event.code == "KeyL"){
//         console.log("Character moves Left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("Character moves Right");
//     }
// })




// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// });


// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });





let from = document.querySelector("form");

from.addEventListener("submit",function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value: ",this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value: ",this.value);
});