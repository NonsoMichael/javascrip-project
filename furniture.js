
document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartDisplay = document.querySelector('.cart-icon');
    const buttons = document.querySelectorAll('.add-to-cart');

    // Update Cart Counter
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartDisplay.innerText = `Cart (${cartCount})`;
            
            // Simple feedback
            button.innerText = "Added!";
            button.style.backgroundColor = "#27ae60";
            button.style.color = "white";
            
            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.style.backgroundColor = "transparent";
                button.style.color = "#c90e0e";
            }, 1000);
        });
    });

    // Change Nav Background on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = '#fff';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });
});