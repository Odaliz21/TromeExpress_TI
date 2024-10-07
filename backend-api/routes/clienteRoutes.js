const express = require('express');
const { crearCliente, obtenerClientes, actualizarCliente, eliminarCliente } = require('../controllers/clienteController');
const router = express.Router();

// Rutas CRUD para Cliente
router.post('/', crearCliente);
router.get('/', obtenerClientes);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;
