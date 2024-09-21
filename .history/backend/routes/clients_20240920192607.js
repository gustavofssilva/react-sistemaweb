// routes/clients.js
const express = require('express');
const Client = require('../models/Client');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // Middleware de autenticação

// Rota para cadastrar um novo cliente
router.post('/', authMiddleware, async (req, res) => {
  const { name, cnpj, email, phone, address } = req.body;

  try {
    const newClient = new Client({
      name,
      cnpj,
      email,
      phone,
      address,
    });

    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
