document.querySelector(".hom").addEventListener("click", function() {
    // Redirect to the home.html page
    window.location.href = "home.html"; // Change "home.html" to the actual URL you want to navigate to.
});
document.querySelector(".hop").addEventListener("click", function() {
    // Implement code to navigate to the shop page
    window.location.href = "shop.html"; // Replace "shop.html" with the actual URL you want to navigate to
});
const signElement = document.querySelector(".sign");
signElement.addEventListener("click", function() {
    // Redirect to the "signout.html" page when the element is clicked.
    window.location.href = "LogIn.html";
  });
document.querySelector(".con").addEventListener("click", function() {
      // Redirect to the contact.html page
    window.location.href = "Contact.html";
  });
  document.querySelector(".go-back").addEventListener("click", function() {
    // Attempt to close the current tab
    window.close();
});
