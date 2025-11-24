/* Add your JavaScript to this file */
window.onload = function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const email = emailInput.value;

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }

        emailInput.value = ""; 
    });
};