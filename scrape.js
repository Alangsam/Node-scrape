const fs = require("fs");
const request = require("request");
const { getComponents, getValues } = require("./regex");

let theBody;
request(
    "https://spreadsheets.google.com/feeds/list/1KGPDThGon6pDzDoaxrBAW_Dru4ZomAZe_FwPWgF7QwQ/od6/public/values?alt=json",
    (error, response, body) => {
        const newArr = getComponents(body);
        const finalArr = getValues(String(newArr));
        let theArr = [];
        do {
            theArr.push(finalArr.splice(0, 5));
        } while (finalArr.length > 0);
        const firstCompany = theArr.splice(0, 12507);
        const secondCompany = theArr.splice(1, 12507);
        const thirdCompany = theArr.splice(2, 12507);
        const fourthCompany = theArr.splice(3, 12507);
        console.log(firstCompany);
        console.log(secondCompany);
        console.log(thirdCompany);
        console.log(fourthCompany);
        fs.writeFileSync("companies/one.json", JSON.stringify(firstCompany));
        fs.writeFileSync("companies/two.json", JSON.stringify(secondCompany));
        fs.writeFileSync("companies/three.json", JSON.stringify(thirdCompany));
        fs.writeFileSync("companies/four.json", JSON.stringify(fourthCompany));
        // theBody = JSON.parse(body);
        // console.log(finalArr);
        //console.log("body:", body);

        //fs.writeFileSync("companies/one.json", data);
    }
);

// const basicFile = String(fs.readFileSync("companies/one.json"));
// const newArr = getComponents(basicFile);
// console.log([newArr]);

// fs.writeFileSync("one.json", String([newArr]));
// const newArrs = String(fs.readFileSync("one.json"));
// console.log(getValues(newArrs));
// fs.writeFileSync("letsSee.js", JSON.stringify(getValues(newArrs)));

// const newArrs = String(fs.readFileSync("letsSee.js"));
// console.log(JSON.parse(newArrs)[0]);
// let copyTheArr = JSON.parse(newArrs);
// let theArr = [];
// do {
//     theArr.push(copyTheArr.splice(0, 5));
// } while (copyTheArr.length > 0);
// console.log(theArr);
// fs.writeFileSync("./companies/one.js", JSON.stringify(theArr));

//12507
