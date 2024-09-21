// routes/products.js
const express = require('express');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Rota para cadastrar um novo produto
router.post('/', authMiddleware, async (req, res) => {
  const { model, clientId, serialNumber, orderDate } = req.body;

  try {
    const newProduct = new Product({
      model,
      clientId,
      serialNumber,
      orderDate,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para listar todos os produtos
router.get('/', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find().populate('clientId'); // Popula os dados do cliente
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
