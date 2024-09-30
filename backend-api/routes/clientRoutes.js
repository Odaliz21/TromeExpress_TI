const express = require('express');
const { createClient, getAllClients, getClientById, updateClient, deleteClient } = require('../controllers/clientController');

const router = express.Router();

// Rutas de cliente
router.post('/', createClient); // Crear cliente
router.get('/', getAllClients); // Obtener todos los clientes
router.get('/:codCliente', getClientById); // Obtener cliente por ID
router.put('/:codCliente', updateClient); // Actualizar cliente
router.delete('/:codCliente', deleteClient); // Eliminar cliente

module.exports = router;
