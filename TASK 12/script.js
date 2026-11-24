
let random = Math.floor(Math.random() * 20) + 1;

let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let msg = document.querySelector(".msg");
let result = document.querySelector(".result");
let again = document.querySelector(".again");

check.addEventListener("click", function() {

    let user = Number(guess.value);

    if (guess.value === "") {
        result.textContent = "Please enter a number!";
    }

    else if (user < 1 || user > 20) {
        result.textContent = "Enter a number between 1 and 20!";
    }

    else if (user > random) {
        result.textContent = "Too High! Try Again.";
    }

    else if (user < random) {
        result.textContent = "Too Low! Try Again.";
    }

    else {
        result.textContent = "Correct! You Won!";
        check.disabled = true;
    }

});

again.addEventListener("click", function() {
    location.reload();
});
