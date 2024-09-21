// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Meu Sistema de Clientes e Produtos
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/cadastro-cliente">Cadastro de Cliente</Button>
            <Button color="inherit" component={Link} to="/cadastro-produto">Cadastro de Produto</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
