document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save-button");
    const cancelButton = document.getElementById("cancel-button");
    const blogForm = document.getElementById("blog-form");

    saveButton.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const image = document.getElementById("image").value;
        const userId = getUserId();
        const blogData = {
            title,
            description,
            image,
            user: userId, // Associate the blog with the user
        };

        // Send a POST request to your server to save the new blog
        fetch("http://localhost:5000/api/blog/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData),
        })
        .then((response) => {
            if (response.ok) {
                window.location.href = "main.html"; // Redirect to the main page
            } else {
                console.error("Error creating blog:", response.statusText);
            }
        })
        .catch((error) => {
            console.error("Error creating blog:", error);
        });
    });

    cancelButton.addEventListener("click", () => {
        // Redirect the user to the main.html page when the cancel button is clicked
        window.location.href = "main.html";
    });

    // Function to retrieve the user's ID 
    const getUserId = () => {
        // Implement the logic to retrieve the user's ID after login
        return "USER_ID"; // Replace with the actual user ID
    };
});
