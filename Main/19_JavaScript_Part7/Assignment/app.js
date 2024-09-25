// const func = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum / arr.length);
// }

// let arr = [1,2,3,4,5];

// console.log(func(arr));



// const func = (n) => {
//     if(n%2==0){
//         console.log("Even");
//     }else{
//         console.log("Not Even");
//     }
// }

// let n = 56839;
// console.log(func(n));



const object = {
    message : "Hello World!",

    logMessage(){
        console.log(this.message);
    }
}

setTimeout(object.logMessage,6000);