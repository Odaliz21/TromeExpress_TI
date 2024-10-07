const express = require('express');
const { crearControlEncomienda, obtenerControlesEncomienda, actualizarControlEncomienda, eliminarControlEncomienda } = require('../controllers/controlEncomiendaController');
const router = express.Router();

// Rutas CRUD para ControlEncomienda
router.post('/', crearControlEncomienda);
router.get('/', obtenerControlesEncomienda);
router.put('/:id', actualizarControlEncomienda);
router.delete('/:id', eliminarControlEncomienda);

module.exports = router;
