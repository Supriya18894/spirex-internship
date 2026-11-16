let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let random = document.getElementById("random");
let reset = document.getElementById("reset");

red.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #02060E, #C50337)";
});

blue.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #02060E, #0356C5)";
});

yellow.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #E48200, #660000)";
});

green.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #02060E, #007D10)";
});

random.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(135deg, #3F2E2F, #6E5053,#9F7E82, #CDAFB0,#EAD7CF,#FAF1E8)";
});

reset.addEventListener("click", function() {
    location.reload();
});