
// Initialize an empty array for products
let products = [];

// Function to add a new product
async function addProduct(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');
    const linkInput = document.getElementById('product-link'); // New input for link

    const newProduct = {
        id: `prod${Date.now()}`, // Unique ID based on timestamp
        name: nameInput.value,
        price: priceInput.value,
        image: imageInput.value,
        link: linkInput.value // Store the link
    };

    // Add the new product to the products array
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    // Show success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Product "${newProduct.name}" added successfully!`;

    // Clear input fields
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    linkInput.value = ''; // Clear the link input

    // Render the updated product list
    renderProductTable();
}

// Function to render the product table
function renderProductTable() {
    const productTable = document.getElementById('product-table');
    const tableBody = productTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing products

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    storedProducts.forEach(product => {
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

// Function to edit a product
function editProduct(product) {
    // Get the form inputs
    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');
    const linkInput = document.getElementById('product-link'); // New input for link

    // Populate the form with the product data
    nameInput.value = product.name;
    priceInput.value = product.price;
    imageInput.value = product.image;
    linkInput.value = product.link; // Populate the link input

    // Add an event listener to the form submission
    const form = document.getElementById('product-form');
    
    // Remove any existing event listener to avoid stacking
    form.removeEventListener('submit', handleFormSubmit);
    
    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        // Update the product data
        product.name = nameInput.value;
        product.price = priceInput.value;
        product.image = imageInput.value;
        product.link = linkInput.value; // Update the link

        // Save the updated products to localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = storedProducts.map(p => (p.id === product.id ? product : p));
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Show success message
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = `Product "${product.name}" updated successfully!`;

        // Clear the form
        nameInput.value = '';
        priceInput.value = '';
        imageInput.value = '';
        linkInput.value = ''; // Clear the link input

        // Render the updated product table
        renderProductTable();
    }
}

// Function to delete a product
function deleteProduct(productId) {
    // Get the stored products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Filter out the product to be deleted
    const updatedProducts = storedProducts.filter(p => p.id !== productId);

    // Save the updated products to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Show success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Product deleted successfully!`;

    // Render the updated product table
    renderProductTable();
}

// Add event listener for the form submission
document.getElementById('product-form').addEventListener('submit', addProduct);

// Load initial products from local storage or use an empty array
const storedProducts = JSON.parse(localStorage.getItem('products'));
if (storedProducts) {
    products = storedProducts;
}

// Render the initial product table
renderProductTable();
