// src/components/CadastroProduto.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroProduto = () => {
  const [model, setModel] = useState('');
  const [clientId, setClientId] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/clients', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setClientes(response.data);
    };

    fetchClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/products', {
        model,
        clientId,
        serialNumber,
        orderDate
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Modelo" onChange={(e) => setModel(e.target.value)} />
      <select onChange={(e) => setClientId(e.target.value)}>
        <option value="">Selecione um cliente</option>
        {clientes.map(cliente => (
          <option key={cliente._id} value={cliente._id}>{cliente.name}</option>
        ))}
      </select>
      <input type="text" placeholder="Número de Série" onChange={(e) => setSerialNumber(e.target.value)} />
      <input type="date" onChange={(e) => setOrderDate(e.target.value)} />
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default CadastroProduto;
