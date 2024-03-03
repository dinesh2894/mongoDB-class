const mongoose = require('mongoose');

main().then((result) => {
    console.log("Connection successfully");
    console.log(result);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Schema validation

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

// Book model
const Book = mongoose.model("Book", bookSchema);

// create some example of book

const book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200
});

// save book1
book1.save().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});