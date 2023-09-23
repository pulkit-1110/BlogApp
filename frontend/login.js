document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        try {
            const response = await fetch("http://localhost:5000/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Redirect to the main blogging website page
                window.location.href = "main.html";
            } else {
                // Display error message
                console.error("Login failed.");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error:", error);
        }
    });
});
