
// Initialize an empty array for bestsellingProducts
let bestsellingProducts = [];

// Function to add a new product
async function addProduct(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');
    const linkInput = document.getElementById('product-link');

    const newProduct = {
        id: `prod${Date.now()}`, // Unique ID based on timestamp
        name: nameInput.value,
        price: priceInput.value,
        image: imageInput.value,
        link: linkInput.value // Store the link
    };

    // Add the new product to the bestsellingProducts array
    bestsellingProducts.push(newProduct);
    localStorage.setItem('bestsellingProducts', JSON.stringify(bestsellingProducts));

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
    tableBody.innerHTML = ''; // Clear existing bestsellingProducts

    const storedbestsellingProducts = JSON.parse(localStorage.getItem('bestsellingProducts')) || [];

    storedbestsellingProducts.forEach(product => {
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
        row.appendChild(linkCell);
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
    const linkInput = document.getElementById('product-link');

    // Populate the form with the product data
    nameInput.value = product.name;
    priceInput.value = product.price;
    imageInput.value = product.image;
    linkInput.value = product.link; // Populate the link input

    // Add an event listener to the form submission
    const form = document.getElementById('product-form');
    form.addEventListener('submit', function handleFormSubmit(event) {
        event.preventDefault();

        // Update the product data
        product.name = nameInput.value;
        product.price = priceInput.value;
        product.image = imageInput.value;
        product.link = linkInput.value; // Update the link

        // Save the updated bestsellingProducts to localStorage
        const storedbestsellingProducts = JSON.parse(localStorage.getItem('bestsellingProducts')) || [];
        const updatedbestsellingProducts = storedbestsellingProducts.map(p => (p.id === product.id ? product : p));
        localStorage.setItem('bestsellingProducts', JSON.stringify(updatedbestsellingProducts));

        // Remove the event listener to avoid multiple submissions
        form.removeEventListener('submit', handleFormSubmit);

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
    });
}

// Function to delete a product
function deleteProduct(productId) {
    // Get the stored bestsellingProducts from localStorage
    const storedbestsellingProducts = JSON.parse(localStorage.getItem('bestsellingProducts')) || [];

    // Filter out the product to be deleted
    const updatedbestsellingProducts = storedbestsellingProducts.filter(p => p.id !== productId);

    // Save the updated bestsellingProducts to localStorage
    localStorage.setItem('bestsellingProducts', JSON.stringify(updatedbestsellingProducts));

    // Show success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Product deleted successfully!`;

    // Render the updated product table
    renderProductTable();
}

// Add event listener for the form submission
document.getElementById('product-form').addEventListener('submit', addProduct);

// Load initial bestsellingProducts from local storage or use an empty array
const storedbestsellingProducts = JSON.parse(localStorage.getItem('bestsellingProducts'));
if (storedbestsellingProducts) {
    bestsellingProducts = storedbestsellingProducts;
}

// Render the initial product table
renderProductTable();
