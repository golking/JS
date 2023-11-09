let n = 100;
let m = -5;
let count = 100;
let result = [];

let range = Math.abs(m - n);
let min = Math.min(n, m);

for (let i = 0; i < count; i++) {
    result.push(min + Math.round(Math.random() * range));
}

console.log(result)