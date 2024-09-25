function Hello(){
    console.log("Hello");
}

// Hello();


function printName(){
    console.log("Dhruv");
}

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

// print1to5();

function isAdult(){
    let age = 45;
    if(age >= 18){
        console.log("Adult");
    }else{
        console.log("Not an adult");
    }
}


// practice Ques 1
function printPoem(){
    console.log("Bla Bla....");
    console.log("Bla Bla....");
}

// printPoem();


// Practice Ques 2
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}

// rollDice();

// functions with arguments
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}

// printInfo("Aman",32);
// printInfo("Raman");


// Another Ques
function sum(a,b){
    console.log(a+b);
}

// sum(482 , 486);

// Average

function avg(a,b,c){
    console.log((a+b+c)/3);
}

// avg(1,2,3);

//Table

// let num = prompt("Enter the number: ");

function table(num){
    for(let i=1;i<=10;i++){
        console.log(num * i);
    }
}

// table(num);



// return statements

function sum2(a,b){
    return a+b;
}

let s = sum2(2,3);
// console.log(s);

function isAdult(age){
    if(age>=18){
        return "is Adult";
    }
    else{
        return "not an Adult";
    }

    console.log("Bye Bye.....");
}

// console.log(isAdult(54));


// Ques

function sumAll(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}

// console.log(sumAll(100));


// Ques

let arr = ["i","am","a","boy"];

function concat(arr){
    let s ="";
    for(let i=0;i<arr.length;i++){
        s += arr[i];
    }
    return s;
}

// console.log(concat(arr));



// Practie Ques

let greet = "Hello";        // Global Scope

function changeGreet(){
    let greet = "Namaste";  // Function Scope
    console.log(greet);     

    function innerGreet(){  // Lexical Scope
        console.log(greet);
    }

    innerGreet();
}


// console.log(greet);
// changeGreet();



// Function Expression

let hello = function(){
    console.log("Hello");
}

// hello();

hello = function(){
    console.log("Namaste");
}

// hello();



// Higher Order function

function multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet2 = function() {
    console.log("Hello");
}

// multipleGreet(greet2, 10);


function oddOrEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}

let request = "odd";
let func = oddOrEvenTest(request);
// func(3);


// Methods

const calculator = {
    add : function(a,b){
        return a+b;
    },

    sub : function(a,b){
        return a-b;
    },

    mul : function(a,b){
        return a*b;
    }
};

const calc1 = {
    add(a,b) {
        return a+b;
    },

    sub(a,b) {
        return a-b;
    }
}

console.log(calc1.add(4,6));