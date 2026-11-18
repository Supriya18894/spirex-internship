
let images = document.querySelectorAll(".container img");

let dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Movie titles
let captions = [
    "Stranger Things",
    "Alice in Borderland",
    "All of Us Are Dead",
    "Happiness",
    "Bring Her Back",
    "The Nun",
    "My Name",
    "Tunnel",
    "Obsession"
];

// Display selected image
function showImage() {

    for (let i = 0; i < images.length; i++) {

        if (i == currentIndex) {

            images[i].classList.add("active");
            dots[i].classList.add("selected");

        }
        else {

            images[i].classList.remove("active");
            dots[i].classList.remove("selected");

        }
    }

    // Update movie title
    document.getElementById("caption").textContent =
        captions[currentIndex];

    // Update image counter
    document.getElementById("counter").innerHTML =
        "Image " + (currentIndex + 1) + " of " + images.length;
}

// Next image
function nextImage() {

    currentIndex++;

    if (currentIndex == images.length) {
        currentIndex = 0;
    }

    showImage();
}

// Previous image
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}

// Select image using dots
function goToImage(index) {

    currentIndex = index;

    showImage();
}

// Display first image when page loads
showImage();
