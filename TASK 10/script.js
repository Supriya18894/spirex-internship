window.onload = function() {
let count=0;
let display=document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let fiveBtn = document.getElementById("5");
function increase() {
    count++;
    display.innerText = count;
}

function decrease() {
    count--;
    display.innerText = count;
}

function reset() {
    count = 0;
    display.innerText = count;
}

function increaseFive() {
    count += 5;
    display.innerText = count;
}
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
fiveBtn.addEventListener("click", increaseFive);
};