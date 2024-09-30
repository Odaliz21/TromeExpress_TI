const express = require('express');
const { createOffice, getAllOffices, getOfficeById, updateOffice, deleteOffice } = require('../controllers/officeController');

const router = express.Router();

// Rutas de oficina
router.post('/', createOffice); // Crear oficina
router.get('/', getAllOffices); // Obtener todas las oficinas
router.get('/:codOficina', getOfficeById); // Obtener oficina por ID
router.put('/:codOficina', updateOffice); // Actualizar oficina
router.delete('/:codOficina', deleteOffice); // Eliminar oficina

module.exports = router;
