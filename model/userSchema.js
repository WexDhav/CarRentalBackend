
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "username": {type:String},
    "password": {type:String},
    "email": {type:String},
    "phone": {type:String}
},{
    collection:"users"
})

module.exports = mongoose.model("userSchema",userSchema);