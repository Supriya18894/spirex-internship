
let cartCount = 0;
let display = document.getElementById("cart-count");
let btn = document.getElementsByClassName("cart");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        cartCount++;
        display.textContent = cartCount;
    });
}
