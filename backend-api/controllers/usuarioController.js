const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await Usuario.crear({ username, password: hashedPassword });
        res.status(201).json({ mensaje: 'Usuario creado exitosamente', result });
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ mensaje: 'Error al crear el usuario', error: err.message });
    }
};

// Iniciar sesión (Login)
exports.iniciarSesion = async (req, res) => {
    try {
        const { username, password } = req.body;
        const usuario = await Usuario.obtenerPorNombre(username);

        if (!usuario) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, usuario.Password);
        if (!isMatch) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

        const payload = { codUsuario: usuario.codUsuario, username: usuario.Usuario };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (err) {
        console.error('Error al iniciar sesión:', err);
        res.status(500).json({ mensaje: 'Error al iniciar sesión', error: err.message });
    }
};

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
    try {
        const results = await Usuario.obtenerTodos();
        res.status(200).json(results);
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).json({ mensaje: 'Error al obtener usuarios', error: err.message });
    }
};

// Actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const codUsuario = req.params.id;
        const { username, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await Usuario.actualizar(codUsuario, { username, password: hashedPassword });
        res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', result });
    } catch (err) {
        console.error('Error al actualizar el usuario:', err);
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: err.message });
    }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const codUsuario = req.params.id;
        const result = await Usuario.eliminar(codUsuario);
        res.status(200).json({ mensaje: 'Usuario eliminado exitosamente', result });
    } catch (err) {
        console.error('Error al eliminar el usuario:', err);
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: err.message });
    }
};
