const express = require('express');
const { crearAlmacen, obtenerAlmacenes, actualizarAlmacen, eliminarAlmacen } = require('../controllers/almacenController');
const router = express.Router();

// Rutas CRUD para Almacén
router.post('/', crearAlmacen);
router.get('/', obtenerAlmacenes);
router.put('/:id', actualizarAlmacen);
router.delete('/:id', eliminarAlmacen);

module.exports = router;
