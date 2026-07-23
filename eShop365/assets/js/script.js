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
// let scrollAmount = 0;
const cards=document.querySelectorAll(".product-card");
const cardwidth=280;
let currentIndex =0;
function  updateSlider(){
    slider.style.transform=
    `traslateX(-${currentIndex*cardWidth}px)`;
    }
    
nextBtn.addEventListener("click", () => {
   // scrollAmount += 280;
    //slider .style.transform = `translateX(-${scrollAmount}px)`;
    if(currentIndex<cards.length-1){
        currentIndex=0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
//scrollAmount -= 280;
//if(scrollAmount < 0){
  //  scrollAmount = 0;
  if(currentIndex>0){
    currentIndex--;
}else{
    currentIndex=cards.length-1;
}
updateSlider();
//}
//slider.style.transform =`translateX(-${scrollAmount}px)`;
});

const products=[
    {
        name:"Nike Air Runner",
        price:3999,
        rating:5,
        image:"nike.jpg"
    },
    {
        name:"Adidas Sports Shoes",
        price:4999,
        rating:5,
        image:"adidas.jpg",
    }
];

setInterval(function(){
    if(currentIndex<cards.length-1){
        currentIndex++;
    }else{
        currentIndex=0;
    }
    updateSlider();
},3000);
