let objects = [
    {name: "Василий" , surname: "Васильев"},
    {name: "Иван" , surname: "Иванов"},
    {name: "Иван" , surname: "Петров"}
]
function filter(objects, property, propertyName) {
    return objects.filter(function(el) {return el[property]===propertyName});
}

console.log(filter(objects, "name", "Иван"))
