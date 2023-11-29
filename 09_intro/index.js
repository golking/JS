const game = document.querySelector('.game');
let res = document.querySelector('.res');
const btnGame = document.querySelector('.new-game');
const fields = document.querySelectorAll('.field');
let stepcross = true;
let number = 16;
let curOpened = []

game.addEventListener('click', init);
btnGame.addEventListener('click', newGame);

function openField(target) {
    target.classList.replace('closed', 'opened');
}

function init(e) {
    const curField = e.target.closest('.field');
    openField(curField);
    curOpened.push(curField);
    update();
    win();
}

function win() {
    if (Array.from(fields).every(el => el.classList.contains('opened'))){
        res.innerHTML = 'Вы выиграли';
    }
}
function update() {
    if (curOpened.length >= 2) {
        if (curOpened[0].textContent === curOpened[1].textContent) {
            curOpened = [];
        }
        else {
            temp = curOpened.slice(0);
            setTimeout(() => {temp.forEach(el => {
                el.classList.replace('opened', 'closed');
                el.classList.replace('opened', 'closed');
            })}, 1000);
            curOpened = [];
        }
    }
}

function newGame() {
    res.innerHTML = ''
    curOpened = []
    array = []
    for (let i = 1; i <= number/2; i++) {
        array.push(i);
        array.push(i);
    }

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i=0; i <= fields.length - 1; i++) {
        fields[i].textContent = array[i];
        fields[i].classList.replace('opened', 'closed')
        fields[i].classList.add('closed');
    }
    setTimeout(() => {Array.from(fields).forEach(el => {
        el.classList.replace('opened', 'closed');
    })}, 3000);
}




