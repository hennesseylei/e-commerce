//coupons
const coupons = [
    'Use code <strong>DISCOUNT10</strong> for 10% off!',
    'Limited time: free shipping!',
    'Use code:<strong>SAVE15</strong> for 15% off on orders above $50!',
    'Buy 1 Get 1 Free with the code <strong>BUY1GET1</strong>!'
  ];
  
  let currentIndex = 0;
  const couponTextElement = document.getElementById('coupon-text');
  
  function changeCouponText() {
    currentIndex = (currentIndex + 1) % coupons.length; 
    couponTextElement.innerHTML = coupons[currentIndex];
  }
  
  setInterval(changeCouponText, 2000);
  
  
  //Slider
  var slideIndex = 1;
  showSlides(slideIndex);
  
  var autoplayInterval = setInterval(function() {
      document.getElementById("next").click();
    }, 5000); 
  
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  document.getElementById("search-icon").addEventListener("click", function() {
    const searchBar = document.getElementById("search-bar");
    const navbarRight = document.querySelector('.navbar-right');
  
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "inline-block";
      setTimeout(function() {
        searchBar.style.width = "250px";
        searchBar.style.opacity = "1"; 
      }, 10);
      navbarRight.classList.add('search-active');
    } else {
      searchBar.style.width = "0";
      searchBar.style.opacity = "0"; 
      setTimeout(function() {
        searchBar.style.display = "none";
      }, 300);
      navbarRight.classList.remove('search-active');
    }
  });
  
  //OPEN CLOSE MENU
  const cartIcon = document.querySelector(".cart-icon");
  const cart = document.querySelector(".cart");
  const cartClose = document.querySelector(".cart-close");
  
  cartIcon.addEventListener("click", () => cart.classList.add("active"));
  cartClose.addEventListener("click", () => cart.classList.remove("active"));
  
  
  //ADD TO CART
  const addCartButtons = document.querySelectorAll(".add-cart");
  addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
      const productBox = event.target.closest(".product-box");
      addToCart(productBox);
    });
  });
  
  const cartContent = document.querySelector(".cart-content");
  
  const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;
  
    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
      if (item.textContent === productTitle) {
        alert("This Item is already in your cart.");
        return;
      }
    }
  
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
      <img src="${productImgSrc}" class="cart-img">
      <div class="cart-detail">
        <h2 class="cart-product-title">${productTitle}</h2>
        <span class="cart-price">${productPrice}</span>
        <div class="cart-quantity">
          <button class="decrement">-</button>
          <span class="number">1</span>
          <button class="increment">+</button>
        </div>
      </div>
      <button class="cart-remove">
        <img src="ecommerce/images/delete-bin-6-line.png" alt="delete">
      </button>
    `;
  
    cartContent.appendChild(cartBox);
  
    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
      cartBox.remove();
  
      updateCartCount(-1);
      
      updateTotalPrice();
    });
  
    const decrementButton = cartBox.querySelector(".decrement");
    const incrementButton = cartBox.querySelector(".increment");
    const numberElement = cartBox.querySelector(".number");
  
    decrementButton.addEventListener("click", () => {
      let quantity = parseInt(numberElement.textContent);
      if (quantity > 1) {
        quantity--;
        numberElement.textContent = quantity;
        updateTotalPrice();
      }
    });
  
    incrementButton.addEventListener("click", () => {
      let quantity = parseInt(numberElement.textContent);
      quantity++;
      numberElement.textContent = quantity;
      updateTotalPrice();
    });
  
    updateCartCount(1);
  
    updateTotalPrice();
  };
  
  const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box"); // Fixed this to query all cart boxes
    let total = 0;
    cartBoxes.forEach(cartBox => {
      const priceElement = cartBox.querySelector(".cart-price");
      const quantityElement = cartBox.querySelector(".number");
      const price = parseFloat(priceElement.textContent.replace("$", ""));
      const quantity = parseInt(quantityElement.textContent);
      total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`; // Fix to show price with two decimal points
  };
  
  
  let cartItemCount = 0;
  const updateCartCount= change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if (cartItemCount > 0) {
      cartItemCountBadge.style.visibility = "visible";
      cartItemCountBadge.textContent = cartItemCount;
    } else {
      cartItemCountBadge.style.visibility = "hidden";
      cartItemCountBadge.textContent = "";
    }
  };
  
  const checkoutButton = document.querySelector(".btn-checkout");
  checkoutButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    if (cartBoxes.length === 0) {
      alert("Your cart is empty.");
      return;
    }
  
    cartBoxes.forEach(cartBox => cartBox.remove());
  
    cartItemCount = 0;
    updateCartCount(0);
  
    updateTotalPrice();
  
    alert("Thank you for shopping! You may proceed to checkout.");
  });