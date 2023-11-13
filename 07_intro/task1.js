function createStudentCard(name, age) {
    div = document.createElement("div")
    h2 = document.createElement("h2")
    span = document.createElement("span")
    
    h2.textContent = name
    span.textContent = `Возраст: ${age} лет`

    div.append(h2)
    div.append(span)

    document.body.append(div)
}

createStudentCard("Игорь", 17)