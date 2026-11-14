let buttons = document.getElementsByClassName("btn");

buttons[0].onclick = buttons[1].onclick = buttons[2].onclick = function() {
    this.nextElementSibling.innerHTML = "Thanks for visiting!";
};

let dark = document.getElementById("darkmode");

dark.onclick = function() {
    document.body.classList.toggle("dark-mode");
};