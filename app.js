const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('body');
const hexColor = document.querySelector('.hexColor');

btn.addEventListener('click', theHex);

function theHex() {
    let hex = '#';
    for(let i = 0; i < 6; i++) {
        let randomHex = Math.floor(Math.random() * hexNum.length);
        hex += hexNum[randomHex];

    }
    color.style.backgroundColor = hex;
    hexColor.innerHTML = hex;
}