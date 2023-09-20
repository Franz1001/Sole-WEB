document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Attach the resetForm function to the Reset button
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Check if email is empty
        if (emailInput.value.trim() === "") {
            emailError.innerText = "Email is required";
            isValid = false;
        } else {
            emailError.innerText = "";
        }

        // Check if password is empty
        if (passwordInput.value.trim() === "") {
            passwordError.innerText = "Password is required";
            isValid = false;
        } else {
            passwordError.innerText = "";
        }

        if (!isValid) {
            return;
        }

        // Check if the entered email and password match the desired values
        const desiredEmail = "admin@sole.com";
        const desiredPassword = "admin123";

        if (emailInput.value === desiredEmail && passwordInput.value === desiredPassword) {
            // Redirect to the desired link on successful login
            window.location.href = "homeEdit.html";
        } else {
            emailError.innerText = "Invalid email or password";
            passwordError.innerText = "Invalid email or password";
        }
    });

    // Reset error messages when inputs change
    emailInput.addEventListener("input", function () {
        emailError.innerText = "";
    });

    passwordInput.addEventListener("input", function () {
        passwordError.innerText = "";
    });
});

// Add an event listener to the "Go back" button
const backButton = document.getElementById("back");
backButton.addEventListener("click", function () {
    // Specify the URL you want to go back to
    window.location.href = "home.html"; // Change "previous_page.html" to your desired URL
});
