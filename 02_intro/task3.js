let n = 100;
let m = -5;

let range = Math.abs(m - n);
let min = Math.min(n, m);

random_number1 = min + Math.round(Math.random() * range);
random_number2 = Math.round(Math.random() * range);

console.log("первое:", random_number1);
console.log("второе:", random_number2);

console.log(">", random_number1 > random_number2);
console.log("<:", random_number1 < random_number2);
console.log("≥:", random_number1 >= random_number2);
console.log("≤:", random_number1 <= random_number2);
console.log("===:", random_number1 === random_number2);
console.log("≠:", random_number1 !== random_number2);