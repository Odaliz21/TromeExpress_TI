const express = require('express');
const { crearStockAlmacen, obtenerStockAlmacen, actualizarStockAlmacen, eliminarStockAlmacen } = require('../controllers/stockAlmacenController');
const router = express.Router();

// Rutas CRUD para StockAlmacen
router.post('/', crearStockAlmacen);
router.get('/', obtenerStockAlmacen);
router.put('/:id', actualizarStockAlmacen);
router.delete('/:id', eliminarStockAlmacen);

module.exports = router;
