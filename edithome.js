document.querySelector(".con").addEventListener("click", function() {
    // Redirect to the contact.html page
    window.location.href = "Contact.html";
});
document.querySelector(".hom").addEventListener("click", function() {
    // Redirect to the home.html page
    window.location.href = "home.html"; // Change "home.html" to the actual URL you want to navigate to.
});
const signElement = document.querySelector(".sign");
signElement.addEventListener("click", function() {
    // Redirect to the "signout.html" page when the element is clicked.
    window.location.href = "LogIn.html";
});
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
function showProductDetails(title, description, price, sizes) {
  // Update the product details using the provided information
  document.getElementById('product-image').src = 'URL_TO_PRODUCT_IMAGE'; // Replace with the actual image URL
  document.getElementById('product-title').textContent = title;
  document.getElementById('product-description').textContent = description;
  document.getElementById('product-price').textContent = 'Price: ' + price;
  document.getElementById('product-sizes').innerHTML = '';

  // Add radio buttons for sizes
  for (let i = 0; i < sizes.length; i++) {
    const sizeRadio = document.createElement('input');
    sizeRadio.type = 'radio';
    sizeRadio.id = `product1-size-${i}`;
    sizeRadio.name = 'product1-size';
    sizeRadio.value = sizes[i];

    const sizeLabel = document.createElement('label');
    sizeLabel.htmlFor = `product1-size-${i}`;
    sizeLabel.textContent = sizes[i];

    document.getElementById('product-sizes').appendChild(sizeRadio);
    document.getElementById('product-sizes').appendChild(sizeLabel);
  }

  // Show the product details container
  document.getElementById('product-details').style.display = 'block';
}
