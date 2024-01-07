const fs = require("fs");
const path = require("path");

const SortAddress = path.format({
    dir : path.join(__dirname,"sorting"),
    base : path.basename("sort","js")
});
const { jsonData,sort} = require(SortAddress);




const fileAddress = path.format({
    dir : __dirname,
    base : "RESULT.txt"
});

const dataAddress = path.format({
    dir : __dirname,
    base : "record.txt"
});



const data = (fs.readFileSync(dataAddress).toString());

x = jsonData(data);
x = sort(x);
// console.log(x)

fs.writeFileSync(fileAddress,JSON.stringify(x))