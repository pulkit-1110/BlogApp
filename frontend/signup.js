document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        //It will Send a POST request to your backend signup API
        try {
            const response = await fetch("http://localhost:5000/api/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                // Redirect to the main blogging website page
                window.location.href = "main.html";
            } else {
                // Display error message
                console.error("Signup failed.");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error:", error);
        }
    });
});
