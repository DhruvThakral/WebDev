const express = require("express");

const app = express();

let port = 8080;

app.listen(port , ()=>{
    console.log(`app listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("rquest received");

//     // res.send("Hello!");

//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li> </ul>";

//     res.send(code);
// });



app.get("/",(req,res)=>{
    res.send("You contacted root path.");
});

// app.get("/apple", (req,res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/orange", (req,res)=>{
//     res.send("You contacted orange path.");
// });

// app.get("*", (req,res)=>{
//     res.send("This path does not exist.");
// });

// app.post("/", (req,res)=>{
//     res.send("You sent a post request to root");
// })


// app.get("/:username/:id", (req,res) => {
//     let {username , id} = req.params;
//     // res.send(`This account belongs to @${username}`);

//     let htmlStr = `<h1> Welcome to the page of ${username}!`;

//     res.send(htmlStr);
// });


app.get("/search", (req,res)=>{
    let { q } = req.query;

    if(!q){
        res.send("<h1>Nothing searched </h1>");
    }
    res.send(`<h1>Search results for : ${q} </h1>`);
});