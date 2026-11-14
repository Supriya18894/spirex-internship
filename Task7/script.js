
let taskInput = document.getElementById("task");
let addBtn = document.getElementById("add");
let pendingList = document.getElementById("pending");

addBtn.addEventListener("click", function() {

    let taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;

    let del = document.createElement("button");
    del.textContent = "Delete";

    // Add elements to list
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    pendingList.appendChild(li);

    // Complete task
    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        }
        else {
            span.style.textDecoration = "none";
        }

    });

    // Delete task
    del.addEventListener("click", function() {
        li.remove();
    });

    // Clear input
    taskInput.value = "";

});
