// Function to load products from the server and render them
async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    renderProductTable(products); // Render in table format for admin
    renderProductsAsCards(products); // Render in card format for the main page
}

// Function to render the product table in the admin panel
function renderProductTable(products) {
    const productTable = document.getElementById('product-table');
    const tableBody = productTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${product.price}`;

        const imageCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.width = 50;
        imageCell.appendChild(img);

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = product.link; // Set the link
        link.textContent = "View Product"; // Link text
        link.target = "_blank"; // Open link in a new tab
        linkCell.appendChild(link);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editProduct(product));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProduct(product.id));

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(imageCell);
        row.appendChild(linkCell); // Append the link cell
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

// Function to render products as cards on the main page
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

// Function to add a new product
async function addProduct(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');
    const linkInput = document.getElementById('product-link'); // New input for link

    const newProduct = {
        name: nameInput.value,
        price: priceInput.value,
        image: imageInput.value,
        link: linkInput.value // Store the link
    };

    // Send a POST request to add the product
    await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    });

    // Clear input fields
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    linkInput.value = ''; // Clear the link input

    // Reload products
    loadProducts();
}

// Function to edit a product
function editProduct(product) {
    // Populate the form with the product data
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-image').value = product.image;
    document.getElementById('product-link').value = product.link; // Populate the link input

    // Update the product on form submission
    const form = document.getElementById('product-form');
    form.onsubmit = async function(event) {
        event.preventDefault();
        
        const updatedProduct = {
            name: document.getElementById('product-name').value,
            price: document.getElementById('product-price').value,
            image: document.getElementById('product-image').value,
            link: document.getElementById('product-link').value // Update the link
        };

        // Send a PUT request to update the product
        await fetch(`/api/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });

        // Reload products
        loadProducts();
    };
}

// Function to delete a product
async function deleteProduct(productId) {
    // Send a DELETE request to remove the product
    await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    });

    // Reload products
    loadProducts();
}

// Load products on page load
loadProducts();
