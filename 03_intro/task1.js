password = "1_dsfsdfsdf";
if (password.length >= 4 && (password.includes("-") || password.includes("_"))) {
    console.log("Пароль надёжный");
}
else {
    console.log("Пароль недостаточно надёжный");
}