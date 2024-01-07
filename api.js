const express = require("express");
const cors = require("cors");
const {askData} = require("./access");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/record/",async function(req,res){
    let url = req.url;
    let arr = url.split("/");
    let enrol = arr[arr.length-1];

    res.send(askData(enrol));
}) 

app.use("/",function(req,res){
    res.send(`use this address: /record/{enrollment-Number}`);
})

let port = 8000;
app.listen(port,function(){
    console.log(`server running at localport:${port}`);
})