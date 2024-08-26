// Function to edit a product
function editProduct(product) {
    // Get the form inputs
    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');
    const imageInput = document.getElementById('product-image');

    // Populate the form with the product data
    nameInput.value = product.name;
    priceInput.value = product.price;
    imageInput.value = product.image;

    // Add an event listener to the form submission
    const form = document.getElementById('product-form');
    form.addEventListener('submit', function handleFormSubmit(event) {
        event.preventDefault();

        // Update the product data
        product.name = nameInput.value;
        product.price = priceInput.value;
        product.image = imageInput.value;

        // Save the updated products to localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = storedProducts.map(p => (p.id === product.id ? product : p));
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Remove the event listener to avoid multiple submissions
        form.removeEventListener('submit', handleFormSubmit);

        // Show success message
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = `Product "${product.name}" updated successfully!`;

        // Clear the form
        nameInput.value = '';
        priceInput.value = '';
        imageInput.value = '';

        // Render the updated product table
        renderProductTable();
    });
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
