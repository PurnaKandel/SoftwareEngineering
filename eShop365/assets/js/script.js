let cartcount=0;
const cartcounter=document.getElementById("cart-count");
const addButton=document.getElementById("add-cart");
addButton.addEventListener("click", function() {
    cartcount++;
    cartcounter.textContent=cartcount;
});











9