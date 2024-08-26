// Initialize an empty array for bestselling products
let bestsellingProducts = [];

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    bestsellingProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        productGrid.appendChild(card);
    });
}

// Load initial bestselling products from local storage or use an empty array
const storedBestsellingProducts = JSON.parse(localStorage.getItem('bestsellingProducts'));
if (storedBestsellingProducts) {
    bestsellingProducts = storedBestsellingProducts;
}

// Render the bestselling products
renderProducts();

// Function to add a new bestselling product
function addBestsellingProduct(name, price, image) {
    const newProduct = {
        id: `prod${Date.now()}`, // Unique ID based on timestamp
        name: name,
        price: price,
        image: image
    };

    // Add the new product to the bestselling products array
    bestsellingProducts.push(newProduct);

    // Save updated bestselling products to local storage
    localStorage.setItem('bestsellingProducts', JSON.stringify(bestsellingProducts));

    // Re-render the products
    renderProducts();
}
