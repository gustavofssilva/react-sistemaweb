// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMessage('Login realizado com sucesso!');
      setSnackOpen(true);
      // Redirecionar ou atualizar a interface após login
    } catch (err) {
      setMessage('Erro ao fazer login. Verifique suas credenciais.');
      setSnackOpen(true);
    }
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
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
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
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

export default Login;
