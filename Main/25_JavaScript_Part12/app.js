// async function greet(){
//     // throw "ERROR 404 : User not found!";
//     return "Hello World!";
// }

// greet()
// .then((result) => {
//     console.log("Promise : Resolved");
//     console.log("Result: ",result);
// })

// .catch((error) => {
//     console.log("Promise : Rejected with ",error);
// });

// let demo = async() => {
//     return 5;
// }


// function getNum() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }

// async function demo2(){
//     await getNum();
//     await getNum();
//     await getNum();
//             getNum();
// }


function changeColor(color){
    return new Promise((resolve,reject)=>{
        let h1 = document.querySelector("h1");
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 5)+1;
            if(num < 3){
                reject("Promise : Rejected");
            }
            h1.style.color=color;
            resolve("Promise : Accepted");
            console.log("Color changes to ",color);
        },1000)
    })
}

async function demo(){
    try {
    await changeColor("red");
    await changeColor("yellow");
    await changeColor("blue");
    await changeColor("pink");
    await changeColor("purple");
    }
    catch(err){
        console.log("Error : ",err);
    }

    let a = 5;
    console.log("Number: ",a+3)
}

demo();