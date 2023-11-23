
const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    "userId": { type: mongoose.Schema.Types.ObjectId},
    "carId": { type: mongoose.Schema.Types.ObjectId},
    "pickupDate": {type:Date},
    "rentDays": {type:Number},
    "location": {type:String},
    "totalCost": {type:Number}
},{
    collection:"bookings"
})

module.exports = mongoose.model("bookingSchema",bookingSchema);