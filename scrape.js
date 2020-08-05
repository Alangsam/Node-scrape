const fs = require("fs");
const request = require("request");
const { getComponents, getValues } = require("./regex");

// request(
//     "https://spreadsheets.google.com/feeds/list/1KGPDThGon6pDzDoaxrBAW_Dru4ZomAZe_FwPWgF7QwQ/od6/public/values?alt=json",
//     (error, response, body) => {
//         //const data = JSON.parse(body);
//         console.log("body:", body[1]);

//         fs.writeFileSync("companies/one.json", data);
//     }
// );

// const basicFile = String(fs.readFileSync("companies/one.json"));
// const newArr = getComponents(basicFile);
// console.log([newArr]);

// fs.writeFileSync("one.json", String([newArr]));
// const newArrs = String(fs.readFileSync("one.json"));
// console.log(getValues(newArrs));
// fs.writeFileSync("letsSee.js", JSON.stringify(getValues(newArrs)));
const newArrs = String(fs.readFileSync("letsSee.js"));
console.log(JSON.parse(newArrs)[0]);
let copyTheArr = JSON.parse(newArrs);
let theArr = [];
do {
    theArr.push(copyTheArr.splice(0, 5));
} while (copyTheArr.length > 0);
console.log(theArr);
fs.writeFileSync("./companies/one.js", JSON.stringify(theArr));
