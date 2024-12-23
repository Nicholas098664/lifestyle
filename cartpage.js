document.addEventListener('DOMContentLoaded', () => {
    let basket = JSON.parse(localStorage.getItem('data')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    // let cart='';

    // Function to calculate and display the total amount
    const calculateTotal = () => {
        const total = basket.reduce((sum, item) => sum + item.price * item.item, 0);
        totalAmountElement.innerText = total.toFixed(2);
    };

    // Function to render the cart items
    const renderCart = () => {
        cartItemsContainer.innerHTML = ''; // Clear the cart container

        if (basket.length === 0) {
            cartItemsContainer.innerHTML = `<tr><td colspan="6">Your cart is empty!</td></tr>`;
            return;
        }

        basket.forEach((item, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="decrease-btn" data-index="${index}">-</button>
                    ${item.item}
                    <button class="increase-btn" data-index="${index}">+</button>
                </td>
                <td>$${(item.price * item.item).toFixed(2)}</td>
                <td><button class="remove-btn" data-index="${index}">Remove</button></td>
            `;

            cartItemsContainer.appendChild(row);
        });

        calculateTotal();
    };

    // Function to save basket to localStorage
    const saveBasket = () => {
        localStorage.setItem('data', JSON.stringify(basket));
    };

    // Event delegation for cart actions
    cartItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('increase-btn')) {
            basket[index].item++;
        } else if (target.classList.contains('decrease-btn')) {
            basket[index].item--;
            if (basket[index].item === 0) {
                basket.splice(index, 1);
            }
        } else if (target.classList.contains('remove-btn')) {
            basket.splice(index, 1);
        }

        saveBasket();
        renderCart();
    });

    // Initialize the cart on page load
    renderCart();
});




document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('CheckoutToggle');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            document.getElementById('card').style.display = 'none';
        });
    }
});

function closeModal() {
    document.getElementById('card').style.display = 'block';
}
console.log(cart)