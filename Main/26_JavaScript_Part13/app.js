let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//     }
//     catch(e){
//         console.log("Error: ",e);
//     }
// }

// getFacts();





// let btn = document.querySelector("button");
// let p = document.querySelector("#result");

// btn.addEventListener("click",async ()=>{
//     let fact = await getFact();
//     // console.log(fact);
//     p.innerText=fact;
// })

// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact ;
//     }catch(e){
//         console.log("Error: ",e);
//         return "No fact found";
//     }
// }



// Dog API

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     let link = await  getImage();
//     let img = document.querySelector("#dog");
//     img.setAttribute("src",link);
//     console.log(link);
// })

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("Error: ",e);
//         return "No image found";
//     }
// }


// Using headers

// let url3 = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     const config = {headers: {Accept:"application/json"}};
//     try{
//     let res = await axios.get(url3,config);
//     console.log(res.data);
//     }
//     catch(e){
//     console.log("Error: ",e);
//     }
// }

// getJokes();



// Updating Query Strings

let url4 = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country)
    let collArr = await getColleges(country);
    show(collArr);
})

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url4 + country);
        return res.data;
    }
    catch(e){
        console.log("Error: ",e);
        return [];
    }
}

