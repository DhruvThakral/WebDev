// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(this.value);
//     p.innerText=this.value;
// })


let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input",function(){
    h2.innerText = this.value;
})