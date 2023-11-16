arr1 = [2, 4, 5, 3, 1, 7, 10, 1, 100, 8];
arr2 = [2, 4, 5, 3, 1, 7, 10, 1, 100, 8];
function arrSort(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
        }
      }
      return array;
}

console.log(arrSort(arr1)) 
