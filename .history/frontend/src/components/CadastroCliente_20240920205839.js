// src/components/CadastroCliente.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';

const CadastroCliente = () => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/clients', {
        name,
        cnpj,
        email,
        phone,
        address,
      });
      setMessage('Cliente cadastrado com sucesso!');
      setSnackOpen(true);
    } catch (err) {
      setMessage('Erro ao cadastrar o cliente. Verifique os dados.');
      setSnackOpen(true);
    }
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4">Cadastro de Cliente</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="CNPJ"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          label="Endereço"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar Cliente
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

export default CadastroCliente;
