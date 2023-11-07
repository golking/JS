let a =  13.123456789;
let b = 2.123;
let n = 5

let a_fraction = Math.floor(a % 1 * Math.pow(10, n));
let b_fraction = Math.floor(b % 1 * Math.pow(10, n));

console.log("a:", a_fraction);
console.log("b:", b_fraction);

console.log(">", a_fraction > b_fraction);
console.log("<:", a_fraction < b_fraction);
console.log("≥:", a_fraction >= b_fraction);
console.log("≤:", a_fraction <= b_fraction);
console.log("===:", a_fraction === b_fraction);
console.log("≠:", a_fraction !== b_fraction);