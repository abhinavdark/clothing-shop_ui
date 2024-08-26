
let products = []; // Initialize an empty array for products

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    products.forEach(product => {
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

// Load initial products from local storage or use an empty array
const storedProducts = JSON.parse(localStorage.getItem('products'));
if (storedProducts) {
    products = storedProducts;
}
renderProducts();
