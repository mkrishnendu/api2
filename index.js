const express=require("express");
const app=express();
const port=process.env.port || 3003;

const router=require("./src/router/routing");

app.use(express.json());
require("./src/db/conn");
const MensRanking=require("./src/model/mens");


app.use(router);







app.listen(port,(err)=>{
    console.log("server is started..")
})