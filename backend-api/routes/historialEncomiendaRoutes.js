const express = require('express');
const { crearHistorialEncomienda, obtenerHistorialEncomiendas, eliminarHistorialEncomienda } = require('../controllers/historialEncomiendaController');
const router = express.Router();

// Ruta para crear un nuevo historial de encomienda
router.post('/', crearHistorialEncomienda);

// Ruta para obtener todo el historial de encomiendas
router.get('/', obtenerHistorialEncomiendas);

// Ruta para eliminar un historial de encomienda
router.delete('/:id', eliminarHistorialEncomienda);

module.exports = router;
