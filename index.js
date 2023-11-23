
const express = require("express");
const mongoose = require("mongoose");
const carRoute = require("./controller/carRoute");
const userRoute = require("./controller/userRoute");
const bookingRoute = require("./controller/bookingRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://admin:38CarRental@cluster0.ofduktj.mongodb.net/rentaldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/carRoute",carRoute);
app.use("/userRoute",userRoute);
app.use("/bookingRoute",bookingRoute);

app.listen(4000,()=>{
    console.log("Server connceted at 4000");
})