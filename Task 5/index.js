let form = document.getElementById("myForm");

form.onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let courses = document.querySelectorAll('input[name="course"]:checked');

    let message = document.getElementById("message");

    if (name == "" || email == "" || age == "" || password == "") {
        message.textContent = "Please fill all fields";
    }

    else if (courses.length == 0) {
        message.textContent = "Please select a course";
    }

    else if (password.length < 6) {
        message.textContent = "Password must have 6 characters";
    }

    else {
        message.textContent = "Registration Successful!";
        form.reset();
    }

};
