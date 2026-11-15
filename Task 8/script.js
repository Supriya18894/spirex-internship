let ca=[
    "Waffles",
    "Chester",
    "The Upside Down",
    "Dungeons & Dragons",
    "Running Up That Hill"
]

document.getElementById("submitbtn").addEventListener("click", function() {

let score = 0;
let ans1 = document.querySelector('input[name="q1"]:checked');
let ans2 = document.querySelector('input[name="q2"]:checked');
let ans3 = document.querySelector('input[name="q3"]:checked');
let ans4 = document.querySelector('input[name="q4"]:checked');
let ans5 = document.querySelector('input[name="q5"]:checked');


if (ans1 && ans1.value === ca[0]) {
    score++;
}
if (ans2 && ans2.value === ca[1]) {
    score++;
}
if (ans3 && ans3.value === ca[2]) {
    score++;
}
if (ans4 && ans4.value === ca[3]) {
    score++;
}
if (ans5 && ans5.value === ca[4]) {
    score++;
}

document.getElementById("result").innerHTML =
    "Your score is " + score + "/5";

});