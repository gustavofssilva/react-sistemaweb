import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CadastroProduto from './components/CadastroProduto';
import ListarProdutos from './components/ListarProdutos';
import ListaClientes from './components/ListaClientes'; // Verifique se o caminho está correto

function App() {
    return (
        <Router>
            <div>
                <h1>Meu Sistema de Clientes e Produtos</h1>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastrar-produto" element={<CadastroProduto />} />
                    <Route path="/produtos" element={<ListarProdutos />} />
                    <Route path="/clientes" element={<ListaClientes />} /> {/* Rota para listar clientes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
