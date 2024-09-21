// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Sem token.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Armazena os dados do usuário na requisição
    next(); // Chama a próxima função na rota
  } catch (err) {
    res.status(400).json({ msg: 'Token inválido.' });
  }
};
