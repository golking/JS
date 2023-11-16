let wList = ["ex1@mail.ru", "ex_2@list.ru", "ex-3@day.ru"];
let bList = ["ex_2@list.ru"];

function filter(whiteList, blackList) {
    result = whiteList.filter( function(el) {
        return !blackList.includes(el);
      } )
    return result;
}

console.log(filter(wList, bList));