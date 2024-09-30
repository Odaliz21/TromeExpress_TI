const express = require('express');
const { register, login } = require('../controllers/authController');  // Controladores de autenticación
const { protect, admin } = require('../middlewares/authMiddleware');  // Importar el middleware de protección

const router = express.Router();

// Ruta pública: registrar usuario (no requiere autenticación)
router.post('/register', register);

// Ruta pública: iniciar sesión (no requiere autenticación)
router.post('/login', login);

// Ruta protegida: solo usuarios autenticados
router.get('/perfil', protect, (req, res) => {
  res.json({ message: 'Acceso autorizado, perfil del usuario' });
});

// Ruta protegida: solo administradores
router.get('/admin', protect, admin, (req, res) => {
  res.json({ message: 'Acceso autorizado, admin' });
});

module.exports = router;
