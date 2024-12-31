const mongoose = require("mongoose");

const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Ram",
        to:"Shyam",
        msg:"When will be your exam of Maths?",
        created_at: new Date()
    },

    {
        from: "Gita",
        to:"Sita",
        msg:"Hello Sita, How are you? ",
        created_at: new Date()
    },

    {
        from: "Hema",
        to:"Tony",
        msg:"Happy New Year!",
        created_at: new Date()
    },

    {
        from: "Mohit",
        to:"Udu",
        msg:"Where are you now?",
        created_at: new Date()
    },

    {
        from: "Kannu",
        to:"Mendak",
        msg:"Currently, I am in Surat.",
        created_at: new Date()
    },

]


Chat.insertMany(allChats);

