let allUsers = [
    {name: "Валя", age: 11},
    {name: "Таня", age: 70},
    {name: "Рома", age: 21},
    {name: "Надя", age: 34},
    {name: "Антон", age: 7},
]

function getOlderUserArray(users) {
    let tempAge = 0;
    let name = ""
    for (user of users) {
        if (user.age > tempAge) {
            tempAge = user.age;
            name = user.name;
        }
    }
    return name;
}

console.log(getOlderUserArray(allUsers));