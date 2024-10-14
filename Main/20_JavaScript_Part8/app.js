// let arr=[1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el);
// });

// let obj = [
//     {
//         name : "A",
//         marks : 94,
//     },
//     {
//         name : "B",
//         marks : 92,
//     },
//     {
//         name : "C",
//         marks : 99,
//     }
// ];

// obj.forEach((student) => {
//     console.log(student.name);
// })




// let num = [1,2,3,4,5];

// let newArr = num.map(function(el){
//     return el*2;
// });

// console.log(newArr);

// let obj = [
//     {
//         name : "A",
//         marks : 94,
//     },
//     {
//         name : "B",
//         marks : 92,
//     },
//     {
//         name : "C",
//         marks : 99,
//     }
// ];

// let gpa = obj.map((student)=>{
//     return student.marks/10;
// });

// console.log(gpa);


// let nums = [1,2,3,4,5,6,7,8,9,10];

// let newArr = nums.filter((el) => {
//     return (el % 2 == 0);
// });

// console.log(newArr);



// [1,2,3,4,5,6].every((el) => {
//     el % 2 == 0;
// })




// let finalVal = [1,2,3,4].reduce((res,el) => res+el );
// console.log(finalVal);


// let nums = [1,2,3,42,6,36,73,6,7,54,366,7];

// let finalVal = nums.reduce((max,el) => {
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// });

// console.log(finalVal);


// let nums = [10,20,30,40];

// let finalVal = nums.every((el) => el%10 == 0);
// console.log(finalVal); 


// let finalVal = nums.reduce((min,el) => {
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(finalVal);



// function sum(a,b=4) {
//     return a+b;
// }

// console.log(sum(1));


// let arr = [1,2,3,4,5,6,7];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// console.log(...odd , ...even);



// let data = {
//     email : "abc@gmail.com",
//     password : "abcd",
// };

// let dataCopy = {...data, id:"123456"};
// console.log(dataCopy);

// let arr = [1,2,3,4,5,6];
// let obj1 = {...arr};
// console.log(obj1);

// let obj2 = {..."hello"};
// console.log(obj2);




let names = ["tony", "bruce", "steve", "stark", "peter"];
let [winner,runnerup,...others] = names;
console.log(winner);
console.log(runnerup , others);