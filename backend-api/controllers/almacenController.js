const Almacen = require('../models/Almacen');

// Crear un nuevo almacén
exports.crearAlmacen = async (req, res) => {
    try {
        const almacenData = req.body;
        const result = await Almacen.crear(almacenData);
        res.status(201).json({ mensaje: 'Almacén creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el almacén:', err);
        res.status(500).json({ mensaje: 'Error al crear el almacén', error: err.message });
    }
};

// Obtener todos los almacenes
exports.obtenerAlmacenes = async (req, res) => {
    try {
        const results = await Almacen.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener almacenes:', err);
        res.status(500).json({ mensaje: 'Error al obtener almacenes', error: err.message });
    }
};

// Actualizar un almacén
exports.actualizarAlmacen = async (req, res) => {
    try {
        const codAlmacen = req.params.id;
        const almacenData = req.body;
        const result = await Almacen.actualizar(codAlmacen, almacenData);
        res.status(200).json({ mensaje: 'Almacén actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el almacén:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el almacén', error: err.message });
    }
};

// Eliminar un almacén
exports.eliminarAlmacen = async (req, res) => {
    try {
        const codAlmacen = req.params.id;
        const result = await Almacen.eliminar(codAlmacen);
        res.status(200).json({ mensaje: 'Almacén eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el almacén:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el almacén', error: err.message });
    }
};
