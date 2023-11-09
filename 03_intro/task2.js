userName = "иВаН";
userSurname = "ИваНов";

name_first = userName.substring(0, 1).toUpperCase();
name_others = userName.substring(1).toLowerCase();

surname_first = userSurname.substring(0, 1).toUpperCase();
surname_others = userSurname.substring(1).toLowerCase();

console.log(name_first + name_others, surname_first + surname_others);

if (name_first + name_others === userName && surname_first + surname_others === userSurname) {
    console.log("Имя осталось без изменений");
}
else {
    console.log("Имя было преобразовано")
}