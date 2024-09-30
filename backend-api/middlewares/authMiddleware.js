const jwt = require('jsonwebtoken');

// Middleware para proteger rutas
const protect = (req, res, next) => {
  let token;

  // Verificar si el header de autorización está presente y comienza con "Bearer"
  if (
    req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Obtener el token del header
      token = req.headers.authorization.split(' ')[1];
      
      // Verificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Agregar el usuario decodificado al request (req.user)
      req.user = decoded;
      
      // Continuar con la siguiente función
      return next();
    } catch (error) {
      console.error('Error al verificar el token:', error);
      // Si hay un error, responde y detén el flujo
      return res.status(401).json({ message: 'Token inválido, autorización denegada' });
    }
  }

  // Si no hay token, enviar una respuesta de error
  if (!token) {
    return res.status(401).json({ message: 'No autorizado, no se encontró el token' });
  }
};

// Middleware para verificar si el usuario es administrador
const admin = (req, res, next) => {
  // Verificar si el usuario existe y si tiene el rol de 'Admin'
  if (req.user && req.user.role === 'Admin') {
    return next();
  } else {
    // Si no es admin, enviar una respuesta de acceso denegado
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol de administrador' });
  }
};

module.exports = { protect, admin };
