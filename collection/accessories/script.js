// Sample JSON data for demonstration
const products = [
   
    {
        "id": "prod4",
        "name": "Été Kadal",
        "price": "87.18",
        "image": "https://images-api.printify.com/mockup/66ccaa24df56894d3d06edab/45055/1286/ete-kadal_1724689327596.jpg?camera_label=front&s=400",
        "link": "https://checkout.couturearangam.shop/ete-kadal"
    }
     
];

// Function to render products as cards
function renderProductsAsCards(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card'; // Add the product-card class

        // Create a link for the entire card
        const link = document.createElement('a');
        link.href = product.link; // Set the link
        link.target = "_blank"; // Open link in a new tab

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const cardContent = document.createElement('div');
        cardContent.className = 'product-card-content'; // Add the product-card-content class

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        // Append content to the card content
        cardContent.appendChild(name);
        cardContent.appendChild(price);

        // Append the image and content to the link
        link.appendChild(img);
        link.appendChild(cardContent);

        // Append the link to the card
        card.appendChild(link);

        // Append the card to the grid
        productGrid.appendChild(card);
    });
}

// Load products when the page loads
renderProductsAsCards(products);
