
let buttons = document.querySelectorAll(".game");

let userMove = document.getElementById("user-move");
let botMove = document.getElementById("bot-move");

let userScore = document.getElementById("user-score");
let botScore = document.getElementById("bot-score");

let result = document.getElementById("result");
let again = document.getElementById("again");

let user = 0;
let bot = 0;

let choices = ["ROCK", "PAPER", "SCISSORS"];

function play(move) {

    let random = Math.floor(Math.random() * 3);
    let botChoice = choices[random];

    userMove.textContent = move;
    botMove.textContent = botChoice;

    if (move === botChoice) {
        result.textContent = "It's a Draw!";
    }

    else if (
        (move === "ROCK" && botChoice === "SCISSORS") ||
        (move === "PAPER" && botChoice === "ROCK") ||
        (move === "SCISSORS" && botChoice === "PAPER")
    ) {
        result.textContent = "You Win!";
        user++;
    }

    else {
        result.textContent = "Bot Wins!";
        bot++;
    }

    userScore.textContent = user;
    botScore.textContent = bot;
}

buttons.forEach(button => {
    button.addEventListener("click", function () {
        play(this.textContent.trim());
    });
});

again.addEventListener("click", function () {

    user = 0;
    bot = 0;

    userScore.textContent = 0;
    botScore.textContent = 0;

    userMove.textContent = "Waiting...";
    botMove.textContent = "Waiting...";

    result.textContent = "Let's Play!";
});
