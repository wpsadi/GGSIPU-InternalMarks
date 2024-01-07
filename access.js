const fs = require("fs");
const path = require("path");

const dataAddress = path.format({
    dir : path.join(__dirname,"file-handling"),
    base : "RESULT.txt"
});



const data = (fs.readFileSync(dataAddress).toString());
let jsonData = JSON.parse(data);

function askData(enrol){
    if (jsonData[enrol] == undefined){
        let obj = {
            response : "NotFound",
            result : undefined
        }
        return obj;
    }
    else{
        let obj = {
            response : "found",
            result : jsonData[enrol]
        }
        return obj;

    }
}

module.exports = {askData}