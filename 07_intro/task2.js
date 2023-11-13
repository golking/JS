let studentObj = {
    name: "Игорь",
    age: 17
}

function createStudentCard(student) {
    div = document.createElement("div")
    h2 = document.createElement("h2")
    span = document.createElement("span")
    
    h2.textContent = student.name
    span.textContent = `Возраст: ${student.age} лет`

    div.append(h2)
    div.append(span)

    document.body.append(div)
}

createStudentCard(studentObj)