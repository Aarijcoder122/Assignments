// ==========================================
// DOM Elements
// ==========================================

const postsContainer = document.getElementById("postsContainer");

const singlePostContainer = document.getElementById("singlePost");

const loader = document.getElementById("loader");


// ==========================================
// Render All Posts
// ==========================================

function renderPosts(posts) {

    if (!posts.length) {

        postsContainer.innerHTML = `
            <h3>No Posts Found</h3>
        `;

        return;
    }

    postsContainer.innerHTML = posts.map(post => {

        return `

            <div class="post-card"

                data-id="${post.id}">

                <h3>${post.title}</h3>

                <p>

                    ${post.body.substring(0,80)}...

                </p>

            </div>

        `;

    }).join("");

}



// ==========================================
// Render Single Post
// ==========================================

function renderSinglePost(post) {

    singlePostContainer.innerHTML = `

        <div class="single-post">

            <h1>

                ${post.title}

            </h1>

            <p>

                ${post.body}

            </p>

            <div class="meta">

                <span>

                    👍 Likes : ${post.reactions.likes}

                </span>

                <span>

                    👎 Dislikes : ${post.reactions.dislikes}

                </span>

                <span>

                    👁 Views : ${post.views}

                </span>

            </div>

            <div class="tags">

                ${post.tags.map(tag => {

                    return `<span class="tag">${tag}</span>`

                }).join("")}

            </div>

        </div>

    `;

}



// ==========================================
// Show Loading
// ==========================================

function showLoading() {

    loader.classList.remove("hidden");

}



// ==========================================
// Hide Loading
// ==========================================

function hideLoading() {

    loader.classList.add("hidden");

}



// ==========================================
// Show Error
// ==========================================

function showError(message) {

    singlePostContainer.innerHTML = `

        <div class="empty-state">

            <h2>

                ${message}

            </h2>

        </div>

    `;

}



// ==========================================
// Active Sidebar Card
// ==========================================

function setActivePost(id) {

    const cards = document.querySelectorAll(".post-card");

    cards.forEach(card => {

        card.classList.remove("active");

        if (Number(card.dataset.id) === Number(id)) {

            card.classList.add("active");

        }

    });

}