const fetchblog = document.getElementById("btns");
fetchblog.addEventListener("click", fetchBlogPosts);
function fetchBlogPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Get the user input
    const userInput = document.getElementById('textinput').value;

    // Check if the user input is a valid number between 1 and 100
    const userInputNumber = parseInt(userInput);
    if (isNaN(userInputNumber) || userInputNumber < 1 || userInputNumber > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blogPostsContainer');
            blogPostsContainer.innerHTML = ''; // Clear any previous content

            // Fetch and display the desired number of blog posts
            for (let i = 0; i < userInputNumber; i++) {
                if (posts[i]) {
                    const post = posts[i];
                    const postContainer = document.createElement('div');
                    postContainer.classList.add('post-container');
                    postContainer.innerHTML = `
                        <p>Title: ${post.title}</p>
                        <p>ID:</p>
                        <p>UserId: ${post.userId}</p>
                        <p> ${post.body}</p>
                    `;
                    blogPostsContainer.appendChild(postContainer);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
        });
}