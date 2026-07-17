let cartCount=0;
const cartCounter = document.getElementById("cart-count");
const addButton = document.getElementById("add-cart");
addButton.addEventListener("click", function() {
    cartCount++;
    cartCounter.textContent=cartCount;
});
