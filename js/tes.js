const horizontal = require("./checkPosition");
// test case
const input1 = [
    ["x", "x", "x"],
    ["o", "o", "x"],
    ["x", "x", "o"]
];
console.log(horizontal(input1, "x"));
console.log(horizontal(input1, "o"));
console.log("");
// output : "x win"

const input2 = [
    ["o", "x", "o"],
    ["o", "x", "x"],
    ["o", "o", "x"]
];
console.log(horizontal(input2, "x"));
console.log(horizontal(input2, "o"));
console.log("");
// output : "o win"

const input3 = [
    ["x", "x", "o"],
    ["o", "o", "x"],
    ["o", "x", "o"]
];
console.log(horizontal(input3, "x"));
console.log(horizontal(input3, "o"));
console.log("");
// output : "o win"
