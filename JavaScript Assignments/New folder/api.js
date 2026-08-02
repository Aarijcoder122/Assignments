// ==========================================
// Base URL
// ==========================================

const BASE_URL = "https://dummyjson.com/posts";


// ==========================================
// GET ALL POSTS
// ==========================================

async function getAllPosts() {

    try {

        showLoading();

        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();

        return data.posts;

    }

    catch (error) {

        console.error(error);

        showError(error.message);

        return [];

    }

    finally {

        hideLoading();

    }

}



// ==========================================
// GET SINGLE POST
// ==========================================

async function getSinglePost(id) {

    try {

        showLoading();

        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {

            throw new Error("Failed to fetch post.");

        }

        const post = await response.json();

        return post;

    }

    catch (error) {

        console.error(error);

        showError(error.message);

        return null;

    }

    finally {

        hideLoading();

    }

}



// ==========================================
// SEARCH POSTS
// ==========================================

async function searchPosts(searchText) {

    try {

        showLoading();

        const response = await fetch(
            `${BASE_URL}/search?q=${searchText}`
        );

        if (!response.ok) {

            throw new Error("Search failed.");

        }

        const data = await response.json();

        return data.posts;

    }

    catch (error) {

        console.error(error);

        showError(error.message);

        return [];

    }

    finally {

        hideLoading();

    }

}