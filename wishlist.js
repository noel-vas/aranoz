// wishlist.js

let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

function displayWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');

    // Clear the container before displaying wishlist items
    wishlistItemsContainer.innerHTML = '';

    // Display each wishlist item
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'col-md-4 mb-4';
        wishlistItem.innerHTML = `
            <div class="card">
                <img src="${item.imageUrl}" class="card-img-top" alt="${item.productName}">
                <div class="card-body">
                    <h5 class="card-title">${item.productName}</h5>
                    <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                    <button class="btn btn-danger" onclick="removeFromWishlist('${item.id}')">Remove</button>
                </div>
            </div>
        `;
        wishlistItemsContainer.appendChild(wishlistItem);
    });
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

// Initial display of wishlist items
displayWishlist();
