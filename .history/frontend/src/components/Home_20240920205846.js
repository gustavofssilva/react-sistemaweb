// src/components/Home.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4">Bem-vindo ao Sistema de Clientes e Produtos!</Typography>
      <Typography variant="body1">
        Faça login para acessar as funcionalidades.
      </Typography>
    </Container>
  );
};

export default Home;
