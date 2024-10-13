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
        "name": "Women’s Puffer Jacket",
        "price": "86.72",
        "image": "https://images-api.printify.com/mockup/670a2636f6d553e2590e3dba/103811/101692/womens-puffer-jacket.jpg?camera_label=front&revision=1728730404900&s=2048",
        "link": "https://checkout.couturearangam.shop/women-puffer-jacket"
    },
    {
        "id": "prod6",
        "name": "Men's Puffer Jacket",
        "price": "98.97",
        "image": "https://images-api.printify.com/mockup/670a24ae402087af9d0906f5/77835/36537/mens-puffer-jacket.jpg?camera_label=front&revision=1728730405119&s=2048",
        "link": "https://checkout.couturearangam.shop/men-puffer-jacket"
    },
 {
        "id": "prod7",
        "name": "Sweatshirt",
        "price": "58.55",
        "image": "https://images-api.printify.com/mockup/670a484c402087af9d091138/63222/4700/unisex-sweatshirt.jpg?camera_label=front&revision=1728730405720&s=2048",
        "link": "https://checkout.couturearangam.shop/sweatshirt-agif"
    },
 {
        "id": "prod8",
        "name": "Checked Men's Shirt",
        "price": "57.50",
        "image": "https://images-api.printify.com/mockup/670a4ea441cbbfc3330ac293/95124/78995/checked-mens-shirt-fall-clothing-best-quality.jpg?camera_label=front&revision=1728728903876&s=2048",
        "link": "https://checkout.couturearangam.shop/shirt-checked"
    },
{
        "id": "prod9",
        "name": "Athletic Joggers",
        "price": "45.50",
        "image": "https://images-api.printify.com/mockup/670a513a75c39463080f14b2/72928/16656/athletic-joggers.jpg?camera_label=front&revision=1728730405365&s=2048",
        "link": "https://checkout.couturearangam.shop/aj-black"
    },
{
        "id": "prod10",
        "name": "Athletic Joggers",
        "price": "45.50",
        "image": "https://images-api.printify.com/mockup/670a51f5c8b552be600eb557/72928/16656/athletic-joggers-soft-and-stylish-comfort-pants.jpg?camera_label=front&revision=1728729647382&s=2048",
        "link": "https://checkout.couturearangam.shop/aj-white"
    },
{
        "id": "prod11",
        "name": "Men's Classic Sneakers",
        "price": "67.72",
        "image": "https://images-api.printify.com/mockup/670a53e60acfb4c82b09fcde/44250/80949/mens-classic-sneakers.jpg?camera_label=both-angle&revision=1728730405624&s=2048",
        "link": "https://checkout.couturearangam.shop/mens-classic-sneakers-camel-s"
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

// Scroll functionality
const productGrid = document.getElementById('product-grid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    productGrid.scrollBy({
        left: -productGrid.offsetWidth,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    productGrid.scrollBy({
        left: productGrid.offsetWidth,
        behavior: 'smooth'
    });
});
