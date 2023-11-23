
const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    "company": {type:String},
    "model": {type:String},
    "seats": {type:Number},
    "price": {type:Number},
    "image": {type:String}
},{
    collection:"cars"
})

module.exports = mongoose.model("carSchema",carSchema);