// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import CadastroCliente from './components/CadastroCliente';
import CadastroProduto from './components/CadastroProduto';
import Home from './components/Home'; // Crie este componente para a página inicial

const App = () => {
  return (
    <Router>
      <div>
        <h1>Meu Sistema de Clientes e Produtos</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro-cliente" component={CadastroCliente} />
          <Route path="/cadastro-produto" component={CadastroProduto} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
