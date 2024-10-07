const ControlEncomienda = require('../models/ControlEncomienda');

// Crear un nuevo control de encomienda
exports.crearControlEncomienda = async (req, res) => {
    try {
        const controlData = req.body;
        const result = await ControlEncomienda.crear(controlData);
        res.status(201).json({ mensaje: 'Control de encomienda creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el control de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al crear el control de encomienda', error: err.message });
    }
};

// Obtener todos los controles de encomienda
exports.obtenerControlesEncomienda = async (req, res) => {
    try {
        const results = await ControlEncomienda.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener los controles de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al obtener los controles de encomienda', error: err.message });
    }
};

// Actualizar un control de encomienda
exports.actualizarControlEncomienda = async (req, res) => {
    try {
        const id = req.params.id;
        const controlData = req.body;
        const result = await ControlEncomienda.actualizar(id, controlData);
        res.status(200).json({ mensaje: 'Control de encomienda actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el control de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el control de encomienda', error: err.message });
    }
};

// Eliminar un control de encomienda
exports.eliminarControlEncomienda = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ControlEncomienda.eliminar(id);
        res.status(200).json({ mensaje: 'Control de encomienda eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el control de encomienda:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el control de encomienda', error: err.message });
    }
};
