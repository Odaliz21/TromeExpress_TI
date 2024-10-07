const Ruta = require('../models/Ruta');

// Crear una nueva ruta
exports.crearRuta = async (req, res) => {
    try {
        const rutaData = req.body;
        const result = await Ruta.crear(rutaData);
        res.status(201).json({ mensaje: 'Ruta creada exitosamente', result });
    } catch (err) {
        console.error('Error al crear la ruta:', err);
        res.status(500).json({ mensaje: 'Error al crear la ruta', error: err.message });
    }
};

// Obtener todas las rutas
exports.obtenerRutas = async (req, res) => {
    try {
        const results = await Ruta.obtenerTodas();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener las rutas:', err);
        res.status(500).json({ mensaje: 'Error al obtener las rutas', error: err.message });
    }
};

// Actualizar una ruta
exports.actualizarRuta = async (req, res) => {
    try {
        const codRuta = req.params.id;
        const rutaData = req.body;
        const result = await Ruta.actualizar(codRuta, rutaData);
        res.status(200).json({ mensaje: 'Ruta actualizada exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar la ruta:', err);
        res.status(500).json({ mensaje: 'Error al actualizar la ruta', error: err.message });
    }
};

// Eliminar una ruta
exports.eliminarRuta = async (req, res) => {
    try {
        const codRuta = req.params.id;
        const result = await Ruta.eliminar(codRuta);
        res.status(200).json({ mensaje: 'Ruta eliminada exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar la ruta:', err);
        res.status(500).json({ mensaje: 'Error al eliminar la ruta', error: err.message });
    }
};
