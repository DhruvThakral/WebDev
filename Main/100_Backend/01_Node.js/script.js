// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("Hello Dhruv",i);
// }

// console.log("Bye!");



// let args = process.argv;

// for (let i=2; i<args.length; i++){
//     console.log("Hello to ",args[i]);
// }

// console.log("Bye!");


// const math = require("./math");

// console.log(math);
// console.log(math.sum(45,29));
// console.log(math.mul(34,23));
// console.log("Value of PI: ",math.PI);
// console.log("Value of g: ",math.g);



// const info = require("./Fruits");
// console.log(info);
// console.log(info[0].name);




import {sum, PI} from "./math.js";

console.log("Sum: ",sum(1,2));


import {generate} from "random-words";
console.log(generate());