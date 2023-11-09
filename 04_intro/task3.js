let array = [5, 1, 3, 2, 7, 6, 4];
let n = 2;
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
        found = true;
        console.log("Индекс элемента =", i);
        break
    }
}

if (!found) {
    console.log("Такого элемента в массиве нет")
}