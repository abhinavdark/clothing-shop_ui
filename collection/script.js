// Sample JSON data for demonstration
const products = [
    {
        "id": "prod1",
        "name": "Stylish Dress",
        "price": "49.99",
        "image": "https://via.placeholder.com/250",
        "link": "https://example.com/product1"
    },
    {
        "id": "prod2",
        "name": "Casual Shirt",
        "price": "29.99",
        "image": "https://via.placeholder.com/250",
        "link": "https://example.com/product2"
    },
    {
        "id": "prod3",
        "name": "Leather Jacket",
        "price": "99.99",
        "image": "https://via.placeholder.com/250",
        "link": "https://example.com/product3"
    },
    {
        "id": "prod4",
        "name": "Running Shoes",
        "price": "69.99",
        "image": "https://via.placeholder.com/250",
        "link": "https://example.com/product4"
    }
];

// Function to render products as cards
function renderProductsAsCards(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card'; // Add the product-card class

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const cardContent = document.createElement('div');
        cardContent.className = 'product-card-content'; // Add the product-card-content class

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        const link = document.createElement('a');
        link.href = product.link; // Set the link
        link.textContent = "View Product"; // Link text
        link.target = "_blank"; // Open link in a new tab

        cardContent.appendChild(name);
        cardContent.appendChild(price);
        cardContent.appendChild(link);

        card.appendChild(img);
        card.appendChild(cardContent);

        productGrid.appendChild(card);
    });
}

// Load products when the page loads
renderProductsAsCards(products);
