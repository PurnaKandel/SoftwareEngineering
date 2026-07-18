let cartCount=0;
//getElementById() for one element and queryselectorall() for many elements

//const cartCounter = document.getElementById("cart-count");
//const addButton = document.getElementById("add-cart");
//addButton.addEventListener("click", function() {
  //  cartCount++;
 //   cartCounter.textContent=cartCount;
//});

const cartCounter=document.getElementById("cart-count");
const button=document.querySelectorAll(".add-to-cart-btn");
button.forEach(function(button) {
    button.addEventListener("click", function(){
        //console.log(button);
        cartCount++;
        cartCounter.textContent=cartCount;
    });
});