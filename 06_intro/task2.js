let allUsers = [
    {name: "Валя", age: 11},
    {name: "Таня", age: 70},
    {name: "Рома", age: 21},
    {name: "Надя", age: 34},
    {name: "Антон", age: 7},
]

function getOlderUserArray(users) {
    users.sort(function(a, b){return b.age - a.age});
    return users[0].name;
}

console.log(getOlderUserArray(allUsers));