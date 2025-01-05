const express = require("express");
const app= express();

app.use((req,res,next)=>{
    console.log("Hi, I am a middleware");
    next();
});

app.get("/", (req,res)=>{
    res.send("This is root");
});

app.use( "/random" ,(req,res)=>{
    res.send("This is a random page.");
});

app.listen(8080, ()=>{
    console.log("server is listening to the port 8080");
});