document.addEventListener('DOMContentLoaded', () => {
    pageApp();
})

function pageApp() {
    const body = document.body;
    let students =[];


    const inputDisplay = document.createElement('div');
    const outputDisplay = document.createElement('div')

    const nameDescription = document.createElement('p');
    const surnameDescription = document.createElement('p');
    const patronymicDescription = document.createElement('p');
    const BirthDateDescription = document.createElement('p');
    const LearningBeginDescription= document.createElement('p');
    const facultyDescription = document.createElement('p');

    const nameInput = document.createElement('input');
    const surnameInput = document.createElement('input');
    const patronymicInput = document.createElement('input');
    const birthDateInput = document.createElement('input');
    const learningBeginInput = document.createElement('input');
    const facultyInput= document.createElement('input');

    const submitButton = document.createElement('button');
    nameInput.type = 'name';
    surnameInput.type = 'name';
    patronymicInput.type = 'name';
    birthDateInput.type = 'date';
    learningBeginInput.type = 'date';
    facultyInput.type = 'name';

    nameDescription.textContent = 'Введите имя студента';
    surnameDescription.textContent = 'Введите фамилию студента';
    patronymicDescription.textContent = 'Введите отчество студента';
    BirthDateDescription.textContent = 'Введите дату рождения студента';
    LearningBeginDescription.textContent = 'Введите год начала обучения студента';
    facultyDescription.textContent = 'Введите название факультета студента, без "-" и прочих спецсимволов';

    nameInput.placeholder = 'Введите имя студента';
    surnameInput.placeholder = 'Введите фамилию студента';
    patronymicInput.placeholder = 'Введите отчество студента';
    facultyInput.placeholder = 'Введите название факультета студента';

    submitButton.textContent = 'Добавить студента в список';
    
    inputDisplay.append(nameDescription);
    inputDisplay.append(nameInput);
    inputDisplay.append(surnameDescription);
    inputDisplay.append(surnameInput);  
    inputDisplay.append(patronymicDescription);
    inputDisplay.append(patronymicInput);
    inputDisplay.append(BirthDateDescription);
    inputDisplay.append(birthDateInput);   
    inputDisplay.append(LearningBeginDescription);
    inputDisplay.append(learningBeginInput);  
    inputDisplay.append(facultyDescription);
    inputDisplay.append(facultyInput);  
    inputDisplay.append(submitButton);
    
    const outputFilter = document.createElement('div');
    const table = document.createElement('div');
    const filterTitle = document.createElement('h3');

    const filterFullName = document.createElement('button');
    const filterFaculty = document.createElement('button');
    const filterAge = document.createElement('button');
    const filterLearning = document.createElement('button');
    const learningBegin = document.createElement('input');


    outputFilter.classList.add('output-filter');

    filterTitle.classList.add('filter-title');

    filterFullName.classList.add('filter');
    filterFaculty.classList.add('filter');
    filterAge.classList.add('filter');
    filterLearning.classList.add('filter');
    learningBegin.classList.add('filter');

    birthDateInput.min="1900-01-01"
    birthDateInput.max="2023-12-31"
    learningBeginInput.min="2000-01-01" 
    learningBeginInput.max="2023-12-31"
    filterTitle.textContent = 'Фильтры'
    filterFullName.textContent = 'Имя'
    filterFaculty.textContent = 'факультет'
    filterAge.textContent = 'возраст и дата рождения'
    filterLearning.textContent = 'год начала и конца обучения'
    learningBegin.type = 'date';

    outputDisplay.append(filterTitle);

    outputFilter.append(filterFullName);
    outputFilter.append(filterFaculty);
    outputFilter.append(filterAge);
    outputFilter.append(filterLearning);
    outputFilter.append(learningBegin);

    outputDisplay.append(outputFilter);
    outputDisplay.append(table)

    body.append(inputDisplay);
    body.append(outputDisplay);
    if (students.length) {
        for(const student of students) {
            table.append(reDraw(student));
        }
    }
    
    filterLearning.addEventListener('click', () => {

        const yearToFilter = (new Date(learningBegin.value)).getFullYear();
        const studentsFilteredByStartYear = students.filter(student => {
        const startYear = new Date(student.learning_start).getFullYear();
        });
        table.innerHTML = '';
        for(const student of studentsFilteredByStartYear) {
            table.append(reDraw(student));
        }
    })

    filterAge.addEventListener('click', () => {
        students.sort((a, b) => new Date(a.birth) - new Date(b.birth));
        table.innerHTML = '';
        for(const student of students) {
            table.append(reDraw(student));
        }
    })

    filterFaculty.addEventListener('click', () => {
        students.sort((a, b) => a.faculty.localeCompare(b.faculty));
        table.innerHTML = '';
        for(const student of students) {
            table.append(reDraw(student));
        }
    })

    filterFullName.addEventListener('click', () => {
        students.sort((a, b) => b.full_name.localeCompare(a.full_name));
        table.innerHTML = '';
        for(const student of students) {
            table.append(reDraw(student));
        }
    })

    filterLearning.addEventListener('click', () => {
        students.sort((a, b) => b.learning_start.localeCompare(a.learning_start));
        table.innerHTML = '';
        for(const student of students) {
            table.append(reDraw(student));
        }
    })


    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim()
        const surname = surnameInput.value.trim()
        const patronymic = patronymicInput.value.trim()
        const birth_date = birthDateInput.value.trim()
        const learning_start = learningBeginInput.value.trim()
        const faculty_name = facultyInput.value.trim()

        if (!(isAlphabetic(name))) {
            alert("Введенное вами имя неправильно!")
            return;
        }

        if (!(isAlphabetic(surname))) {
            alert("Введенная вами фамилия неправильна!")
            return;
        }

        if (!(isAlphabetic(patronymic))) {
            alert("Введенное вами отчество неправильно!")
            return;
        }

        if (!(isAlphabetic(faculty_name))) {
            alert("Введенный вами факультет неправильный!")
            return;
        }

        students.push({
            full_name: [name, surname, patronymic].join(" "),
            faculty: faculty_name,
            birth: birth_date,
            learning_start: learning_start
        });
 
        table.innerHTML = '';
        for(const student of students) {
            table.append(reDraw(student));
        
        nameInput.value = '';
        surnameInput.value = '';
        patronymicInput.value = '';
        birthDateInput.value = '';
        learningBeginInput.value = '';
        facultyInput.value = '';
        }
    })
}

function reDraw(student) {
    const ul = document.createElement('ul');
    const fullName = document.createElement('li');
    const faculty = document.createElement('li');
    const studentAge = document.createElement('li');
    const Learning = document.createElement('li');
   
    ul.classList.add('element')

    const dob = new Date(student.birth);
    let now = new Date();
    let age = now.getFullYear() - dob.getFullYear();

    const start = new Date(student.learning_start);
    now = new Date();
    let end = now.getFullYear() - start.getFullYear();

    fullName.classList.add('field');
    faculty.classList.add('field');
    studentAge.classList.add('field');
    Learning.classList.add('field');

    fullName.textContent = student.full_name;
    studentAge.textContent = `${student.birth} | ${age} лет`
    faculty.textContent = student.faculty;
    Learning.textContent = `${start.getFullYear()} - ${ end < 4 ? start.getFullYear() + 4 : "Закончил"}`

    ul.append(fullName);
    ul.append(faculty);
    ul.append(studentAge);
    ul.append(Learning);
    return ul;
}

function isAlphabetic(input) {
    return /^[a-zA-Zа-яА-Я]+$/.test(input);
  }