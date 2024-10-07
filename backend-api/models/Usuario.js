const connection = require('../config/db');

const Usuario = {
    // Crear un nuevo usuario
    crear: async (data) => {
        const { username, password } = data;
        const [result] = await connection.execute('INSERT INTO Usuario (Usuario, Password) VALUES (?, ?)', [username, password]);
        return result;
    },

    // Obtener un usuario por su nombre de usuario
    obtenerPorNombre: async (username) => {
        const [results] = await connection.execute('SELECT * FROM Usuario WHERE Usuario = ?', [username]);
        return results[0];
    },

    // Obtener todos los usuarios
    obtenerTodos: async () => {
        const [results] = await connection.execute('SELECT * FROM Usuario');
        return results;
    },

    // Actualizar un usuario
    actualizar: async (codUsuario, data) => {
        const { username, password } = data;
        const [result] = await connection.execute('UPDATE Usuario SET Usuario = ?, Password = ? WHERE codUsuario = ?', [username, password, codUsuario]);
        return result;
    },

    // Eliminar un usuario
    eliminar: async (codUsuario) => {
        const [result] = await connection.execute('DELETE FROM Usuario WHERE codUsuario = ?', [codUsuario]);
        return result;
    }
};

module.exports = Usuario;
