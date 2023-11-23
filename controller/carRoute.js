
const express = require("express");
const carSchema = require("../model/carSchema");
const carRoute = express.Router();

carRoute.post("/create-car",(req,res)=>{
    carSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/",(req,res)=>{
    carSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/find-car/:id",(req,res)=>{
    carSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/find-car-bycompany/:company",(req,res)=>{
    const company = req.params.company;
    carSchema.find({company:company},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/find-car-byprice/:price",(req,res)=>{
    const price = req.params.price;
    carSchema.find({price:price},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.get("/find-car-byseats/:seats",(req,res)=>{
    const seats = req.params.seats;
    carSchema.find({seats:seats},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

carRoute.route("/update-car/:id")
.get((req,res)=>{
    carSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    carSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data) => {
            if(err)
                return err;
            else
                res.json(data);
        })
})

carRoute.delete("/delete-car/:id",(req,res)=>{
    carSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = carRoute;