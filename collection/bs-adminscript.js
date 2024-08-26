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
    form.addEventListener('submit', function handleFormSubmit(event) {
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
