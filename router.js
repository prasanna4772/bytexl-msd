const express = require('express');
const router = express.Router();


let products = [
  { id: 1, name: 'Sample Product', price: 19.99 },
];


router.get('/', (req, res) => {
  res.json(products);
});


router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

module.exports = router;
