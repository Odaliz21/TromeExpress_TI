const express = require('express');
const { crearRuta, obtenerRutas, actualizarRuta, eliminarRuta } = require('../controllers/rutaController');
const router = express.Router();

// Rutas CRUD para Ruta
router.post('/', crearRuta);
router.get('/', obtenerRutas);
router.put('/:id', actualizarRuta);
router.delete('/:id', eliminarRuta);

module.exports = router;
