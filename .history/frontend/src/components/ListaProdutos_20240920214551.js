// src/components/ListaProdutos.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Lista de Produtos</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Modelo</TableCell>
              <TableCell>CNPJ do Cliente</TableCell>
              <TableCell>Número de Série</TableCell>
              <TableCell>Data do Pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto._id}>
                <TableCell>{produto.model}</TableCell>
                <TableCell>{produto.clientId ? produto.clientId : 'Sem cliente'}</TableCell>
                <TableCell>{produto.serialNumber}</TableCell>
                <TableCell>{new Date(produto.orderDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListaProdutos;
