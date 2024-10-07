const HistorialEncomienda = require('../models/HistorialEncomienda');

// Crear un nuevo historial de encomienda
exports.crearHistorialEncomienda = async (req, res) => {
    try {
        const historialData = req.body;
        const result = await HistorialEncomienda.crear(historialData);
        res.status(201).json({ mensaje: 'Historial de encomienda creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el historial de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al crear el historial de encomienda', error: err.message });
    }
};

// Obtener todo el historial de encomiendas
exports.obtenerHistorialEncomiendas = async (req, res) => {
    try {
        const results = await HistorialEncomienda.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener el historial de encomiendas:', err);
        res.status(500).json({ mensaje: 'Error al obtener el historial de encomiendas', error: err.message });
    }
};

// Eliminar un registro del historial de encomienda
exports.eliminarHistorialEncomienda = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await HistorialEncomienda.eliminar(id);
        res.status(200).json({ mensaje: 'Historial de encomienda eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el historial de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el historial de encomienda', error: err.message });
    }
};
