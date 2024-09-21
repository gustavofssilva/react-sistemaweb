// src/components/CadastroProduto.js

import React, { useState } from 'react';
import axios from 'axios';

const CadastroProduto = () => {
  const [model, setModel] = useState('');
  const [clientId, setClientId] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        model,
        clientId,
        serialNumber,
        orderDate,
      });
      setSuccess('Produto cadastrado com sucesso!');
      setError('');
    } catch (err) {
      setError('Erro ao cadastrar o produto. Verifique os dados.');
      console.error('Erro ao cadastrar produto:', err);
    }
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Modelo"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ID do Cliente"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Numeração do Produto"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          required
        />
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
        />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
