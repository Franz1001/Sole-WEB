document.getElementById("home").addEventListener("click", function() {
        // Implement code to display home content
    });

    document.getElementById("contact").addEventListener("click", function() {
        // Implement code to display contact content
    });

    document.getElementById("cart").addEventListener("click", function() {
        // Implement code to add items to the cart
    });

    document.getElementById("out").addEventListener("click", function() {
        // Implement code to log the user out
    });
    // cart.js

// Function to load and display the cart items on the cart.html page
// cart.js

// Function to load and display the cart items on the cart.html page
function displayCartItems() {
  // Get the cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart'));

  // Get the cart items container element
  const cartItemsContainer = document.getElementById('cart-items');

  // Clear any existing items in the cart
  cartItemsContainer.innerHTML = '';

  // Initialize the total price
  let totalPrice = 0;

  // Loop through each item in the cart
  if (cart) {
    cart.forEach((item, index) => {
      // Create a new list item element for each cart item
      const listItem = document.createElement('li');
      listItem.textContent = `${item.title} (Size: ${item.size}) - ₱${item.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
      cartItemsContainer.appendChild(listItem);

      // Add a remove button for each item
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      listItem.appendChild(removeButton);

      // Add a click event listener to remove the item from the cart
      removeButton.addEventListener('click', () => {
        // Remove the item from the cart array
        cart.splice(index, 1);

        // Update the cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Refresh the cart items display
        displayCartItems();
      });

      // Add the item price to the total
      totalPrice += item.price;
    });
  }

  // Update the total price with commas
  const cartTotalElement = document.getElementById('cart-total');
cartTotalElement.textContent = `${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;



}

// Call the function to display cart items when the cart.html page loads
displayCartItems();
