const Encomienda = require('../models/Encomienda');

// Crear una nueva encomienda
exports.crearEncomienda = async (req, res) => {
    try {
        const encomiendaData = req.body;
        const result = await Encomienda.crear(encomiendaData);
        res.status(201).json({ mensaje: 'Encomienda creada exitosamente', result });
    } catch (err) {
        console.error('Error al crear la encomienda:', err);
        res.status(500).json({ mensaje: 'Error al crear la encomienda', error: err.message });
    }
};

// Obtener todas las encomiendas
exports.obtenerEncomiendas = async (req, res) => {
    try {
        const results = await Encomienda.obtenerTodas();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener las encomiendas:', err);
        res.status(500).json({ mensaje: 'Error al obtener las encomiendas', error: err.message });
    }
};

// Actualizar una encomienda
exports.actualizarEncomienda = async (req, res) => {
    try {
        const codEncomienda = req.params.id;
        const encomiendaData = req.body;
        const result = await Encomienda.actualizar(codEncomienda, encomiendaData);
        res.status(200).json({ mensaje: 'Encomienda actualizada exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar la encomienda:', err);
        res.status(500).json({ mensaje: 'Error al actualizar la encomienda', error: err.message });
    }
};

// Eliminar una encomienda
exports.eliminarEncomienda = async (req, res) => {
    try {
        const codEncomienda = req.params.id;
        const result = await Encomienda.eliminar(codEncomienda);
        res.status(200).json({ mensaje: 'Encomienda eliminada exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar la encomienda:', err);
        res.status(500).json({ mensaje: 'Error al eliminar la encomienda', error: err.message });
    }
};
