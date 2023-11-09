function getAge(bith_year) {
    let current_year = new Date().getFullYear();
    return current_year - bith_year;
}
console.log(getAge(1991))