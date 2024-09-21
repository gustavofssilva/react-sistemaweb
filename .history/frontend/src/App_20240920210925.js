// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';
import ListaClientes from './components/ListaClientes';
import ListaProdutos from './components/ListaProdutos';

const App = () => {
  return (
    <Router>
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
