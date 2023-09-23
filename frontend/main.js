document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");
    const blogForm = document.getElementById("blog-form");
    const logoutButton = document.getElementById("logout-button");

    const getUserId = () => {
        // Implement the logic to retrieve the user's ID after login
        // You can use your authentication token or session to get the user's ID
        // For example, if you're using JWT, decode the token
        // Replace this with your actual implementation
        const token = localStorage.getItem('authToken'); // Replace with your actual token storage
        const decodedToken = jwt_decode(token); // Assuming you have a JWT library

        return decodedToken.userId; // Return the user's ID
    };

    const fetchBlogs = async () => {
        const userId = getUserId();

        try {
            const response = await fetch(`http://localhost:5000/api/blog/user/${userId}`);
            const data = await response.json();

            if (response.ok) {
                blogList.innerHTML = "";

                data.user.blogs.forEach((blog) => {
                    const blogCard = document.createElement("div");
                    blogCard.classList.add("blog-card");
                    blogCard.innerHTML = `
                        <h3>${blog.title}</h3>
                        <p>${blog.description}</p>
                        <img src="${blog.image}" alt="${blog.title}">
                        <button class="edit-button" data-id="${blog._id}">Edit</button>
                        <button class="delete-button" data-id="${blog._id}">Delete</button>
                    `;

                    blogList.appendChild(blogCard);

                    const editButton = blogCard.querySelector(".edit-button");
                    const deleteButton = blogCard.querySelector(".delete-button");

                    editButton.addEventListener("click", () => editBlog(blog._id));
                    deleteButton.addEventListener("click", () => deleteBlog(blog._id));
                });
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const createBlog = async (title, description, image) => {
        const userId = getUserId();

        try {
            const response = await fetch("http://localhost:5000/api/blog/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    image,
                    user: userId,
                }),
            });

            if (response.ok) {
                blogForm.reset();
                fetchBlogs();
            }
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    const editBlog = (blogId) => {
        // Implement the logic to edit a blog here
        // You can redirect the user to an edit page or show a modal, for example
    };

    const deleteBlog = async (blogId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/blog/${blogId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchBlogs();
            }
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    blogForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const image = document.getElementById("image").value;

        createBlog(title, description, image);
    });

    logoutButton.addEventListener("click", () => {
        // Implement the logic to logout the user
        // Redirect the user to the login page
        window.location.href = "index.html"; // Replace with your login page URL
    });

    fetchBlogs();
});
