const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
  
}


const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    author : {
        type: String
    },
    price : {
        type:Number
    },
    discount : {
        type:Number,
        default:0
    }

});

const Book = mongoose.model("Book", bookSchema);

// let Book1 = new Book({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price:450
// });

// Book1.save()
// .then((res)=>{
//     console.log(res);
// })


let Book2 = new Book({
    title:"Mathematics X",
    author:"RD Sharma",
    price:500
});

Book2.save()
.then((res)=>{
    console.log(res);
})