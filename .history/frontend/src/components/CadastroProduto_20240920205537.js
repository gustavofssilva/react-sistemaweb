// src/components/CadastroProduto.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';

const CadastroProduto = () => {
  const [model, setModel] = useState('');
  const [clientId, setClientId] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        model,
        clientId,
        serialNumber,
        orderDate,
      });
      setMessage('Produto cadastrado com sucesso!');
      setSnackOpen(true);
    } catch (err) {
      setMessage('Erro ao cadastrar o produto. Verifique os dados.');
      setSnackOpen(true);
    }
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4">Cadastro de Produto</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Modelo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <TextField
          label="ID do Cliente"
          variant="outlined"
          fullWidth
          margin="normal"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
        <TextField
          label="Numeração do Produto"
          variant="outlined"
          fullWidth
          margin="normal"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          required
        />
        <TextField
          label="Data do Pedido"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar Produto
        </Button>
      </form>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </Container>
  );
};

export default CadastroProduto;
