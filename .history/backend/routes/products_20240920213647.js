const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Rota para cadastrar produtos
router.post('/', async (req, res) => {
    const { model, serialNumber, orderDate, clientId } = req.body;

    try {
        const newProduct = new Product({ model, serialNumber, orderDate, clientId });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        res.status(400).json({ message: 'Erro ao cadastrar produto', error: error.message });
    }
});

module.exports = router;
