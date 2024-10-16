let btns = document.querySelectorAll('button');

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Dhruv");
}

for(btn of btns){
    btn.addEventListener("click", sayHello);
        btn.addEventListener("click",sayName);

    btn.addEventListener("dbclick", function() { console.log("You double clicked me !"); });
}