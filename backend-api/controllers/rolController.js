const Rol = require('../models/Rol');

// Crear un nuevo rol
exports.crearRol = async (req, res) => {
    try {
        const rolData = req.body;
        const result = await Rol.crear(rolData);
        res.status(201).json({ mensaje: 'Rol creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el rol:', err);
        res.status(500).json({ mensaje: 'Error al crear el rol', error: err.message });
    }
};

// Obtener todos los roles
exports.obtenerRoles = async (req, res) => {
    try {
        const results = await Rol.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener los roles:', err);
        res.status(500).json({ mensaje: 'Error al obtener los roles', error: err.message });
    }
};

// Actualizar un rol
exports.actualizarRol = async (req, res) => {
    try {
        const idRol = req.params.id;
        const rolData = req.body;
        const result = await Rol.actualizar(idRol, rolData);
        res.status(200).json({ mensaje: 'Rol actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el rol:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el rol', error: err.message });
    }
};

// Eliminar un rol
exports.eliminarRol = async (req, res) => {
    try {
        const idRol = req.params.id;
        const result = await Rol.eliminar(idRol);
        res.status(200).json({ mensaje: 'Rol eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el rol:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el rol', error: err.message });
    }
};
