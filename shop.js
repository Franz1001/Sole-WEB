
// JavaScript code
const productImages = document.querySelectorAll('.product img');

// Function to display the zoomed-in image
function displayZoomedImage(event) {
    const imgSrc = event.target.src;

    // Create a container div for the zoomed-in image
    const zoomedContainer = document.createElement('div');
    zoomedContainer.classList.add('zoomed-image-container');

    // Create an image element for the zoomed-in image
    const zoomedImg = document.createElement('img');
    zoomedImg.classList.add('zoomed-image');
    zoomedImg.src = imgSrc;

    // Add the zoomed-in image to the container
    zoomedContainer.appendChild(zoomedImg);

    // Add a click event listener to the container to close it when clicked
    zoomedContainer.addEventListener('click', () => {
        document.body.removeChild(zoomedContainer);
    });

    // Add the container to the body
    document.body.appendChild(zoomedContainer);
}

// Attach the click event handler to each product image
productImages.forEach((img) => {
    img.addEventListener('click', displayZoomedImage);
});
function showProductDetails(title, description, price, sizes, imageURL) {
  // Update the product details using the provided information
  document.getElementById('product-image').src = imageURL;
  document.getElementById('product-title').textContent = title;
  document.getElementById('product-description').textContent = description;
  document.getElementById('product-price').textContent = 'Price: ' + price;
  document.getElementById('product-sizes').innerHTML = '';

  // Add radio buttons for sizes
  for (let i = 0; i < sizes.length; i++) {
    const sizeRadio = document.createElement('input');
    sizeRadio.type = 'radio';
    sizeRadio.id = `product-size-${i}`;
    sizeRadio.name = 'product-size';
    sizeRadio.value = sizes[i];

    const sizeLabel = document.createElement('label');
    sizeLabel.htmlFor = `product-size-${i}`;
    sizeLabel.textContent = sizes[i];

    document.getElementById('product-sizes').appendChild(sizeRadio);
    document.getElementById('product-sizes').appendChild(sizeLabel);
  }

  // Show the product details container
  document.getElementById('product-details').style.display = 'block';
}


// Example usage:
showProductDetails(1, 'Product 1', 'Description 1', 100, ['Size 1', 'Size 2'], 'product1-image.jpg');
showProductDetails(2, 'Product 2', 'Description 2', 200, ['Size 3', 'Size 4'], 'product2-image.jpg');
// Repeat the above line for each product

function addToCart(productTitle, productPrice, productSize, productImage) {
  // Create a cart item object
  const cartItem = {
    title: productTitle,
    price: productPrice,
    size: productSize,
    image: productImage,
  };

  // Check if the cart exists in localStorage
  let cart = localStorage.getItem('cart');
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  // Add the new item to the cart
  cart.push(cartItem);

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Apply the animation to all product elements
  const productElements = document.querySelectorAll('.product');
  productElements.forEach((productElement) => {
    productElement.classList.add('cart-item-added-animation');

    // Remove the animation class after the animation completes
    productElement.addEventListener('animationend', () => {
      productElement.classList.remove('cart-item-added-animation');
    });
  });
}


 function displayCartItems() {
  console.log('displayCartItems called'); // Check if the function is called

  // Get the cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log('Cart items:', cart); // Check the cart data

  // Rest of your code...
}
