


// const signInToggle = document.getElementById('signInToggle');
// const loginForm = document.getElementById('loginForm');
// const formTitle = document.getElementById('formTitle');
// const passwordLabel = document.getElementById('passwordLabel');
// const formButton = document.getElementById('formButton');
// const toggleText = document.getElementById('toggleText');
// const toggleRegister = document.getElementById('toggleRegister');

// let isRegistering = false;



// // Toggle login form visibility
// signInToggle.addEventListener('click', function (event) {
//   event.preventDefault();
//   loginForm.classList.toggle('show');
// });

// // Toggle between sign-in and register modes
// toggleRegister.addEventListener('click', function (event) {
//   event.preventDefault();
//   isRegistering = !isRegistering;

//   if (isRegistering) {
//     formTitle.textContent = "Register";
//     passwordLabel.textContent = "Create Password";
//     formButton.textContent = "Register";
//     toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleRegister">Sign In here</a>';
//   } else {
//     formTitle.textContent = "Sign In";
//     passwordLabel.textContent = "Password";
//     formButton.textContent = "Sign In";
//     toggleText.innerHTML = 'New user? <a href="#" id="toggleRegister">Register here</a>';
//   }
// });




















document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addtocart');
    const basketCountElement = document.querySelector('.basket-count');
    let basket = JSON.parse(localStorage.getItem('data')) || [];

    // Function to update the displayed basket count
    const updateBasketCount = () => {
        basketCountElement.innerText = basket.reduce((total, item) => total + item.item, 0);
    };

    // Function to save basket to localStorage
    const saveBasket = () => {
        localStorage.setItem('data', JSON.stringify(basket));
    };

    // Function to add a product to the basket
    const addToBasket = (productName, productPrice, productImage) => {
        let existingProduct = basket.find(item => item.image === productImage);

        if (existingProduct) {
            existingProduct.item++;
        } else {
            basket.push({
                name: productName,
                price: productPrice,
                image: productImage,
                item: 1
            });
        }

        saveBasket();
        updateBasketCount();
        alert(`${productName} has been added to your cart!`);
    };

    // Add event listeners to the "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // Prevent page reload

            const product = button.closest('.pro'); // Get the closest product container
            const productName = product.querySelector('h5').innerText; // Product name
            const productPrice = parseFloat(product.querySelector('h4').innerText.replace(/[^0-9.]/g, '')); // Product price
            const productImage = product.querySelector('img').src; // Product image

            addToBasket(productName, productPrice, productImage);
        });
    });

    // Initialize basket count on page load
    updateBasketCount();
});



