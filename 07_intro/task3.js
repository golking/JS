let allStudents = [
    {name: "Валя" , age: 11},
    {name: "Таня" , age: 24},
    {name: "Рома" , age: 21},
    {name: "Надя" , age: 34},
    {name: "Антон" , age: 7}
]

function createStudentCard(students) {
    ul = document.createElement("ul")
    for (student of students) {
        li = document.createElement("li")
        h2 = document.createElement("h2")
        span = document.createElement("span")
        
        h2.textContent = student.name
        span.textContent = `Возраст: ${student.age} лет`

        li.append(h2)
        li.append(span)

        ul.append(li)
    }
    document.body.append(ul)
}

createStudentCard(allStudents)