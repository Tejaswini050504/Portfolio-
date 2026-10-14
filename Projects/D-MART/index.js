// ************ LOCATION POP UP ***************
document.getElementById("location").addEventListener("click", function () {
    document.getElementById("locationPopup").style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("locationPopup").style.display = "none";
});

//**************** SEARCH INPUT TRANSITION ****************
const placeholderText = document.getElementById('placeholderText');
const searchInput = document.getElementById('searchInput');

const text = [
    "Butter",
    "Milk",
    "Curd",
    "Onion",
    "Potato",
    "Garlic"
];

let index = 0;

function ChangeText() {
    placeholderText.classList.add("move-up");

    setTimeout(() => {
        index++;

        if (index === text.length) {
            index = 0;
        }

        placeholderText.innerText = text[index];

        placeholderText.style.transition = "none";
        placeholderText.style.transform = "translateY(30px)";
        placeholderText.style.opacity = "0";

        setTimeout(() => {
            placeholderText.style.transition = "transform 1s ease, opacity 0.5s ease";
            placeholderText.style.transform = "translateY(-50%)";
            placeholderText.style.opacity = "1";
        }, 50);
    }, 500);
}

setInterval(ChangeText, 2000);

searchInput.addEventListener("focus", () => {
    placeholderText.style.display = "none";
});


// *************** SIGN-IN POPUP ****************
document.getElementById("signup").addEventListener("click", function () {
    document.getElementById("signinpopup").style.display = "flex";
});

document.getElementById("close1").addEventListener("click", function () {
    document.getElementById("signinpopup").style.display = "none";
});


// ********************SLIDER1************************
let slides = document.getElementById('slides');
let indexs = 0;

const totalslides = document.querySelectorAll('.slide').length;

setInterval(() => {
    indexs++;

    if (indexs >= totalslides) {
        indexs = 0;
    }

    slides.style.transform = `translateX(-${indexs * 100}%)`;
}, 3000);


// ************** CATEGORY *****************
let track=document.getElementById("categorytrack")
const leftArrow=document.getElementById("leftArrow")
const rightArrow=document.getElementById("rightArrow")
let categories=document.querySelectorAll(".category-box")
let currentIndex=0;


function getVisible(){
    let slider=document.querySelector(".category-slider")
    const categoryWidth=categories[0].offsetWidth;
    const gap=33;

    return Math.floor(
        slider.clientWidth/(categoryWidth+gap)
    )
}

//move slider
function moveslider(){
    const categoryWidth=categories[0].offsetWidth;
    const gap=32.5;
    let moveAmount=categoryWidth+gap;
    track.style.transform=`translateX(-${currentIndex*moveAmount}px)`;

    updateArrows()
}

rightArrow.addEventListener("click",function(){
    const visibleItems=getVisible()

    const maxIndex=categories.length-visibleItems

    //move only one item
    if(currentIndex<maxIndex){
        currentIndex++;
        moveslider()
    }
})

//left arrow
leftArrow.addEventListener("click",function(){
    //move only one item
    if(currentIndex>0){
        currentIndex--;
        moveslider()
    }
})

function updateArrows(){
    const visibleItems=getVisible()
    const maxIndex=categories.length-visibleItems

    if(currentIndex===0){
        leftArrow.classList.add("disabled")
        leftArrow.style.display="none"
    }
    else{
        leftArrow.classList.remove("disabled")
        leftArrow.style.display="flex"
    }

    if(currentIndex>=maxIndex){
        rightArrow.classList.add("disabled")
        rightArrow.style.display="none"
    }
    else{
        rightArrow.classList.remove("disabled")
        rightArrow.style.display="flex"
    }
}

// ********************SLIDER2************************
let slides2 = document.getElementById('slides2');
let indexs2 = 0;

const totalslides2 = document.querySelectorAll('.slide2').length;

setInterval(() => {
    indexs2++;

    if (indexs2 >= totalslides2) {
        indexs2 = 0;
    }

    slides2.style.transform = `translateX(-${indexs2 * 100}%)`;
}, 3000);

// ********************SLIDER1************************
let slides3 = document.getElementById('slides3');
let indexs3 = 0;

const totalslides3 = document.querySelectorAll('.slide3').length;

setInterval(() => {
    indexs3++;

    if (indexs3 >= totalslides) {
        indexs3 = 0;
    }

    slides3.style.transform = `translateX(-${indexs3 * 100}%)`;
}, 3000);


// ******************** GROCERY PRODUCTS ********************

let products = [

    {
    id: 1,
    image: "dmart-images/cc1.jpg",
    productname: "Wheat Lokwan : 10 kg",
    mrp: 570,
    offerPrice: 424,
    category: "Flours & Grains"
},

{
    id: 2,
    image: "dmart-images/cc2.jpg",
    productname: "Wheat Sihore : 10 kg",
    mrp: 570,
    offerPrice: 414,
    category: "Flours & Grains"
},

{
    id: 3,
    image: "dmart-images/cc3.jpg",
    productname: "DMart Premia Toor Dal : 1 kg",
    mrp: 157,
    offerPrice: 140,
    category: "Dals"
},

{
    id: 4,
    image: "dmart-images/cc4.jpg",
    productname: "DMart Premia Sugar : 5 kg",
    mrp: 494,
    offerPrice: 372,
    category: "Salt / Sugar / Jaggery"
},

{
    id: 5,
    image: "dmart-images/cc5.jpg",
    productname: "DMart Premia Groundnut : 500 g",
    mrp: 160,
    offerPrice: 140,
    category: "Dry Fruits & Nuts"
},

{
    id: 6,
    image: "dmart-images/cc6.jpg",
    productname: "Wheat MP Sihore Premium : 10 kg",
    mrp: 620,
    offerPrice: 480,
    category: "Flours & Grains"
},

{
    id: 7,
    image: "dmart-images/cc7.jpg",
    productname: "DMart Premia Moong Dal : 1 kg",
    mrp: 180,
    offerPrice: 155,
    category: "Dals"
},

{
    id: 8,
    image: "dmart-images/cc8.jpg",
    productname: "DMart Swaad Toor Dal : 1 kg",
    mrp: 150,
    offerPrice: 130,
    category: "Dals"
},

{
    id: 9,
    image: "dmart-images/cc9.jpg",
    productname: "DMart Premia Refined Rice Bran Oil : 1 L",
    mrp: 170,
    offerPrice: 145,
    category: "Cooking Oil"
},

{
    id: 10,
    image: "dmart-images/cc10.jpg",
    productname: "DMart Premia Kaju : 500 g",
    mrp: 650,
    offerPrice: 560,
    category: "Dry Fruits & Nuts"
},

{
    id: 11,
    image: "dmart-images/cc11.jpg",
    productname: "DMart Premia Jeera : 500 g",
    mrp: 260,
    offerPrice: 220,
    category: "Masala & Spices"
},

{
    id: 12,
    image: "dmart-images/cc12.jpg",
    productname: "Kalimuchh Rice : 5 kg",
    mrp: 550,
    offerPrice: 475,
    category: "Rice & Rice Products"
},

{
    id: 13,
    image: "dmart-images/cc13.jpg",
    productname: "DMart Premia Moong Dal : 1 kg",
    mrp: 180,
    offerPrice: 155,
    category: "Dals"
},

{
    id: 14,
    image: "dmart-images/cc14.jpg",
    productname: "DMart Premia Masoor Dal : 1 kg",
    mrp: 170,
    offerPrice: 145,
    category: "Dals"
},

{
    id: 15,
    image: "dmart-images/cc15.jpg",
    productname: "DMart Swaad Moong Dal : 1 kg",
    mrp: 160,
    offerPrice: 140,
    category: "Dals"
},

{
    id: 16,
    image: "dmart-images/cc16.jpg",
    productname: "DMart Premia Makhana : 1 kg",
    mrp: 850,
    offerPrice: 720,
    category: "Healthy Food"
},

{
    id: 17,
    image: "dmart-images/cc17.jpg",
    productname: "DMart Premia Sabudana : 1 kg",
    mrp: 120,
    offerPrice: 99,
    category: "Flours & Grains"
},

{
    id: 18,
    image: "dmart-images/cc18.jpg",
    productname: "DMart Premia Poha : 1 kg",
    mrp: 110,
    offerPrice: 90,
    category: "Flours & Grains"
},

{
    id: 19,
    image: "dmart-images/cc19.jpg",
    productname: "DMart Premia Akhrot Magaj : 500 g",
    mrp: 750,
    offerPrice: 650,
    category: "Dry Fruits & Nuts"
},

{
    id: 20,
    image: "dmart-images/cc20.jpg",
    productname: "H.M.T. Kolam Rice : 5 kg",
    mrp: 650,
    offerPrice: 550,
    category: "Rice & Rice Products"
},

{
    id: 21,
    image: "dmart-images/cc21.jpg",
    productname: "DMart Premia Chana Dal : 1 kg",
    mrp: 150,
    offerPrice: 130,
    category: "Dals"
},

{
    id: 22,
    image: "dmart-images/cc22.jpg",
    productname: "DMart Premia Rava : 1 kg",
    mrp: 80,
    offerPrice: 65,
    category: "Flours & Grains"
},

{
    id: 23,
    image: "dmart-images/cc23.jpg",
    productname: "DMart Swaad Kaju : 500 g",
    mrp: 650,
    offerPrice: 560,
    category: "Dry Fruits & Nuts"
},

{
    id: 24,
    image: "dmart-images/cc24.jpg",
    productname: "DMart Swaad Makhana : 100 g",
    mrp: 180,
    offerPrice: 150,
    category: "Healthy Food"
},

{
    id: 25,
    image: "dmart-images/cc25.jpg",
    productname: "Jaggery : 1 kg",
    mrp: 90,
    offerPrice: 75,
    category: "Salt / Sugar / Jaggery"
},

{
    id: 26,
    image: "dmart-images/cc26.jpg",
    productname: "DMart Premia Moong Dal Chilka : 1 kg",
    mrp: 180,
    offerPrice: 155,
    category: "Dals"
},

{
    id: 28,
    image: "dmart-images/cc28.jpg",
    productname: "DMart Premia Moong Dal : 1 kg",
    mrp: 180,
    offerPrice: 155,
    category: "Dals"
},

{
    id: 29,
    image: "dmart-images/cc29.jpg",
    productname: "Wheat MP Sihore : 10 kg",
    mrp: 570,
    offerPrice: 420,
    category: "Flours & Grains"
},

{
    id: 30,
    image: "dmart-images/cc30.jpg",
    productname: "DMart Premia Matki Whole : 1 kg",
    mrp: 180,
    offerPrice: 155,
    category: "Dals"
},

{
    id: 31,
    image: "dmart-images/cc31.jpg",
    productname: "DMart Premia Bhagar : 500 g",
    mrp: 120,
    offerPrice: 99,
    category: "Flours & Grains"
},

{
    id: 32,
    image: "dmart-images/cc32.jpg",
    productname: "DMart Premia Rava : 1 kg",
    mrp: 80,
    offerPrice: 65,
    category: "Flours & Grains"
}

   

];


// ******************** CART ********************

let cart = [];


// DISPLAY PRODUCTS

function displayGroceryProducts() {

    let groceryProducts = document.getElementById("groceryProducts");

    groceryProducts.innerHTML = "";

    products.forEach(function(product) {

        let cartItem = cart.find(function(item) {
            return item.id === product.id;
        });

        let quantity = cartItem ? cartItem.quantity : 0;

        let saved = product.mrp - product.offerPrice;

        groceryProducts.innerHTML += `
        
        <div class="grocery-product">

            <div class="product-image">
                <img src="${product.image}" alt="${product.productname}">
            </div>

            <div class="product-name">
                ${product.productname}
            </div>

            <div class="product-price-row">

                <div class="product-price">
                    <strong>₹${product.offerPrice}</strong>
                    <del>₹${product.mrp}</del>
                </div>

                <div class="product-save">
                    ₹${saved}<br>
                    OFF
                </div>

            </div>

            <div class="product-tax">
                (Inclusive of all taxes)
            </div>

            ${
                quantity === 0
                ?
                `
                <button class="add-cart-btn" onclick="addGroceryToCart(${product.id})">
                    <i class="fa-solid fa-cart-shopping"></i>
                    ADD TO CART
                </button>
                `
                :
                `
                <div class="grocery-quantity">

                    <button onclick="decreaseCart(${product.id})">
                        −
                    </button>

                    <span>${quantity}</span>

                    <button onclick="increaseCart(${product.id})">
                        +
                    </button>

                </div>
                `
            }

        </div>
        
        `;
    });

    document.getElementById("productCount").innerText =
        products.length + " products";
}


// ADD TO CART

function addGroceryToCart(id) {

    let item = cart.find(function(item) {
        return item.id === id;
    });

    if (item) {
        item.quantity++;
    }
    else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    updateCart();
    displayGroceryProducts();
    displayCartItems();
}


// INCREASE

function increaseCart(id) {

    let item = cart.find(function(item) {
        return item.id === id;
    });

    if (item) {
        item.quantity++;
    }

    updateCart();
    displayGroceryProducts();
    displayCartItems();
}


// DECREASE

function decreaseCart(id) {

    let item = cart.find(function(item) {
        return item.id === id;
    });

    if (!item) {
        return;
    }

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(function(item) {
            return item.id !== id;
        });

    }

    updateCart();
    displayGroceryProducts();
    displayCartItems();
}


// REMOVE

function removeCart(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });

    updateCart();
    displayGroceryProducts();
    displayCartItems();
}


// UPDATE TOP CART

function updateCart() {

    let totalQuantity = 0;
    let totalAmount = 0;

    cart.forEach(function(item) {

        totalQuantity += item.quantity;

        let product = products.find(function(product) {
            return product.id === item.id;
        });

        if (product) {

            totalAmount +=
                product.offerPrice * item.quantity;

        }

    });

    document.getElementById("cartCount").innerText =
        totalQuantity;

    document.getElementById("cartAmount").innerHTML =
        "&#8377;" + totalAmount;
}


// **************** GROCERY PAGE OPEN ****************

document.getElementById("dmartGroceryLink").addEventListener("click", function(event) {

    event.preventDefault();

    let grocerySection = document.getElementById("grocerySection");

    grocerySection.style.display = "flex";

    let mainItems = document.querySelectorAll("main > section, main > div");

    mainItems.forEach(function(item) {

        if (item.id !== "grocerySection") {
            item.style.display = "none";
        }

    });

    window.scrollTo(0, 0);

});


// **************** HOME PAGE ****************

let homeLink = document.getElementById("homeLink");

if (homeLink) {

    homeLink.addEventListener("click", function(event) {

        event.preventDefault();

        let grocerySection =
            document.getElementById("grocerySection");

        grocerySection.style.display = "none";

        let mainItems =
            document.querySelectorAll("main > section");

        mainItems.forEach(function(section) {

            if (section.id !== "grocerySection") {
                section.style.display = "";
            }

        });

        window.scrollTo(0, 0);

    });

}


// DISPLAY CART

function displayCartItems() {

    let cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        return;
    }

    cart.forEach(function(item) {

        let product = products.find(function(product) {
            return product.id === item.id;
        });

        if (!product) {
            return;
        }

        let saved =
            product.mrp - product.offerPrice;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div class="cart-item-top">

                <div class="cart-item-image">

                    <img src="${product.image}"
                         alt="${product.productname}">

                </div>

                <div class="cart-item-details">

                    <div class="cart-item-name">
                        ${product.productname}
                    </div>

                    <div class="cart-price-row">

                        <div class="cart-price">
                            You Pay
                            <strong>
                                ₹${product.offerPrice}
                            </strong>
                        </div>

                        <div class="cart-save">
                            You Save ₹${saved}
                        </div>

                    </div>

                </div>

            </div>

            <div class="cart-item-bottom">

                <div class="cart-quantity">

                    <button onclick="decreaseCart(${product.id})">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseCart(${product.id})">
                        +
                    </button>

                </div>

                <button class="cart-delete"
                        onclick="removeCart(${product.id})">

                    <i class="fa-solid fa-xmark"></i>

                </button>

            </div>

        </div>

        `;

    });

}


// **************** CART POPUP ****************

document.getElementById("topCart").addEventListener("click", function() {

    document.getElementById("cartPanel").style.display = "block";

    document.getElementById("cartOverlay").style.display = "block";

    displayCartItems();

});


document.getElementById("closeCart").addEventListener("click", function() {

    document.getElementById("cartPanel").style.display = "none";

    document.getElementById("cartOverlay").style.display = "none";

});


document.getElementById("cartOverlay").addEventListener("click", function() {

    document.getElementById("cartPanel").style.display = "none";

    document.getElementById("cartOverlay").style.display = "none";

});


displayGroceryProducts();

updateCart();