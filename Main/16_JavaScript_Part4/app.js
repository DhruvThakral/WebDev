// for loop

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }


// odd numbers

// console.log("Odd numbers");

// for(let i=1; i<=15; i = i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i = 15; i>=1; i=i-2){
//     console.log(i);
// }

// Even Numbers

// console.log("Even Numbers");

// for(let i=0;i<=16;i+=2){
//     console.log(i);
// }

// Infinite Loop
// for(let i=1; ; i++){
//     console.log(i);
// }


// Tabel of 5

// for(let i=0;i<=10;i++){
//     console.log("5 X "+i+" = "+ 5*i);
// }


// for(let i = 4; i<=40; i = i+4){
//     console.log(i);
// }

// let n = prompt("Enter the number : ");

// n = parseInt(n);

// for(let i=n; i<=n*10; i = i+n){
//     console.log(i);
// }



// Nested Loops

// for(let i=1;i<=3;i++){
//     console.log(`Outer Loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// While Loop

// let i = 1;
// while(i<=20){
//     console.log(i);
//     i++;
// }



// Favourite Movie

// const favMovie = "avatar";

// let guess = prompt("Enter my favourite movie : ");

// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You Quit!");
//         break;
//     }
//     guess = prompt("Wrong guess. Please Try again :");

// }

// if(guess == favMovie){
//     console.log("Congrats! You guessed it right.");
// }



// Break keyword

// let i = 1;

// while(i<=10){
//     if(i==6){
//         console.log("We are using break at i = 6");
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["apple","mango","litchi","orange","pineapple"];

// for(let i = 0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }


// Nested Loops with Nested Arrays

// let heros = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ];

// for(let i=0 ;i<heros.length;i++){
//     console.log(i,heros[i]);
//     for(let j = 0; j<heros[i].length; j++){
//         console.log(j,heros[i][j]);
//     }
// }


// let students = [["Aman",92.8] , ["Ravi",95] , ["Aayush",100]];

// for(let i = 0; i<students.length;i++){
//     console.log(`Info of Student #${i+1}`);
//     for(let j=0; j<students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }


// for of loop

// let fruits = ["mango", "apple", "orange", "litchi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for (char of "dhruvthakral"){
//     console.log(char);
// }

// Nested for of loop
let heroes = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}