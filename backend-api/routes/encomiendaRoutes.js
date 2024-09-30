const express = require('express');
const {
  createEncomienda,
  getAllEncomiendas,
  getEncomiendaById,
  updateEncomienda,
  deleteEncomienda
} = require('../controllers/encomiendaController');

const router = express.Router();

// Ruta para crear una nueva encomienda
router.post('/', createEncomienda);

// Ruta para obtener todas las encomiendas
router.get('/', getAllEncomiendas);

// Ruta para obtener una encomienda por su código
router.get('/:codEncomienda', getEncomiendaById);

// Ruta para actualizar una encomienda
router.put('/:codEncomienda', updateEncomienda);

// Ruta para eliminar una encomienda
router.delete('/:codEncomienda', deleteEncomienda);

module.exports = router;
