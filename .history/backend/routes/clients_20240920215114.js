// routes/clients.js
const express = require('express');
const Client = require('../models/Client'); // Importa o modelo de cliente
const authMiddleware = require('../middleware/auth'); // Middleware de autenticação
const router = express.Router();

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

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar clientes' });
    }
});




module.exports = router; // Exporta as rotas
