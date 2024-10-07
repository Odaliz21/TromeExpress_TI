const connection = require('../config/db');

const Rol = {
    // Crear un nuevo rol
    crear: async (data) => {
        const { NombreRol } = data;
        const [result] = await connection.query('INSERT INTO Rol (NombreRol) VALUES (?)', [NombreRol]);
        return result;
    },
    
    // Obtener todos los roles
    obtenerTodos: async () => {
        const [results] = await connection.query('SELECT * FROM Rol');
        return results;
    },

    // Actualizar un rol
    actualizar: async (idRol, data) => {
        const { NombreRol } = data;
        const [result] = await connection.query('UPDATE Rol SET NombreRol = ? WHERE idRol = ?', [NombreRol, idRol]);
        return result;
    },

    // Eliminar un rol
    eliminar: async (idRol) => {
        const [result] = await connection.query('DELETE FROM Rol WHERE idRol = ?', [idRol]);
        return result;
    }
};

module.exports = Rol;
