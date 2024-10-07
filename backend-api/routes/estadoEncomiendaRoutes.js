const express = require('express');
const { crearEstadoEncomienda, obtenerEstadosEncomienda, actualizarEstadoEncomienda, eliminarEstadoEncomienda } = require('../controllers/estadoEncomiendaController');
const router = express.Router();

// Rutas CRUD para EstadoEncomienda
router.post('/', crearEstadoEncomienda);
router.get('/', obtenerEstadosEncomienda);
router.put('/:id', actualizarEstadoEncomienda);
router.delete('/:id', eliminarEstadoEncomienda);

module.exports = router;
