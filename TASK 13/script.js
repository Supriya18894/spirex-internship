
let password = document.getElementById("password");

let lengthCheck = document.getElementById("lengthCheck");
let upperCheck = document.getElementById("upperCheck");
let lowerCheck = document.getElementById("lowerCheck");
let numberCheck = document.getElementById("numberCheck");
let specialCheck = document.getElementById("specialCheck");

let strength = document.getElementById("strength");
let show = document.getElementById("show");


// Check password requirements
password.addEventListener("input", function () {

    let count = 0;

    // Check length
    lengthCheck.checked = password.value.length >= 8;

    // Check uppercase letter
    upperCheck.checked = /[A-Z]/.test(password.value);

    // Check lowercase letter
    lowerCheck.checked = /[a-z]/.test(password.value);

    // Check number
    numberCheck.checked = /[0-9]/.test(password.value);

    // Check special character
    specialCheck.checked = /[^A-Za-z0-9]/.test(password.value);


    // Count satisfied requirements
    if (lengthCheck.checked) {
        count++;
    }

    if (upperCheck.checked) {
        count++;
    }

    if (lowerCheck.checked) {
        count++;
    }

    if (numberCheck.checked) {
        count++;
    }

    if (specialCheck.checked) {
        count++;
    }


    // Display password strength
    if (password.value === "") {

        strength.style.width = "0%";
        strength.style.backgroundColor = "transparent";

    }

    else if (count <= 2) {

        strength.style.width = "33%";
        strength.style.backgroundColor = "red";

    }

    else if (count <= 4) {

        strength.style.width = "66%";
        strength.style.backgroundColor = "orange";

    }

    else {

        strength.style.width = "100%";
        strength.style.backgroundColor = "green";

    }

});


// Show and hide password
show.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        show.textContent = "HIDE";

    }

    else {

        password.type = "password";
        show.textContent = "SHOW";

    }

});
