import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';
import ListaClientes from './components/ListaClientes';
import ListaProdutos from './components/ListaProdutos';
import ListarClientes from './ListarClientes';
import { AppBar, Toolbar, Button } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/cadastro-cliente">Cadastrar Cliente</Button>
          <Button color="inherit" component={Link} to="/cadastro-produto">Cadastrar Produto</Button>
          <Button color="inherit" component={Link} to="/lista-clientes">Lista de Clientes</Button>
          <Button color="inherit" component={Link} to="/lista-produtos">Lista de Produtos</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/lista-clientes" element={<ListaClientes />} />
        <Route path="/lista-produtos" element={<ListaProdutos />} />
      </Routes>
    </Router>
  );
};

export default App;
