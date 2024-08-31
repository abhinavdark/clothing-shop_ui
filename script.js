// Sample JSON data for demonstration
const products = [
    {
        "id": "prod1",
        "name": "Men's Mûr d'Été Shirt",
        "price": "84.91",
        "image": "https://couturearangam.shop/assets/img/summer-sale.png",
        "link": "https://checkout.couturearangam.shop/mens-mur-dete-shirt"
    },
    {
        "id": "prod2",
        "name": "Mûr d'Été T-shirt",
        "price": "36.60",
        "image": "https://images-api.printify.com/mockup/66cc998e8a0ec50bad05dc78/43111/634/mur-dete-t-shirt_1724684718993.jpg?camera_label=flat-front&s=400",
        "link": "https://checkout.couturearangam.shop/Mur-ddete-T-shirt"
    },
    {
        "id": "prod3",
        "name": "Pagal couleur",
        "price": "43.56",
        "image": "https://images-api.printify.com/mockup/66cca6bcaeeee15fb002cc6a/43111/3003/pagal-couleur_1724688566613.jpg?camera_label=on-person-front&s=400",
        "link": "https://checkout.couturearangam.shop/pagal-couleur"
    },
    {
        "id": "prod4",
        "name": "Été Kadal",
        "price": "87.18",
        "image": "https://images-api.printify.com/mockup/66ccaa24df56894d3d06edab/45055/1286/ete-kadal_1724689327596.jpg?camera_label=front&s=400",
        "link": "https://checkout.couturearangam.shop/ete-kadal"
    },
    {
        "id": "prod5",
        "name": "Jallikatté Men's Denim Jacket",
        "price": "79.83",
        "image": "https://images-api.printify.com/mockup/66d0b386c72614533e04066c/104695/101894/jallikatte-mens-denim-jacket_1724953555344.jpg?camera_label=person-front&s=400",
        "link": "https://checkout.couturearangam.shop/jallikatte-men-denim-jacket"
    },
    {
        "id": "prod6",
        "name": "Madrasia checked Women's Skirt",
        "price": "49.83",
        "image": "https://images-api.printify.com/mockup/66c16d7cba3fd9e1d9037d2c/43205/699/madrasia-checked-womens-skirt_1723953946533.jpg?camera_label=front&s=400",
        "link": "https://checkout.couturearangam.shop/madrasia-checked-womens-skirt"
    },
    {
        "id": "prod7",
        "name": "Sungoudage corp tee",
        "price": "59.83",
        "image": "https://images-api.printify.com/mockup/66d0ad65223c8d766e021f6d/73380/19274/sungoudage-cop-tee_1724952254031.jpg?camera_label=on-person-front&s=400",
        "link": "https://checkout.couturearangam.shop/Sungoudage-corp-tee"
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
document.addEventListener('DOMContentLoaded', () => {
    renderProductsAsCards(products);
});

// Scroll functionality
const productGrid = document.getElementById('product-grid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0; // Track the current product index

function updateButtons() {
    prevBtn.disabled = currentIndex === 0; // Disable previous button if at the start
    nextBtn.disabled = currentIndex >= products.length - 1; // Disable next button if at the end
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous product
        productGrid.scrollBy({
            left: -productGrid.offsetWidth / products.length, // Scroll left by one product's width
            behavior: 'smooth'
        });
        updateButtons(); // Update button states
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < products.length - 1) {
        currentIndex++; // Move to the next product
        productGrid.scrollBy({
            left: productGrid.offsetWidth / products.length, // Scroll right by one product's width
            behavior: 'smooth'
        });
        updateButtons(); // Update button states
    }
});

// Initialize button states
updateButtons();
