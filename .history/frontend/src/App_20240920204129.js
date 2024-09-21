// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Meu Sistema de Clientes e Produtos</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
