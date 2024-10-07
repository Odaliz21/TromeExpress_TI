const EstadoEncomienda = require('../models/EstadoEncomienda');

// Crear un nuevo estado de encomienda
exports.crearEstadoEncomienda = async (req, res) => {
    try {
        const estadoData = req.body;
        const result = await EstadoEncomienda.crear(estadoData);
        res.status(201).json({ mensaje: 'Estado de encomienda creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el estado de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al crear el estado de encomienda', error: err.message });
    }
};

// Obtener todos los estados de encomienda
exports.obtenerEstadosEncomienda = async (req, res) => {
    try {
        const results = await EstadoEncomienda.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener los estados de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al obtener los estados de encomienda', error: err.message });
    }
};

// Actualizar un estado de encomienda
exports.actualizarEstadoEncomienda = async (req, res) => {
    try {
        const idEstado = req.params.id;
        const estadoData = req.body;
        const result = await EstadoEncomienda.actualizar(idEstado, estadoData);
        res.status(200).json({ mensaje: 'Estado de encomienda actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el estado de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el estado de encomienda', error: err.message });
    }
};

// Eliminar un estado de encomienda
exports.eliminarEstadoEncomienda = async (req, res) => {
    try {
        const idEstado = req.params.id;
        const result = await EstadoEncomienda.eliminar(idEstado);
        res.status(200).json({ mensaje: 'Estado de encomienda eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el estado de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el estado de encomienda', error: err.message });
    }
};
