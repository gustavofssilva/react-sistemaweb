const mongoose = require('mongoose');

// Definindo o esquema do produto
const productSchema = new mongoose.Schema({
    model: { type: String, required: true },  // Nome do produto
    serialNumber: { type: String, required: true, unique: true }, // Número de série, deve ser único
    orderDate: { type: Date, required: true }, // Data do pedido
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true } // ID do cliente, deve existir
});

// Criando o modelo a partir do esquema
const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Exportando o modelo
