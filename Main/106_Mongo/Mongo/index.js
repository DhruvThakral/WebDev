const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});


const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name:"Adam",
//     email:"adam@gmail.com",
//     age:48
// });

// user1.save();


// const user2 = new User({
//     name:"Bob",
//     email:"bob@gmail.com",
//     age:48
// });

// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:34},
//     {name:"Sony",email:"sony@gmail.com",age:77},
//     {name:"Mony",email:"mony@gmail.com",age:44},
// ])
// .then((res)=>{
//     console.log(res);
// });


// User.find({age:{$gte:47}})
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.findOne({age:{$gte:47}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findById("6770e53c39d725e87dc4fbef")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.updateOne({name:"Adam"},{age:46})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.updateMany({age:{$gt:48}},{age:100})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.findOneAndUpdate({name:"Tony"} , {age:110}, {new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.deleteOne({name:"Sony"}).then((res)=>{
//     console.log(res);
// });


User.findByIdAndDelete("6770e53c39d725e87dc4fbee").then((res)=>{
    console.log(res);
});