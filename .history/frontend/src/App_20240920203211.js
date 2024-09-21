// src/App.js

import React from 'react';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';

const App = () => {
  return (
    <div>
      <h1>Meu Sistema de Clientes e Produtos</h1>
      <Login />
      <CadastroCliente />
      <CadastroProduto />
    </div>
  );
};

export default App;
