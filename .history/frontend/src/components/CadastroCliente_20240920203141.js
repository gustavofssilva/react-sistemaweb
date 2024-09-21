// src/components/CadastroCliente.js

import React, { useState } from 'react';
import axios from 'axios';

const CadastroCliente = () => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Obter token do localStorage

    try {
      await axios.post('http://localhost:5000/api/clients', {
        name,
        cnpj,
        email,
        phone,
        address
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Cliente cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="CNPJ" onChange={(e) => setCnpj(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Endereço" onChange={(e) => setAddress(e.target.value)} />
      <button type="submit">Cadastrar Cliente</button>
    </form>
  );
};

export default CadastroCliente;
