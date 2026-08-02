// ==========================================
// DOM Elements
// ==========================================

const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");


// ==========================================
// Load All Posts
// ==========================================

async function loadPosts() {

    const posts = await getAllPosts();

    renderPosts(posts);

}


// ==========================================
// Load Single Post
// ==========================================

async function loadSinglePost(id) {

    const post = await getSinglePost(id);

    if (!post) return;

    renderSinglePost(post);

    setActivePost(id);

}


// ==========================================
// Search Posts
// ==========================================

async function handleSearch() {

    const query = searchInput.value.trim();

    if (query === "") {

        loadPosts();

        return;

    }

    const posts = await searchPosts(query);

    renderPosts(posts);

}



// ==========================================
// Sidebar Click Event
// (Event Delegation)
// ==========================================

postsContainer.addEventListener("click", async (event) => {

    const card = event.target.closest(".post-card");

    if (!card) return;

    const id = card.dataset.id;

    loadSinglePost(id);

});



// ==========================================
// Search Button
// ==========================================

searchBtn.addEventListener("click", () => {

    handleSearch();

});



// ==========================================
// Search Using Enter Key
// ==========================================

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        handleSearch();

    }

});



// ==========================================
// Live Search (Optional)
// Uncomment if Required
// ==========================================

// searchInput.addEventListener("input", () => {

//     handleSearch();

// });




// ==========================================
// Initial App Load
// ==========================================

window.addEventListener("DOMContentLoaded", () => {

    loadPosts();

});