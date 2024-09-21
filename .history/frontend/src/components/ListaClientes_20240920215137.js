import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListarClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/clients');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente._id}>
                        {cliente.name} - {cliente.cnpj}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListarClientes;
