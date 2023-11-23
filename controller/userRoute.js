
const express = require("express");
const userSchema = require("../model/userSchema");
const userRoute = express.Router();

userRoute.post("/create-user",(req,res)=>{
    userSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
userRoute.get("/",(req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

userRoute.get("/find-user/:id",(req,res)=>{
    userSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

userRoute.post("/login",(req,res)=>{
    const {email,password} = req.body;
    userSchema.findOne({email:email},(err,data)=>{
        if(err)
            return err;

        if(data != null) {
            if(data.password === password){
                res.json(data);
            }else{
                return res.status(401).json({ error: "Incorrect password" });
            }
        }else
            return res.status(404).json({ error: "User not found" });
    })
})

userRoute.route("/update-user/:id")
.get((req,res)=>{
    userSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    userSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data) => {
            if(err)
                return err;
            else
                res.json(data);
        })
})

userRoute.delete("/delete-user/:id",(req,res)=>{
    userSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = userRoute;