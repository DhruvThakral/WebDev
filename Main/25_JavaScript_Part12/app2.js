// let jsonResponse = '{"fact" : "Sun is a star." , "length" : 14}';

// let validResponse = JSON.parse(jsonResponse);
// console.log(validResponse.fact);

// let student = {
//     "name" : "Dhruv",
//     "marks" : 95 
// };
// let newResponse = JSON.stringify(student);
// console.log(newResponse);


let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err) => {
//     console.log("ERROR: ",err);
// })


// For getting 2 data -- Method chaining use

// fetch(url)

// .then((res)=>{
//     return res.json();
// })
// .then((data1)=>{
//     console.log("Data1 : ",data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data2: ",data2.fact);
// })

// .catch((err) => {
//     console.log("ERROR: ",err);
// })

async function getFact(){
    try{
    let res = await fetch(url);
    let data1 = await res.json();
    console.log("Data1: ",data1.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("Data2 : ",data2.fact);
    }
    catch(err){
        console.log("ERROR: ",err);
    }
    console.log("BYE");
}

getFact();