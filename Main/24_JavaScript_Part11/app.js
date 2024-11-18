// Call Stack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();




// Callback Hell

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color= color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow",1000);
//         });
//     });
// });



// Promises

// function savetoDb(data, success, failure){
//     let internetConnection = Math.floor(Math.random()*10)+1;

//     if(internetConnection > 4){
//         console.log(data);
//         success();
//     }
//     else{
//         failure();
//     }
// }


// savetoDb("Hello, ", () => {
//     console.log("Sucess : Data is saved.");

//     savetoDb("Dhruv ", ()=>{
//         console.log("Sucess 2 : Data is saved.");

//         savetoDb(", How are you?", ()=>{
//             console.log("Sucess 3 : Data is saved.")},

//         () => {
//             console.log("Failure : Weak Connection data not saved.");
//         })
//     }, () => {
//         console.log("Failure 2 : Weak Connection data not saved.");
//     })
// },
// () => {
//     console.log("Failure 3 : Weak Connection. data not saved.");
// })


// function savetoDb(resolve , reject){
//     return new Promise((resolve , reject) => {
//         let internetConnection = Math.floor(Math.random()*10)+1;
//         if(internetConnection > 4){
//             resolve("Success : Data was saved.");
//         }else{
//             reject("Failure : Weak Connection, data not saved");
//         }
//     });
// }

// savetoDb("Hello World!").then(() => {
//     console.log("promise resolved.");
// })
// .catch(() => {
//     console.log("promise rejected.");
// });


// savetoDb("Hello World! ")

// .then ( (result) => {
//     console.log("Result: ",result);
//     console.log("data1 saved.");
//     return savetoDb("Welcome");
// })
// .then ( () => {
//     console.log("Result: ",result);
//     console.log("data2 saved.");
//     return savetoDb("Namaste");
// })
// .then ( () => {
//     console.log("Result: ",result);
//     console.log("data3 saved.");
// })

// .catch((error) => {
//     console.log("Error: ",error);
//     console.log("promise was rejected.");
// })


// Refactoring the old code

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed!");
        },delay);
    })
}

changeColor("red",1000)
.then(() => {
    console.log("red was changed.");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green was changed.");
    return changeColor("yellow",1000);
})
.then( ()=> {
    console.log("yellow was changed.");
})
