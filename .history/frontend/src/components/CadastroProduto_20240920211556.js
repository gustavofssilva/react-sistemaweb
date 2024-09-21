// src/components/CadastroProduto.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CadastroProduto = () => {
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [clientId, setClientId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', { model, serialNumber, orderDate, clientId });
      navigate('/lista-produtos'); // Redireciona após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center">Cadastrar Produto</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Modelo"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Número de Série"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Data do Pedido"
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="ID do Cliente"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </form>
    </Container>
  );
};

export default CadastroProduto;
