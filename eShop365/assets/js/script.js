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

//const products=[
   // { name:"Nike Running Shoes",
      //  price: $100.99,
     //   rating:4.8,
    //    image:"assets/image/log-1.jpg"
   // },

//]

const slider = document.querySelector(".product-grid");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
    scrollAmount += 280;
    slider .style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
scrollAmount -= 280;
if(scrollAmount < 0){
    scrollAmount = 0;
}
slider.style.transform =`translateX(-${scrollAmount}px)`;
});
