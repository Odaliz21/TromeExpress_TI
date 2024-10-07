const StockAlmacen = require('../models/StockAlmacen');

// Crear un nuevo registro de stock en almacén
exports.crearStockAlmacen = async (req, res) => {
    try {
        const stockData = req.body;
        const result = await StockAlmacen.crear(stockData);
        res.status(201).json({ mensaje: 'Stock en almacén creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el stock en almacén:', err);
        res.status(500).json({ mensaje: 'Error al crear el stock en almacén', error: err.message });
    }
};

// Obtener todo el stock en almacén
exports.obtenerStockAlmacen = async (req, res) => {
    try {
        const results = await StockAlmacen.obtenerTodo();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener el stock en almacén:', err);
        res.status(500).json({ mensaje: 'Error al obtener el stock en almacén', error: err.message });
    }
};

// Actualizar un registro de stock en almacén
exports.actualizarStockAlmacen = async (req, res) => {
    try {
        const codStock = req.params.id;
        const stockData = req.body;
        const result = await StockAlmacen.actualizar(codStock, stockData);
        res.status(200).json({ mensaje: 'Stock en almacén actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el stock en almacén:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el stock en almacén', error: err.message });
    }
};

// Eliminar un registro de stock en almacén
exports.eliminarStockAlmacen = async (req, res) => {
    try {
        const codStock = req.params.id;
        const result = await StockAlmacen.eliminar(codStock);
        res.status(200).json({ mensaje: 'Stock en almacén eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el stock en almacén:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el stock en almacén', error: err.message });
    }
};
