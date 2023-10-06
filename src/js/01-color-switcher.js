const ButtomStart = document.querySelector('[data-start]');
const ButtomStop = document.querySelector('[data-stop]');
const body = document.body;
let Changebody = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function colorchange() {
    body.style.backgroundColor = getRandomHexColor();
}

ButtomStart.addEventListener('click', () => {
colorchange();
Changebody = setInterval(colorchange, 1000);
ButtomStart.disabled = true;
ButtomStop.disabled = false;
});



ButtomStop.addEventListener('click', () => {
    clearInterval(Changebody);
    ButtomStart.disabled = false;
    ButtomStop.disabled = true;
    });

    