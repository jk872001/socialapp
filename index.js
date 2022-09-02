const express=require("express");
const app=express();
var format = require('date-format');

const PORT= 4000 || process.env.PORT;

app.get("/",(req,res)=>
{
   res.status(200).send("<h1>Hello World</h1>")
})

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial={
        username:"kumarjitesh_2514",
        followers: 170,
        follows:100,
        date:format.asString('hh:mm:ss', new Date()),
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook",(req,res)=>{
    const faceSocial={
        username:"facejitesh_2514",
        followers: 170,
        follows:100,
        date:format.asString('hh:mm:ss', new Date()),
    }
    res.status(200).json(faceSocial)
})

app.get("/api/v1/linkedin",(req,res)=>{
    const linkSocial={
        username:"linkjitesh_2514",
        followers: 170,
        follows:100,
        date:format.asString('hh:mm:ss', new Date()),
    }
    res.status(200).json(linkSocial)
})

app.get("/api/v1/:token",(req,res)=>
{
    res.status(200).json({"params":req.params.token});
})
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})