

// const addCartButton = getElementById('add-cart-button')

//  addCartButton.addEventListener("click",addToCart(item))

// function addToCart(item) {
//     alert((item + " added to cart!"));
// }

//  const menuToggle = document.getElementById("menu-toggle");
//   const menu = document.getElementById("menu");

//   menuToggle.addEventListener("click", () => {
//     menu.classList.toggle("active");
//   });

// document.addEventListener('DOMContentLoaded', () => {
//     let cartCount = 0;
//     const cartDisplay = document.querySelector('.cart-icon');
//     const buttons = document.querySelectorAll('.add-to-cart');

//     // Update Cart Counter     
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             cartCount++;
//             cartDisplay.innerText = `Cart (${cartCount})`;
            
//             // Simple feedback
//             button.innerText = "Added!";
//             button.style.backgroundColor = "#27ae60";
//             button.style.color = "white";
            
//             setTimeout(() => {
//                 button.innerText = "Add to Cart";
//                 button.style.backgroundColor = "transparent";
//                 button.style.color = "#c90e0e";
//             }, 1000);
//         });
//     });

//     // Change Nav Background on Scroll
//     window.addEventListener('scroll', () => {
//         const nav = document.querySelector('.navbar');
//         if (window.scrollY >100 ) {
//             nav.style.background = '#fff';
//             nav.style.boxShadow = '0 2px 10px green)';
//         } else {
//             nav.style.background = 'transparent';
//             nav.style.boxShadow = 'none';
//         }
//     });
// });



let cart = {};
 let total = 0

    function addToCart(item) {
        cart[item] = (cart[item] || 0) + 1;

        
              updateCartCount();
              renderCart();
            }

    function updateCartCount() {
        let total = 0;
        for (let item in cart) {
            total += cart[item];
        }
        document.getElementById("cartCount").innerText = total;
    }
        
    // To display the items that have been choosen inside the div container and also to increase and decrease the items quantity in the cart
    function renderCart() {
        const cartItems = document.getElementById("cartItems");
        cartItems.innerHTML = "";

        for (let item in cart) {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <span class="span">${item}</span>
                    <div class="quantity">
                        <button onclick="changeQty('${item}', -1)">-</button>
                        <span>${cart[item]}</span>
                        <button onclick="changeQty('${item}', 1)">+</button>
                    </div>
                </div>
            `;
        }

        if (Object.keys(cart).length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
        }
    }
  
     // Removes items that have zero quantity in the cart
    function changeQty(item, change) {
        cart[item] += change;

        if (cart[item] <= 0) {
            delete cart[item];
        }

        updateCartCount();
        renderCart();
    }
      
    // this create a page where we can see thed carts items choosen
    function toggleCart() {
        const modal = document.getElementById("cartModal");
        modal.style.display =
            modal.style.display === "flex" ? "none" : "flex";
    }

   