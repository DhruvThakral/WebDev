// // function getAvg(){
// //     console.log(this);
// // }


// const student = {
//     name : "Raman",
//     age : 20,
//     eng : 95,
//     maths : 93,
//     phy : 97,
//     getAvg(){
//         let avg = (this.eng+this.maths+this.phy)/3;
//         console.log(avg);
//     }
// }


// // try catch

// console.log("Hello1");
// console.log("Hello1");

// try{
//     console.log(a);
// }catch(error){
//     console.log("Variable a does not exist.......");
//     console.log("Error was: ",error);
// }

// console.log("Hello2");
// console.log("Hello2");



// // Arrow Function

// const sum = (a,b) => {
//     console.log(a+b);
// };

// // console.log(sum(2,3));

// const pow = (a,b) => {
//     return a**b;
// };

// const hello = () => {
//     console.log("Hello");
// };


// const mul = (a,b) => (a * b);




// console.log("Hello Everyone!");

// setTimeout( () => {
//     console.log("My Class");
// } , 4000 );

// console.log("Welcome to ");



// let id1  = setInterval(() => {
//     console.log("Hello");
// } , 2000);

// clearInterval(id1);

// let id2 = setInterval(() => {
//     console.log("Namaste");
// }, 3000);

// clearInterval(id2);


// const Student = {
//     name : "Raman",
//     marks : 95,
//     prop : this,        // Window Object
    
//     getName : function() {
//         console.log(this);      // Student Object
//         return this.name;
//     },

//     getMarks : () => {
//         console.log(this);      // Parent's scope : Window Object
//         return this.marks;
//     },

//     getInfo1 : function() {
//         setTimeout(() => {
//             console.log(this);
//         },2000);
//     },

//     getInfo2 : function() {
//         setTimeout(function() {
//             console.log(this);
//         },2000);
//     }

// }


let id = setInterval(() => {
    console.log("Hello");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran...");
},10000);