const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');


main().then((result) => {
    console.log("Connection successfully");
    console.log(result);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// TODO: user Schema define
const userSchema = new mongoose.Schema({
    name: String, email: String, age: Number
});

// TODO: User Model
const User = mongoose.model('User', userSchema);


