let cartCount=0;
//getElementById() for one element and queryselectorall() for many elements
//const cartCounter = document.getElementById("cart-count");
//const addButton = document.getElementById("add-cart");
//addButton.addEventListener("click", function() {
  //  cartCount++;
 //   cartCounter.textContent=cartCount;
//});

const button=document.querySelectorAll(".add-to-cart-button");
button.forEach(button=>{
    button.addEventListener("click", function(){
        //Add product to cart
        cartCount++;
        cartCounter.textContent=cartCount;
    });
});