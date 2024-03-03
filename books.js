const mongoose = require('mongoose');

main().then((result) => {
    console.log("Connection successfully");
    console.log(result);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}