const theme = document.getElementById("theme");
const clear = document.getElementById("clear");
const result = document.getElementById("result");
const expression = document.getElementById("expression");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equals");
const decimal = document.querySelector(".decimal");
const backspace = document.getElementById("backspace");

let first = "";
let op = "";
let second = "";
let reset = false;

theme.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

numbers.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (reset || result.textContent === "Error") {
            result.textContent = "0";
            reset = false;
        }

        if (result.textContent === "0") {
            result.textContent = btn.textContent;
        } else {
            result.textContent += btn.textContent;
        }
    });
});

operators.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (op !== "" && !reset) {
            calculate();
        }

        first = result.textContent;
        op = btn.textContent;
        expression.textContent = first + " " + op;
        reset = true;
    });
});

function calculate() {
    if (first === "" || op === "") {
        return;
    }

    second = result.textContent;

    let a = Number(first);
    let b = Number(second);
    let answer;

    if (op === "+") {
        answer = a + b;
    } else if (op === "−") {
        answer = a - b;
    } else if (op === "×") {
        answer = a * b;
    } else if (op === "÷") {
        answer = b === 0 ? "Error" : a / b;
    }

    expression.textContent = first + " " + op + " " + second + " =";
    result.textContent = answer;

    first = "";
    second = "";
    op = "";
    reset = true;
}

equal.addEventListener("click", calculate);

clear.addEventListener("click", function() {
    result.textContent = "0";
    expression.textContent = "";
    first = "";
    second = "";
    op = "";
    reset = false;
});

decimal.addEventListener("click", function() {
    if (reset || result.textContent === "Error") {
        result.textContent = "0";
        reset = false;
    }

    if (!result.textContent.includes(".")) {
        result.textContent += ".";
    }
});

backspace.addEventListener("click", function() {
    if (reset || result.textContent === "Error") {
        return;
    }

    result.textContent = result.textContent.slice(0, -1);

    if (result.textContent === "" || result.textContent === "-") {
        result.textContent = "0";
    }
});