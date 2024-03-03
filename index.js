const mongoose = require('mongoose');

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

User.find({}).then(res => {
    console.log(res)
});



User.updateOne({_id: "65e3433268470fed44d25bd1"}, {age: 20}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findById("65e3433268470fed44d25bd1").then((res) => {
    console.log(res);
})

// Create user
// user1 = new User({name: "adam", email: "adam@gmail.com", age: 28});
// user2 = new User({name: "Eve", email: "eve@gmail.com", age: 48});


// Save user
// user1.save().then(r => {
//     console.log(r);
// });
// user2.save().then(r => {
//     console.log(r);
// });

// Create many user at time
// User.insertMany([
//     {name: "abc", email: "abc@gmail.com", age: 14},
//     {name: "efg", email: "efg@gmail.com", age: 15},
//     {name: "xyz", email: "xyz@gmail.com", age: 16},
// ]).then((data) => {
//     console.log(data.length);
// });

