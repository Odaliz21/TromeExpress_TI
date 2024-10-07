const express = require('express');
const { crearUsuario, iniciarSesion, obtenerUsuarios, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarioController');
const router = express.Router();

// Rutas CRUD para Usuario
router.post('/register', crearUsuario);
router.post('/login', iniciarSesion);
router.get('/', obtenerUsuarios);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;
