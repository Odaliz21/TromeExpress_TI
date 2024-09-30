const jwt = require('jsonwebtoken');

// Función para generar un token JWT
const generateToken = (codUsuario, role) => {
  return jwt.sign({ codUsuario, role }, process.env.JWT_SECRET, { expiresIn: '1h' });  // Token expira en 1 hora
};

module.exports = generateToken;
