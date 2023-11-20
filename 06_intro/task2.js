let allUsers = [
    {name: "Валя", age: 11},
i
]

function getOlderUserArray(users) {
    users.sort(function(a, b){return b.age - a.age});
    return users[0].name;
}

console.log(getOlderUserArray(allUsers));