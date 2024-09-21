const express = require('express'); // Importa o Express
const mongoose = require('mongoose'); // Importa o Mongoose para lidar com o MongoDB
const dotenv = require('dotenv'); // Importa o dotenv para variáveis de ambiente
const authRoutes = require('./routes/auth'); // Importa as rotas de autenticação
const clientRoutes = require('./routes/clients'); // Importa as rotas de clientes
const productRoutes = require('./routes/products'); // Importa as rotas de produtos

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express(); // Inicializa o Express

// Middleware para interpretar JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.log('Erro ao conectar ao MongoDB:', err);
});

// Rotas
app.use('/api/auth', authRoutes); // Rotas de autenticação
app.use('/api/clients', clientRoutes); // Rotas de clientes
app.use('/api/products', productRoutes); // Rotas de produtos

// Inicializa o servidor na porta definida no arquivo .env ou 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
