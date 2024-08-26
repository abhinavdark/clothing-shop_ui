// Function to add a new product
async function addProduct(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');

    const newProduct = {
        id: `prod${Date.now()}`, // Unique ID based on timestamp
        name: nameInput.value,
        price: priceInput.value,
        image: imageInput.value
    };

    // Add the new product to the products array
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    // Show success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Product "${newProduct.name}" added successfully!`;

    // Clear input fields
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';

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
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

// Function to edit a product
function editProduct(product) {
    // Implement edit functionality here
    console.log('Editing product:', product);
}

// Function to delete a product
function deleteProduct(productId) {
    // Implement delete functionality here
    console.log('Deleting product with ID:', productId);
}

// Add event listener for the form submission
document.getElementById('product-form').addEventListener('submit', addProduct);

// Render the initial product table
renderProductTable();
