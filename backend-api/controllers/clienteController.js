const Cliente = require('../models/Cliente');

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
    try {
        const clienteData = req.body;
        const result = await Cliente.crear(clienteData);
        res.status(201).json({ mensaje: 'Cliente creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el cliente:', err);
        res.status(500).json({ mensaje: 'Error al crear el cliente', error: err.message });
    }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const results = await Cliente.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener clientes:', err);
        res.status(500).json({ mensaje: 'Error al obtener clientes', error: err.message });
    }
};

// Actualizar un cliente
exports.actualizarCliente = async (req, res) => {
    try {
        const codCliente = req.params.id;
        const clienteData = req.body;
        const result = await Cliente.actualizar(codCliente, clienteData);
        res.status(200).json({ mensaje: 'Cliente actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el cliente:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el cliente', error: err.message });
    }
};

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
    try {
        const codCliente = req.params.id;
        const result = await Cliente.eliminar(codCliente);
        res.status(200).json({ mensaje: 'Cliente eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el cliente:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el cliente', error: err.message });
    }
};
