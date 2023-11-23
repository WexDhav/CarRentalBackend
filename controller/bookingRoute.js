
const express = require("express");
const bookingSchema = require("../model/bookingSchema");
const bookingRoute = express.Router();

bookingRoute.post("/create-booking",(req,res)=>{
    bookingSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
bookingRoute.get("/:userId",(req,res)=>{
    const userId = req.params.userId;
    bookingSchema.find({userId:userId},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
bookingRoute.get("/",(req,res)=>{
    bookingSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = bookingRoute;