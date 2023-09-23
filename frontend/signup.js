// signup.js

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Prepare user data to send to the backend
        const userData = {
            name: name,
            email: email,
            password: password,
        };

        // Send a POST request to your backend API to create a new user
        try {
            const response = await fetch("YOUR_BACKEND_SIGNUP_API_ENDPOINT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Signup successful, redirect to the main page
                window.location.href = "main.html";
            } else {
                // Handle signup failure (e.g., display error message)
                console.error("Signup failed.");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error:", error);
        }
    });
});
