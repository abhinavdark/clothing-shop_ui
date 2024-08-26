const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

// Endpoint to get products
app.get('/api/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(JSON.parse(data));
    });
});

// Endpoint to add a product
app.post('/api/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        const newProduct = { id: `prod${Date.now()}`, ...req.body };
        products.push(newProduct);
        fs.writeFile('products.json', JSON.stringify(products), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.send(newProduct);
        });
    });
});

// Endpoint to update a product
app.put('/api/products/:id', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        const index = products.findIndex(p => p.id === req.params.id);
        if (index !== -1) {
            products[index] = { ...products[index], ...req.body };
            fs.writeFile('products.json', JSON.stringify(products), (err) => {
                if (err) {
                    return res.status(500).send('Error writing file');
                }
                res.send(products[index]);
            });
        } else {
            res.status(404).send('Product not found');
        }
    });
});

// Endpoint to delete a product
app.delete('/api/products/:id', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const products = JSON.parse(data);
        const updatedProducts = products.filter(p => p.id !== req.params.id);
        fs.writeFile('products.json', JSON.stringify(updatedProducts), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.send({ message: 'Product deleted successfully' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
