const express = require('express');
const { crearRol, obtenerRoles, actualizarRol, eliminarRol } = require('../controllers/rolController');
const router = express.Router();

// Rutas CRUD para Rol
router.post('/', crearRol);
router.get('/', obtenerRoles);
router.put('/:id', actualizarRol);
router.delete('/:id', eliminarRol);

module.exports = router;
