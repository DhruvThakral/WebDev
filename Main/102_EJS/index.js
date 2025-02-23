const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


app.set("views",path.join(__dirname,"/views"));

app.set("view engine", "ejs");


app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs",{diceVal});
})

// app.get("/ig/:username", (req,res)=>{
 
//     const followers = ["adam","bob","smith","alpha"];
//     let { username } = req.params;
//     res.render("instagram.ejs", { username , followers});
// })


app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");

    const data = instaData[username];
    console.log(data);

    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }

})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

