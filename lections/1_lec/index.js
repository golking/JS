const game = document.querySelector('.game');
const res = document.querySelector('.res');
const btnGame = document.querySelector('.new-game');
const fields = document.querySelectorAll('.field');
let stepcross = true;
let count = 0;

 const cross = `<svg class="cross">
 <line class="first" x1="15" y1 ="15" x2 = "105" y2 = "105" stroke="red" stroke-width="10"></line>
 <line class="second" x1="105" y1 ="15" x2 = "15" y2 = "105" stroke="red" stroke-width="10"></line>
</svg>`;
const circle = `<svg class="circle">
<circle r="45" cx="58" cy="58" stroke="blue" 
stroke-width = "10"fill="none"></circle>
</svg>`

game.addEventListener('click', init);
btnGame.addEventListener('click', newGame);
function doStep(target) {
    target.innerHTML = stepcross ? cross : circle;
    target.classList.add(stepcross ? 'x' : 'o');
}

function init(e) {
    const curField = e.target.closest('.field');
    if (!curField.classList.contains('x', 'o')) {
        doStep(e.target);
        stepcross = !stepcross;
        count++;
        win();
    }
}


function newGame() {
    res.innerHTML = '';
    stepcross = true;
    count = 0;
    Array.from(fields).forEach(el => {
        el.innerHTML = '';
        el.classList.remove('x', 'o', 'active')
    });
    game.addEventListener('click', init)
}

function win() {

    const comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < comb.length; i++) {
        const cur = comb[i];
        const curFields = [fields[cur[0]], fields[cur[1]], fields[cur[2]]];

        if (curFields.every(el => el.classList.contains('x'))) {
            res.innerHTML = 'Выиграли x';
            curFields.forEach(field => field.classList.add('active'));
            game.removeEventListener('click', init);
            break
        } 
        if (curFields.every(el => el.classList.contains('o'))) {
            res.innerHTML = 'Выиграли o';
            curFields.forEach(field => field.classList.add('active'));
            game.removeEventListener('click', init);
            break
        } 
        if (count === 9) {
            res.innerHTML = 'ничья';
            game.removeEventListener('click', init);
        }
    }
}
