document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");
    const newBlogButton = document.getElementById("new-blog-button");
    const logoutButton = document.getElementById("logout-button");

    const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/blog");
            const data = await response.json();

            if (response.ok) {
                blogList.innerHTML = ""; 
                data.blogs.forEach((blog) => {
                    const blogCard = document.createElement("div");
                    blogCard.classList.add("blog-card");
                    blogCard.innerHTML = `
                        <h3>${blog.title}</h3>
                        <img src="${blog.image}" alt="${blog.title}">
                        <p>${blog.description}</p>
                    `;

                    blogList.appendChild(blogCard);
                });
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    newBlogButton.addEventListener("click", () => {
        window.location.href = "create-blog.html"; 
    });

    logoutButton.addEventListener("click", () => {
        window.location.href = "index.html"; 
    });

    fetchBlogs();
});
