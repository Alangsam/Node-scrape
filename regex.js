module.exports = {
    getComponents(file) {
        return file.match(/(?<="gsx\$date":).*?(?=},{"id")/gm);
    },
    getValues(file) {
        return file.match(/(?<=:").*?(?=")/gm);
    },
};
//   "title":{"type":"text","$t":"3/3/14"},"content":{"type":"text","$t":"time: 29:59.7, priceatexecution: 102.6, shares: 58, if1sell0buy: Sell"}
