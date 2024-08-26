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
}

// Add event listener for the form submission
document.getElementById('product-form').addEventListener('submit', addProduct);
