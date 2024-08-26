// Sample product data (you can change this to add more products)
const products = [
    {
        id: "prod1",
        name: "Product 1",
        price: "29.99",
        image: "https://via.placeholder.com/250" // Replace with your image URL
    },
    {
        id: "prod2",
        name: "Product 2",
        price: "39.99",
        image: "https://via.placeholder.com/250" // Replace with your image URL
    },
    {
        id: "prod3",
        name: "Product 3",
        price: "49.99",
        image: "https://via.placeholder.com/250" // Replace with your image URL
    },
    {
        id: "prod4",
        name: "Product 4",
        price: "59.99",
        image: "https://via.placeholder.com/250" // Replace with your image URL
    },
    {
        id: "prod5",
        name: "Product 5",
        price: "69.99",
        image: "https://via.placeholder.com/250" // Replace with your image URL
    },
    // Add more products as needed
];

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        // Create product card element
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Create image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        // Create product name element
        const name = document.createElement('h3');
        name.textContent = product.name;

        // Create product price element
        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);

        // Append card to grid
        productGrid.appendChild(card);
    });
}

// Call the function to render products
renderProducts();
