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

// routes/products.js

// Rota para atualizar um produto existente
router.put('/:id', authMiddleware, async (req, res) => {
    const { model, clientId, serialNumber, orderDate } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { model, clientId, serialNumber, orderDate },
        { new: true, runValidators: true } // Retorna o novo documento e aplica validadores
      );
  
      if (!updatedProduct) {
        return res.status(404).send('Produto não encontrado');
      }
  
      res.json(updatedProduct);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  });

  // routes/products.js

// Rota para excluir um produto existente
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  
      if (!deletedProduct) {
        return res.status(404).send('Produto não encontrado');
      }
  
      res.json({ message: 'Produto excluído com sucesso' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  });
  
  

module.exports = router;
