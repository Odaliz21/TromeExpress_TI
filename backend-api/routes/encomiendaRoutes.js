const express = require('express');
const { crearEncomienda, obtenerEncomiendas, actualizarEncomienda, eliminarEncomienda } = require('../controllers/encomiendaController');
const router = express.Router();

// Rutas CRUD para Encomienda
router.post('/', crearEncomienda);
router.get('/', obtenerEncomiendas);
router.put('/:id', actualizarEncomienda);
router.delete('/:id', eliminarEncomienda);

module.exports = router;
