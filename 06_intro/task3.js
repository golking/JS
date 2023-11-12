let objects = [
    {name: "Василий" , surname: "Васильев"},
    {name: "Иван" , surname: "Иванов"},
    {name: "Иван" , surname: "Петров"}
]
function filter(objects, property, propertyName) {
    let result = []
    for (let object of objects) {
        if (object.hasOwnProperty(property) && object[property] === propertyName) {
            result.push(object)
        }
    }
    return result;
}

console.log(filter(objects, "name", "Иван"))
