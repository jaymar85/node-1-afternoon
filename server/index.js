const express = require('express');
const getProducts = require('./getProducts');
// const products = require('../products.json'); - moved to getProducts'
const getProduct = require('./getProduct');

const app = express();

const port = 5050;

app.get('/api/products', getProducts); //function handler moved to getProducts'
app.get('/api/product/:id', getProduct); 

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

