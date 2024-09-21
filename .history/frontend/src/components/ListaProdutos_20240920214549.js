import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListarProdutos = () => {
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
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {produtos.map(produto => (
                    <li key={produto._id}>
                        {produto.model} - {produto.serialNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListarProdutos;
