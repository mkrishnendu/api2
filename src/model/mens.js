const express=require("express");
const mongoose  = require("mongoose");
const validator=require("validator");

const menSchema=new mongoose.Schema({

ranking:{
    type:Number,
    require:true,
    // unique:true,


},
name:{
    type:String,
    require:true,
    trim:true

},
dob:{
    type:String,
    require:true,
    trim:true

},
country:{
    type:String,
    require:true,
    trim:true

},
score:{
    type:String,
    require:true,
    trim:true

},
event:{
    type:String,
   default:100,
    trim:true

}



})

const MensRanking=new mongoose.model("MensRanking",menSchema)

module.exports=MensRanking;