const mongoose = require("mongoose");
const mongodb=require("mongodb")

mongoose.connect("mongodb+srv://mohit:LNOfIPta7WSxrNEE@cluster0.ievjznx.mongodb.net/class2")
 //class naam s bna dia h db apna humne
  .then(() => console.log("CONNECTION OPEN"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// ek ek kr ke run kro shi result dikhega terminal p
// CREATE  
User.create([
  { username: "mohit", age: 20 },
  { username: "rohit", age: 20 },
  { username: "sohit", age: 20 }
])
  .then((users) => {
    console.log("Users created:", users);
  })



// READ
User.findOne({username:"sohit"})
.then((result) => {  
  console.log(result);
})
// The User.find method returns a Mongoose Query object.So use .then to handle asynchronous nature of it.

// UPDATE
User.updateOne({ username: "mohit" }, { $set: { age: 21 } })
  .then((result) => {
    console.log("Update Result:", result);
})

// DELETE
User.deleteMany({ })
  .then((result) => {
    console.log("Delete Result:", result);
})

